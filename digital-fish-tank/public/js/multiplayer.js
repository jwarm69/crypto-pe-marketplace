/**
 * Multiplayer Controller
 * Handles all Socket.IO communication and multiplayer features
 */

class MultiplayerController {
    constructor() {
        this.socket = null;
        this.playerId = null;
        this.isConnected = false;
        this.isVisiting = false;
        this.currentTankId = null;
        
        this.connect();
    }
    
    connect() {
        try {
            // Check if Socket.IO is available
            if (typeof io === 'undefined') {
                console.error('❌ Socket.IO library not loaded');
                this.handleConnectionError('Multiplayer features unavailable (Socket.IO not loaded)');
                return;
            }
            
            console.log('🌐 Connecting to server...');
            
            // Configure Socket.IO with timeout and better error handling
            this.socket = io({
                timeout: 10000,
                forceNew: true,
                transports: ['websocket', 'polling'] // Fallback for Safari
            });
            
            this.setupEventListeners();
            
        } catch (error) {
            console.error('❌ Failed to connect to server:', error);
            this.handleConnectionError('Failed to connect to server: ' + error.message);
        }
    }
    
    handleConnectionError(message) {
        console.warn('🔌 Multiplayer connection issue:', message);
        
        // Show user-friendly message
        if (typeof uiController !== 'undefined' && uiController.showNotification) {
            uiController.showNotification(message, 'error');
        }
        
        // Set up retry mechanism
        setTimeout(() => {
            if (!this.isConnected && typeof io !== 'undefined') {
                console.log('🔄 Retrying connection...');
                this.connect();
            }
        }, 5000);
    }
    
    setupEventListeners() {
        // Connection events
        this.socket.on('connect', () => {
            this.isConnected = true;
            this.playerId = this.socket.id;
            console.log('✅ Connected to server:', this.playerId);
            
            if (typeof uiController !== 'undefined' && uiController.showNotification) {
                uiController.showNotification('Connected to server!', 'success');
            }
        });
        
        this.socket.on('disconnect', (reason) => {
            this.isConnected = false;
            console.log('❌ Disconnected from server:', reason);
            
            if (typeof uiController !== 'undefined' && uiController.showNotification) {
                uiController.showNotification('Disconnected from server', 'error');
            }
            
            // Auto-reconnect for certain disconnect reasons
            if (reason === 'transport close' || reason === 'transport error') {
                setTimeout(() => {
                    if (!this.isConnected) {
                        console.log('🔄 Attempting to reconnect...');
                        this.socket.connect();
                    }
                }, 3000);
            }
        });
        
        this.socket.on('connect_error', (error) => {
            console.error('🚨 Connection error:', error);
            this.handleConnectionError('Failed to connect to server');
        });
        
        this.socket.on('connect_timeout', () => {
            console.error('⏱️ Connection timeout');
            this.handleConnectionError('Server connection timed out');
        });
        
        // Game initialization
        this.socket.on('gameInitialized', (data) => {
            console.log('🎮 Game initialized:', data);
            this.handleGameInitialized(data);
        });
        
        // Tank updates
        this.socket.on('tankUpdated', (data) => {
            this.handleTankUpdate(data);
        });
        
        // Fish interactions
        this.socket.on('fishFed', (data) => {
            this.handleFishFed(data);
        });
        
        this.socket.on('fishAdded', (data) => {
            this.handleFishAdded(data);
        });
        
        // Tank maintenance
        this.socket.on('tankCleaned', (data) => {
            this.handleTankCleaned(data);
        });
        
        // Shopping
        this.socket.on('decorationAdded', (data) => {
            this.handleDecorationAdded(data);
        });
        
        this.socket.on('purchaseError', (data) => {
            uiController.showNotification(data.message, 'error');
        });
        
        // Visiting system
        this.socket.on('visitStarted', (data) => {
            this.handleVisitStarted(data);
        });
        
        this.socket.on('visitError', (data) => {
            uiController.showNotification(data.message, 'error');
        });
        
        this.socket.on('returnedHome', (data) => {
            this.handleReturnedHome(data);
        });
        
        this.socket.on('visitorJoined', (data) => {
            uiController.addMessage(`👋 ${data.visitor.nickname} is visiting your tank!`);
        });
        
        this.socket.on('visitorLeft', (data) => {
            uiController.addMessage(`👋 ${data.visitor.nickname} left your tank.`);
        });
        
        // Error handling
        this.socket.on('error', (error) => {
            console.error('🚨 Socket error:', error);
            uiController.showNotification('Connection error occurred', 'error');
        });
    }
    
