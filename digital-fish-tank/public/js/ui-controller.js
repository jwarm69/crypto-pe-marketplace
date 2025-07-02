/**
 * UI Controller
 * Handles all user interface interactions and updates
 */

class UIController {
    constructor() {
        this.currentShopTab = 'fish';
        this.fishSpecies = [];
        this.decorationItems = [];
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Action buttons
        document.getElementById('feed-btn').addEventListener('click', () => this.feedSelectedFish());
        document.getElementById('clean-btn').addEventListener('click', () => this.cleanTank());
        document.getElementById('shop-btn').addEventListener('click', () => this.openShop());
        document.getElementById('friends-btn').addEventListener('click', () => this.openFriends());
        
        // Friend code actions
        document.getElementById('copy-code-btn').addEventListener('click', () => this.copyFriendCode());
        document.getElementById('visit-btn').addEventListener('click', () => this.visitFriend());
        
        // Enter key for friend code input
        document.getElementById('friend-code-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.visitFriend();
            }
        });
        
        // Modal close events
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeAllModals();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }
    
    feedSelectedFish() {
        if (fishTank && fishTank.selectedFish) {
            // Send feed command to server
            if (window.multiplayerController && window.multiplayerController.isConnected) {
                window.multiplayerController.feedFish(fishTank.selectedFish);
            } else {
                console.warn('🔌 Multiplayer not connected, feeding locally only');
            }
            
            // Visual feedback
            fishTank.feedFish(fishTank.selectedFish);
            this.addMessage('🍽️ Fed your fish!');
        } else {
            this.addMessage('❗ Select a fish first by clicking on it.');
        }
    }
    
    cleanTank() {
        // Send clean command to server
        if (window.multiplayerController && window.multiplayerController.isConnected) {
            window.multiplayerController.cleanTank();
        } else {
            console.warn('🔌 Multiplayer not connected, cleaning locally only');
        }
        
        this.addMessage('🧽 Cleaning tank...');
    }
    
    openShop() {
        document.getElementById('shop-modal').style.display = 'flex';
        this.updateShopDisplay();
    }
    
    closeShop() {
        document.getElementById('shop-modal').style.display = 'none';
    }
    
    openFriends() {
        document.getElementById('friends-modal').style.display = 'flex';
        this.updateFriendsDisplay();
    }
    
    closeFriends() {
        document.getElementById('friends-modal').style.display = 'none';
    }
    
    closeAllModals() {
        document.getElementById('shop-modal').style.display = 'none';
        document.getElementById('friends-modal').style.display = 'none';
    }
    
    copyFriendCode() {
        const friendCode = document.getElementById('friend-code-display').textContent;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(friendCode).then(() => {
                this.addMessage('📋 Friend code copied to clipboard!');
            }).catch(() => {
                this.fallbackCopyText(friendCode);
            });
        } else {
            this.fallbackCopyText(friendCode);
        }
    }
    
    fallbackCopyText(text) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.addMessage('📋 Friend code copied!');
        } catch (err) {
            this.addMessage('❗ Could not copy friend code. Please copy manually: ' + text);
        }
        
        document.body.removeChild(textArea);
    }
    
    visitFriend() {
        const friendCode = document.getElementById('friend-code-input').value.trim().toUpperCase();
        
        if (friendCode.length !== 6) {
            this.addMessage('❗ Friend code must be 6 characters long.');
            return;
        }
        
        if (window.multiplayerController) {
            window.multiplayerController.visitTank(friendCode);
            this.addMessage(`🚪 Visiting friend's tank (${friendCode})...`);
            document.getElementById('friend-code-input').value = '';
        }
    }
    
    showShopTab(tabName) {
        this.currentShopTab = tabName;
        
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[onclick="showShopTab('${tabName}')"]`).classList.add('active');
        
        this.updateShopDisplay();
    }
    
    updateShopDisplay() {
        const shopItems = document.getElementById('shop-items');
        shopItems.innerHTML = '';
        
        let items = [];
        if (this.currentShopTab === 'fish') {
            items = this.fishSpecies;
        } else {
            items = this.decorationItems;
        }
        
        items.forEach(item => {
            const itemElement = this.createShopItem(item);
            shopItems.appendChild(itemElement);
        });
    }
    
    createShopItem(item) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'shop-item';
        
        const playerCoins = fishTank && fishTank.playerData ? fishTank.playerData.aquaCoins : 0;
        const canAfford = playerCoins >= item.price;
        
        itemDiv.innerHTML = `
            <div class="shop-item-header">
                <span class="shop-item-name">${item.name}</span>
                <span class="shop-item-price">💰 ${item.price}</span>
            </div>
            ${item.rarity ? `<span class="rarity ${item.rarity}">${item.rarity}</span>` : ''}
            <div class="shop-item-description">
                ${this.getItemDescription(item)}
            </div>
            <button class="buy-btn" ${!canAfford ? 'disabled' : ''} onclick="uiController.buyItem('${item.id}')">
                ${canAfford ? 'Buy' : 'Insufficient Funds'}
            </button>
        `;
        
        return itemDiv;
    }
    
    getItemDescription(item) {
        if (item.rarity) {
            // Fish description
            const descriptions = {
                'guppy': 'Colorful and easy to care for. Great for beginners!',
                'neon_tetra': 'Small schooling fish with vibrant blue stripe.',
                'angelfish': 'Elegant fish with flowing fins. Requires more care.',
                'betta': 'Beautiful solitary fish with vibrant colors.',
                'discus': 'Premium fish known for their disc-like shape.',
                'arowana': 'Legendary fish that brings good fortune!'
            };
            return descriptions[item.id] || 'A beautiful fish for your aquarium.';
        } else {
            // Decoration description
            const descriptions = {
                'plant_small': 'Adds oxygen and natural beauty to your tank.',
                'plant_large': 'Large plant perfect for hiding spots.',
                'rock_small': 'Natural rock decoration.',
                'rock_large': 'Statement piece for your aquarium.',
                'castle': 'Medieval castle for your fish to explore.',
                'treasure_chest': 'Pirate treasure chest decoration.',
                'coral': 'Colorful coral for a tropical feel.',
                'driftwood': 'Natural driftwood adds character.'
            };
            return descriptions[item.id] || 'Decoration for your aquarium.';
        }
    }
    
    buyItem(itemId) {
        if (window.multiplayerController) {
            window.multiplayerController.buyItem(itemId);
        }
        
        // Close shop after purchase
        setTimeout(() => {
            this.updateShopDisplay(); // Refresh to show updated coins
        }, 100);
    }
    
    updateFriendsDisplay() {
        // Update recent visitors and public tanks
        // This would be populated by multiplayer controller
        const recentVisitors = document.getElementById('recent-visitors');
        const publicTanks = document.getElementById('public-tanks');
        
        // Placeholder content for now
        recentVisitors.innerHTML = '<p>No recent visitors</p>';
        publicTanks.innerHTML = '<p>Browse public tanks (Coming Soon)</p>';
    }
    
    updateGameData(gameData) {
        if (gameData.player) {
            this.updatePlayerData(gameData.player);
        }
        
        if (gameData.tank) {
            this.updateTankData(gameData.tank);
        }
        
        if (gameData.fishSpecies) {
            this.fishSpecies = gameData.fishSpecies;
        }
        
        if (gameData.decorationItems) {
            this.decorationItems = gameData.decorationItems;
        }
    }
    
    updatePlayerData(playerData) {
        document.getElementById('aqua-coins').textContent = playerData.aquaCoins;
        document.getElementById('player-level').textContent = playerData.level;
        document.getElementById('player-xp').textContent = playerData.xp;
    }
    
    updateTankData(tankData) {
        document.getElementById('tank-name').textContent = tankData.name;
        document.getElementById('temperature').textContent = `${tankData.settings.temperature}°C`;
        document.getElementById('cleanliness').textContent = `${Math.round(tankData.settings.cleanliness)}%`;
        document.getElementById('fish-count').textContent = tankData.fish.length;
        
        // Update friend code
        if (tankData.friendCode) {
            document.getElementById('friend-code-display').textContent = tankData.friendCode;
        }
    }
    
    addMessage(message) {
        if (fishTank) {
            fishTank.addMessage(message);
        }
        
        // Also show in console for debugging
        console.log('🎮 UI Message:', message);
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            border-left: 4px solid ${type === 'error' ? '#ff4757' : type === 'success' ? '#2ed573' : '#00ffff'};
            z-index: 3000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    updateProgressBar(containerId, value, maxValue = 100) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const percentage = (value / maxValue) * 100;
        const bar = container.querySelector('.progress-fill');
        const valueSpan = container.querySelector('span');
        
        if (bar) {
            bar.style.width = `${percentage}%`;
        }
        if (valueSpan) {
            valueSpan.textContent = `${Math.round(percentage)}%`;
        }
    }
    
    enableVisitorMode() {
        // Disable care actions when visiting
        document.getElementById('feed-btn').disabled = true;
        document.getElementById('clean-btn').disabled = true;
        document.getElementById('shop-btn').disabled = true;
        
        document.getElementById('feed-btn').textContent = '🔒 Feed (Visitor)';
        document.getElementById('clean-btn').textContent = '🔒 Clean (Visitor)';
        document.getElementById('shop-btn').textContent = '🔒 Shop (Visitor)';
        
        this.addMessage('👁️ You are now visiting a friend\'s tank');
    }
    
    disableVisitorMode() {
        // Re-enable care actions when returning home
        document.getElementById('feed-btn').disabled = false;
        document.getElementById('clean-btn').disabled = false;
        document.getElementById('shop-btn').disabled = false;
        
        document.getElementById('feed-btn').textContent = '🍽️ Feed';
        document.getElementById('clean-btn').textContent = '🧽 Clean';
        document.getElementById('shop-btn').textContent = '🛒 Shop';
        
        this.addMessage('🏠 Welcome back to your tank');
    }
}

// Global UI controller instance
let uiController = null;

// Global functions for HTML onclick events
function showShopTab(tabName) {
    if (uiController) {
        uiController.showShopTab(tabName);
    }
}

function closeShop() {
    if (uiController) {
        uiController.closeShop();
    }
}

function closeFriends() {
    if (uiController) {
        uiController.closeFriends();
    }
}

// Initialize UI controller when page loads
document.addEventListener('DOMContentLoaded', () => {
    uiController = new UIController();
});