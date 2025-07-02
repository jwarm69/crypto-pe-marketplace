# 🐠 Digital Fish Tank

A beautiful 3D digital aquarium game with Tamagotchi-style fish care mechanics and multiplayer features.

## ✨ Features

### 🎮 Core Gameplay
- **3D Aquarium Environment** - Realistic glass tank with water effects and lighting
- **Intelligent Fish AI** - Fish with autonomous swimming patterns, schooling behavior, and needs
- **Fish Care System** - Feed, clean, and monitor fish health, happiness, and hunger
- **Growth & Lifecycle** - Fish age, grow, and can breed when well-cared for

### 💰 Economy & Progress
- **AquaCoins Currency** - Earn coins through fish care activities
- **Experience System** - Level up through dedicated fish care
- **Shop System** - Buy new fish species and tank decorations
- **Fish Breeding** - Healthy fish can lay eggs and create offspring

### 🌐 Multiplayer Features
- **Friend Codes** - Share unique codes to let friends visit your tank
- **Tank Visiting** - Explore friends' aquariums as read-only visitors
- **Social Interactions** - See what friends have achieved
- **Real-time Updates** - Watch fish swim and interact in real-time

### 🎨 Customization
- **Tank Decorations** - Plants, rocks, castles, and more
- **Fish Varieties** - From common Guppies to legendary Arowanas
- **Tank Themes** - Customize your aquarium's appearance

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Open Your Browser**
   Navigate to `http://localhost:3002`

4. **Start Fish Care**
   - Click on fish to select them
   - Use the Feed button to feed hungry fish
   - Clean your tank regularly
   - Buy new fish and decorations from the shop

## 🎯 How to Play

### Fish Care Basics
- **Feeding**: Click on a fish and press the Feed button when hunger is low
- **Cleaning**: Keep tank cleanliness above 80% for healthy fish
- **Monitoring**: Watch health, happiness, and hunger levels

### Currency & Shopping
- **Earn AquaCoins**: Feed fish (+2), clean tank (+10), level up bonuses
- **Spend Wisely**: New fish cost 50-1000 coins depending on rarity
- **Decorations**: Improve tank environment with plants and ornaments

### Multiplayer
- **Share Your Code**: Copy your 6-character friend code from the left panel
- **Visit Friends**: Enter a friend's code to visit their tank
- **Return Home**: Use the Return Home button when visiting

## 🐠 Fish Species

| Fish | Price | Rarity | Special Notes |
|------|-------|--------|---------------|
| Guppy | 50 💰 | Common | Perfect starter fish |
| Neon Tetra | 75 💰 | Common | Beautiful schooling fish |
| Angelfish | 150 💰 | Uncommon | Elegant and graceful |
| Betta | 200 💰 | Uncommon | Vibrant colors |
| Discus | 500 💰 | Rare | Premium showpiece |
| Arowana | 1000 💰 | Legendary | Lucky fish! |

## 🎮 Controls

- **Mouse Click**: Select fish or interact with UI
- **Feed Button**: Feed selected fish (costs hunger)
- **Clean Button**: Clean entire tank (+cleanliness)
- **Shop Button**: Open item shop
- **Friends Button**: Access multiplayer features

## 🔧 Technical Features

- **Three.js 3D Graphics** - Hardware-accelerated 3D rendering
- **Cannon-ES Physics** - Realistic fish movement and collisions
- **Socket.IO Multiplayer** - Real-time multiplayer communication
- **Responsive Design** - Works on desktop and mobile devices

## 📁 Project Structure

```
digital-fish-tank/
├── server.js              # Express + Socket.IO server
├── package.json           # Dependencies and scripts
├── public/
│   ├── index.html         # Main game page
│   ├── css/
│   │   └── style.css      # Game styling
│   └── js/
│       ├── fish-tank.js   # 3D tank environment
│       ├── fish-ai.js     # Fish behavior system
│       ├── ui-controller.js # User interface
│       └── multiplayer.js  # Socket.IO client
```

## 🛠️ Development

### Running in Development Mode
```bash
npm run dev  # Uses nodemon for auto-restart
```

### Adding New Features
1. Fish species: Edit `fishSpecies` array in `server.js`
2. Decorations: Add to `decorationItems` array
3. New behaviors: Extend `FishAI` class in `fish-ai.js`

## 🎯 Future Features

- [ ] Fish breeding with genetic inheritance
- [ ] Seasonal events and limited-time fish
- [ ] Tank size upgrades
- [ ] Public tank gallery
- [ ] Achievement system
- [ ] Mobile app version

## 🐛 Troubleshooting

**Fish not swimming?**
- Check browser console for JavaScript errors
- Ensure WebGL is supported in your browser

**Multiplayer not working?**
- Verify server is running on port 3002
- Check firewall settings
- Ensure both players are connected to the same server

**Performance issues?**
- Reduce number of fish in tank
- Close other browser tabs
- Try a different browser (Chrome recommended)

## 🤝 Contributing

This is a digital pet project! Feel free to:
- Add new fish species
- Improve AI behaviors  
- Create new decorations
- Enhance multiplayer features

## 📄 License

MIT License - Feel free to modify and share!

---

**Enjoy caring for your digital fish! 🐠💙**