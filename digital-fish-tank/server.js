const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3002;

// Game state storage
const tanks = new Map(); // tankId -> tank data
const players = new Map(); // playerId -> player data
const friendCodes = new Map(); // friendCode -> tankId

// Fish species definitions
const fishSpecies = [
  { id: 'guppy', name: 'Guppy', price: 50, rarity: 'common', breedTime: 300000 },
  { id: 'neon_tetra', name: 'Neon Tetra', price: 75, rarity: 'common', breedTime: 480000 },
  { id: 'angelfish', name: 'Angelfish', price: 150, rarity: 'uncommon', breedTime: 720000 },
  { id: 'betta', name: 'Betta Fish', price: 200, rarity: 'uncommon', breedTime: 600000 },
  { id: 'discus', name: 'Discus', price: 500, rarity: 'rare', breedTime: 1200000 },
  { id: 'arowana', name: 'Arowana', price: 1000, rarity: 'legendary', breedTime: 1800000 }
];

// Decoration items
const decorationItems = [
  { id: 'plant_small', name: 'Small Plant', price: 25, category: 'plants' },
  { id: 'plant_large', name: 'Large Plant', price: 75, category: 'plants' },
  { id: 'rock_small', name: 'Small Rock', price: 15, category: 'rocks' },
  { id: 'rock_large', name: 'Large Rock', price: 50, category: 'rocks' },
  { id: 'castle', name: 'Castle', price: 200, category: 'ornaments' },
  { id: 'treasure_chest', name: 'Treasure Chest', price: 150, category: 'ornaments' },
  { id: 'coral', name: 'Coral', price: 100, category: 'plants' },
  { id: 'driftwood', name: 'Driftwood', price: 80, category: 'ornaments' }
];

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: Date.now(),
    uptime: process.uptime(),
    players: players.size,
    tanks: tanks.size
  });
});

// API endpoint to check server before connecting
app.get('/api/status', (req, res) => {
  res.json({
    online: true,
    playerCount: players.size,
    tankCount: tanks.size,
    serverTime: Date.now()
  });
});