    handleGameInitialized(data) {
        // Update UI with initial game data
        if (uiController) {
            uiController.updateGameData(data);
        }
        
        // Initialize fish tank with initial data
        if (fishTank) {
            fishTank.updateTankData(data.tank);
            fishTank.updatePlayerData(data.player);
        }
        
        this.currentTankId = data.tank.id;
        
        uiController.addMessage('🐠 Welcome to your digital aquarium!');
        uiController.addMessage(`💰 You have ${data.player.aquaCoins} AquaCoins to start.`);
    }
    
    handleTankUpdate(data) {
        if (fishTank && data.fish) {
            // Update fish positions and states
            data.fish.forEach(fishData => {
                if (fishTank.fish.has(fishData.id)) {
                    const fishObj = fishTank.fish.get(fishData.id);
                    fishObj.data = fishData;
                    
                    // Update AI with new data
                    if (fishObj.ai) {
                        fishObj.ai.updateFishData(fishData);
                    }
                }
            });
        }
        
        if (data.settings && uiController) {
            uiController.updateTankData({ settings: data.settings });
        }
    }
    
    handleFishFed(data) {
        if (fishTank) {
            // Update fish data
            if (fishTank.fish.has(data.fish.id)) {
                const fishObj = fishTank.fish.get(data.fish.id);
                fishObj.data = data.fish;
                
                if (fishObj.ai) {
                    fishObj.ai.updateFishData(data.fish);
                }
            }
            
            // Update player data
            fishTank.updatePlayerData(data.player);
        }
        
        if (uiController) {
            uiController.updatePlayerData(data.player);
            uiController.addMessage(`🍽️ Fish fed! +${2} AquaCoins, +${5} XP`);
        }
    }
    
    handleFishAdded(data) {
        if (fishTank) {
            fishTank.addFish(data.fish);
            fishTank.updatePlayerData(data.player);
        }
        
        if (uiController) {
            uiController.updatePlayerData(data.player);
            uiController.addMessage(`🐠 New ${data.fish.species} added to your tank!`);
        }
    }
    
    handleTankCleaned(data) {
        if (fishTank) {
            fishTank.updateTankData(data.tank);
            fishTank.updatePlayerData(data.player);
        }
        
        if (uiController) {
            uiController.updateTankData(data.tank);
            uiController.updatePlayerData(data.player);
            uiController.addMessage(`🧽 Tank cleaned! +${10} AquaCoins, +${15} XP`);
        }
    }
    
    handleDecorationAdded(data) {
        // Add decoration to tank (implementation would depend on decoration system)
        if (uiController) {
            uiController.updatePlayerData(data.player);
            uiController.addMessage(`🌿 New decoration added to your tank!`);
        }
    }
    
    handleVisitStarted(data) {
        this.isVisiting = true;
        this.currentTankId = data.tank.id;
        
        if (fishTank) {
            fishTank.updateTankData(data.tank);
        }
        
        if (uiController) {
            uiController.updateTankData(data.tank);
            uiController.enableVisitorMode();
        }
    }
    
    handleReturnedHome(data) {
        this.isVisiting = false;
        this.currentTankId = data.tank.id;
        
        if (fishTank) {
            fishTank.updateTankData(data.tank);
        }
        
        if (uiController) {
            uiController.updateTankData(data.tank);
            uiController.disableVisitorMode();
        }
    }
    
    // Actions that can be sent to server
    feedFish(fishId) {
        if (!this.isConnected) {
            uiController.showNotification('Not connected to server', 'error');
            return;
        }
        
        if (this.isVisiting) {
            uiController.showNotification('Cannot feed fish while visiting', 'error');
            return;
        }
        
        this.socket.emit('feedFish', { fishId: fishId });
    }
    
    cleanTank() {
        if (!this.isConnected) {
            uiController.showNotification('Not connected to server', 'error');
            return;
        }
        
        if (this.isVisiting) {
            uiController.showNotification('Cannot clean tank while visiting', 'error');
            return;
        }
        
        this.socket.emit('cleanTank');
    }
    