// Generate unique friend code
function generateFriendCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Create default tank for new player
function createDefaultTank(playerId) {
  const friendCode = generateFriendCode();
  const tank = {
    id: `tank_${playerId}`,
    ownerId: playerId,
    friendCode: friendCode,
    name: "My Aquarium",
    fish: [
      {
        id: `fish_${Date.now()}`,
        species: 'guppy',
        name: 'Starter Fish',
        age: 0,
        health: 100,
        happiness: 80,
        hunger: 50,
        position: { x: 0, y: 0, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        size: 1.0,
        color: 0xff6b6b,
        lastFed: Date.now(),
        breedReady: false,
        genetics: {
          size: Math.random() * 0.5 + 0.75,
          speed: Math.random() * 0.5 + 0.75,
          fertility: Math.random() * 0.5 + 0.75
        }
      }
    ],
    decorations: [
      { id: 'plant_1', itemId: 'plant_small', position: { x: -5, y: 0, z: -5 } },
      { id: 'rock_1', itemId: 'rock_small', position: { x: 5, y: 0, z: 5 } }
    ],
    settings: {
      temperature: 24, // Celsius
      cleanliness: 90,
      lighting: 'medium',
      filterLevel: 1
    },
    lastCleaned: Date.now(),
    createdAt: Date.now()
  };

  tanks.set(tank.id, tank);
  friendCodes.set(friendCode, tank.id);
  return tank;
}

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.id}`);
  
  // Initialize new player
  const newPlayer = {
    id: socket.id,
    nickname: `Aquarist_${Math.floor(Math.random() * 1000)}`,
    aquaCoins: 500, // Starting currency
    xp: 0,
    level: 1,
    currentTankId: null,
    isVisiting: false,
    joinedAt: Date.now()
  };
  
  players.set(socket.id, newPlayer);
  
  // Create default tank for new player
  const defaultTank = createDefaultTank(socket.id);
  newPlayer.currentTankId = defaultTank.id;
  
  // Send initial game state
  socket.emit('gameInitialized', {
    player: newPlayer,
    tank: defaultTank,
    fishSpecies: fishSpecies,
    decorationItems: decorationItems
  });
  
  // Handle tank updates (fish movement, status changes)
  socket.on('updateTank', (data) => {
    const player = players.get(socket.id);
    if (!player || !player.currentTankId) return;
    
    const tank = tanks.get(player.currentTankId);
    if (!tank || tank.ownerId !== socket.id) return;
    
    // Update tank data
    if (data.fish) {
      data.fish.forEach(fishUpdate => {
        const fish = tank.fish.find(f => f.id === fishUpdate.id);
        if (fish) {
          fish.position = fishUpdate.position;
          fish.velocity = fishUpdate.velocity;
          fish.hunger = Math.max(0, fish.hunger - 0.1); // Gradual hunger increase
          fish.happiness = Math.max(0, fish.happiness - 0.05); // Gradual happiness decrease
        }
      });
    }
    
    // Broadcast to visitors
    socket.to(`tank_${tank.id}`).emit('tankUpdated', { fish: tank.fish });
  });
  
  // Handle feeding fish
  socket.on('feedFish', (data) => {
    const player = players.get(socket.id);
    if (!player || !player.currentTankId) return;
    
    const tank = tanks.get(player.currentTankId);
    if (!tank || tank.ownerId !== socket.id) return;
    
    const fish = tank.fish.find(f => f.id === data.fishId);
    if (!fish) return;
    
    // Feed the fish
    fish.hunger = Math.min(100, fish.hunger + 30);
    fish.happiness = Math.min(100, fish.happiness + 10);
    fish.health = Math.min(100, fish.health + 5);
    fish.lastFed = Date.now();
    
    // Award XP and coins
    player.xp += 5;
    player.aquaCoins += 2;
    player.level = Math.floor(player.xp / 100) + 1;
    
    socket.emit('fishFed', { fish: fish, player: player });
    socket.to(`tank_${tank.id}`).emit('tankUpdated', { fish: tank.fish });
  });
  
  // Handle tank cleaning
  socket.on('cleanTank', () => {
    const player = players.get(socket.id);
    if (!player || !player.currentTankId) return;
    
    const tank = tanks.get(player.currentTankId);
    if (!tank || tank.ownerId !== socket.id) return;
    
    // Clean the tank
    tank.settings.cleanliness = 100;
    tank.lastCleaned = Date.now();
    
    // Improve all fish happiness and health
    tank.fish.forEach(fish => {
      fish.happiness = Math.min(100, fish.happiness + 15);
      fish.health = Math.min(100, fish.health + 10);
    });
    
    // Award XP and coins
    player.xp += 15;
    player.aquaCoins += 10;
    player.level = Math.floor(player.xp / 100) + 1;
    
    socket.emit('tankCleaned', { tank: tank, player: player });
    socket.to(`tank_${tank.id}`).emit('tankUpdated', { settings: tank.settings, fish: tank.fish });
  });
  
  // Handle visiting friend's tank
  socket.on('visitTank', (data) => {
    const friendCode = data.friendCode;
    const tankId = friendCodes.get(friendCode);
    
    if (!tankId) {
      socket.emit('visitError', { message: 'Friend code not found' });
      return;
    }
    
    const tank = tanks.get(tankId);
    if (!tank) {
      socket.emit('visitError', { message: 'Tank not found' });
      return;
    }
    
    const player = players.get(socket.id);
    if (!player) return;
    
    // Join the tank room
    socket.join(`tank_${tankId}`);
    player.isVisiting = true;
    player.currentTankId = tankId;
    
    socket.emit('visitStarted', { tank: tank });
    socket.to(`tank_${tankId}`).emit('visitorJoined', { visitor: player });
  });
  
  // Handle returning to own tank
  socket.on('returnHome', () => {
    const player = players.get(socket.id);
    if (!player) return;
    
    // Leave current tank room if visiting
    if (player.isVisiting) {
      socket.leave(`tank_${player.currentTankId}`);
      socket.to(`tank_${player.currentTankId}`).emit('visitorLeft', { visitor: player });
    }
    
    // Find player's own tank
    const ownTank = Array.from(tanks.values()).find(tank => tank.ownerId === socket.id);
    if (ownTank) {
      player.currentTankId = ownTank.id;
      player.isVisiting = false;
      socket.emit('returnedHome', { tank: ownTank });
    }
  });
  
  // Handle buying items from shop
  socket.on('buyItem', (data) => {
    const player = players.get(socket.id);
    if (!player) return;
    
    const item = [...fishSpecies, ...decorationItems].find(i => i.id === data.itemId);
    if (!item || player.aquaCoins < item.price) {
      socket.emit('purchaseError', { message: 'Insufficient funds or item not found' });
      return;
    }
    
    player.aquaCoins -= item.price;
    
    if (fishSpecies.find(f => f.id === item.id)) {
      // Adding a fish
      const tank = tanks.get(player.currentTankId);
      if (tank && tank.ownerId === socket.id) {
        const newFish = {
          id: `fish_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          species: item.id,
          name: item.name,
          age: 0,
          health: 100,
          happiness: 80,
          hunger: 50,
          position: { x: Math.random() * 10 - 5, y: Math.random() * 5, z: Math.random() * 10 - 5 },
          velocity: { x: 0, y: 0, z: 0 },
          size: 1.0,
          color: Math.random() * 0xffffff,
          lastFed: Date.now(),
          breedReady: false,
          genetics: {
            size: Math.random() * 0.5 + 0.75,
            speed: Math.random() * 0.5 + 0.75,
            fertility: Math.random() * 0.5 + 0.75
          }
        };
        tank.fish.push(newFish);
        socket.emit('fishAdded', { fish: newFish, player: player });
      }
    } else {
      // Adding a decoration
      const tank = tanks.get(player.currentTankId);
      if (tank && tank.ownerId === socket.id) {
        const newDecoration = {
          id: `dec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          itemId: item.id,
          position: { x: 0, y: 0, z: 0 } // Player will position it
        };
        tank.decorations.push(newDecoration);
        socket.emit('decorationAdded', { decoration: newDecoration, player: player });
      }
    }
  });
  
  // Handle player disconnect
  socket.on('disconnect', () => {
    console.log(`Player disconnected: ${socket.id}`);
    const player = players.get(socket.id);
    
    if (player && player.isVisiting) {
      socket.to(`tank_${player.currentTankId}`).emit('visitorLeft', { visitor: player });
    }
    
    players.delete(socket.id);
  });
});

// Periodic tank maintenance (run every minute)
setInterval(() => {
  const now = Date.now();
  
  tanks.forEach(tank => {
    // Decrease tank cleanliness over time
    const hoursSinceClean = (now - tank.lastCleaned) / (1000 * 60 * 60);
    tank.settings.cleanliness = Math.max(0, 100 - (hoursSinceClean * 5));
    
    // Update fish status
    tank.fish.forEach(fish => {
      const hoursSinceFed = (now - fish.lastFed) / (1000 * 60 * 60);
      
      // Increase hunger over time
      fish.hunger = Math.max(0, fish.hunger - (hoursSinceFed * 10));
      
      // Decrease happiness if hungry or tank is dirty
      if (fish.hunger < 20 || tank.settings.cleanliness < 30) {
        fish.happiness = Math.max(0, fish.happiness - 2);
      }
      
      // Health affected by happiness and cleanliness
      if (fish.happiness < 30 || tank.settings.cleanliness < 20) {
        fish.health = Math.max(0, fish.health - 1);
      } else if (fish.happiness > 70 && tank.settings.cleanliness > 80) {
        fish.health = Math.min(100, fish.health + 0.5);
      }
      
      // Check if fish can breed
      fish.breedReady = (fish.health > 80 && fish.happiness > 70 && fish.age > 86400000); // 1 day old
    });
  });
}, 60000); // Run every minute

server.listen(port, () => {
  console.log(`🐠 Digital Fish Tank Server running at http://localhost:${port}`);
  console.log(`🌊 WebSocket server ready for multiplayer aquarium connections`);
});