    buyItem(itemId) {
        if (!this.isConnected) {
            uiController.showNotification('Not connected to server', 'error');
            return;
        }
        
        if (this.isVisiting) {
            uiController.showNotification('Cannot buy items while visiting', 'error');
            return;
        }
        
        this.socket.emit('buyItem', { itemId: itemId });
    }
    
    visitTank(friendCode) {
        if (!this.isConnected) {
            uiController.showNotification('Not connected to server', 'error');
            return;
        }
        
        this.socket.emit('visitTank', { friendCode: friendCode });
    }
    
    returnHome() {
        if (!this.isConnected) {
            uiController.showNotification('Not connected to server', 'error');
            return;
        }
        
        if (this.isVisiting) {
            this.socket.emit('returnHome');
        }
    }
    
    updateTank(tankData) {
        if (!this.isConnected || this.isVisiting) {
            return;
        }
        
        // Send tank updates to server
        this.socket.emit('updateTank', tankData);
    }
    
    // Utility methods
    getConnectionStatus() {
        return {
            connected: this.isConnected,
            playerId: this.playerId,
            visiting: this.isVisiting,
            currentTankId: this.currentTankId
        };
    }
    
    reconnect() {
        if (!this.isConnected) {
            this.socket.connect();
        }
    }
}

// Global multiplayer controller instance
let multiplayerController = null;

// Safe initialization function that waits for dependencies
function initializeMultiplayer() {
    try {
        // Only initialize if socket.io is available
        if (typeof io === 'undefined') {
            console.warn('⚠️ Socket.IO not available, multiplayer disabled');
            return;
        }
        
        multiplayerController = new MultiplayerController();
        window.multiplayerController = multiplayerController; // Make globally accessible
        console.log('🌐 Multiplayer controller initialized');
        
    } catch (error) {
        console.error('❌ Failed to initialize multiplayer:', error);
    }
}

// Make globally available
window.initializeMultiplayer = initializeMultiplayer;

// Initialize multiplayer controller when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Wait a moment for other systems to initialize
    setTimeout(() => {
        initializeMultiplayer();
        
        // Setup periodic tank updates if we have a fish tank
        setInterval(() => {
            if (fishTank && multiplayerController && multiplayerController.isConnected && !multiplayerController.isVisiting) {
                // Send fish positions and states to server
                const fishData = [];
                for (let [fishId, fishObj] of fishTank.fish) {
                    fishData.push({
                        id: fishId,
                        position: {
                            x: fishObj.body.position.x,
                            y: fishObj.body.position.y,
                            z: fishObj.body.position.z
                        },
                        velocity: {
                            x: fishObj.body.velocity.x,
                            y: fishObj.body.velocity.y,
                            z: fishObj.body.velocity.z
                        }
                    });
                }
                
                if (fishData.length > 0) {
                    multiplayerController.updateTank({ fish: fishData });
                }
            }
        }, 1000); // Update every second
        
    }, 1000);
});

// Add a return home button when visiting
document.addEventListener('DOMContentLoaded', () => {
    const returnBtn = document.createElement('button');
    returnBtn.id = 'return-home-btn';
    returnBtn.className = 'action-btn';
    returnBtn.innerHTML = '🏠 Return Home';
    returnBtn.style.display = 'none';
    returnBtn.onclick = () => {
        if (multiplayerController) {
            multiplayerController.returnHome();
        }
    };
    
    // Add to left panel
    const leftPanel = document.getElementById('left-panel');
    if (leftPanel) {
        leftPanel.appendChild(returnBtn);
    }
    
    // Show/hide return button based on visiting status
    const originalEnableVisitor = uiController?.enableVisitorMode;
    const originalDisableVisitor = uiController?.disableVisitorMode;
    
    if (uiController) {
        uiController.enableVisitorMode = function() {
            if (originalEnableVisitor) originalEnableVisitor.call(this);
            returnBtn.style.display = 'block';
        };
        
        uiController.disableVisitorMode = function() {
            if (originalDisableVisitor) originalDisableVisitor.call(this);
            returnBtn.style.display = 'none';
        };
    }
});