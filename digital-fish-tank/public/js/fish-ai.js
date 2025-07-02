/**
 * Fish AI System
 * Handles fish behavior, swimming patterns, and interactions
 */

class FishAI {
    constructor(fishData, fishBody, tankSize) {
        this.fishData = fishData;
        this.body = fishBody;
        this.tankSize = tankSize;
        
        // Behavior state
        this.currentBehavior = 'wandering';
        this.behaviorTimer = 0;
        this.target = new CANNON.Vec3(0, 0, 0);
        this.lastDirectionChange = 0;
        
        // Swimming parameters
        this.maxSpeed = 2.0;
        this.turnSpeed = 3.0;
        this.swimForce = 5.0;
        
        // Behavior weights
        this.behaviors = {
            wandering: 0.6,
            schooling: 0.2,
            feeding: 0.1,
            resting: 0.1
        };
        
        // State tracking
        this.energy = 100;
        this.lastFeedTime = Date.now();
        this.socialNeed = 50;
        
        // Initialize random target
        this.setRandomTarget();
    }
    
    update(deltaTime) {
        // Update fish state
        this.updateState(deltaTime);
        
        // Choose behavior based on needs
        this.chooseBehavior();
        
        // Execute current behavior
        this.executeBehavior(deltaTime);
        
        // Apply movement forces
        this.applyMovement(deltaTime);
        
        // Keep fish in bounds
        this.keepInBounds();
        
        // Update timer
        this.behaviorTimer += deltaTime;
    }
    
    updateState(deltaTime) {
        const now = Date.now();
        
        // Decrease energy over time
        this.energy = Math.max(0, this.energy - (deltaTime * 0.01));
        
        // Increase hunger based on time since last fed
        const timeSinceFed = (now - this.fishData.lastFed) / (1000 * 60); // minutes
        this.fishData.hunger = Math.max(0, this.fishData.hunger - (timeSinceFed * 0.1));
        
        // Happiness affected by hunger and environment
        if (this.fishData.hunger < 30) {
            this.fishData.happiness = Math.max(0, this.fishData.happiness - (deltaTime * 0.02));
        } else if (this.fishData.hunger > 70) {
            this.fishData.happiness = Math.min(100, this.fishData.happiness + (deltaTime * 0.01));
        }
        
        // Health affected by happiness
        if (this.fishData.happiness < 30) {
            this.fishData.health = Math.max(0, this.fishData.health - (deltaTime * 0.005));
        } else if (this.fishData.happiness > 80) {
            this.fishData.health = Math.min(100, this.fishData.health + (deltaTime * 0.002));
        }
    }
    
    chooseBehavior() {
        let newBehavior = this.currentBehavior;
        
        // Hungry fish prioritize feeding areas
        if (this.fishData.hunger < 30) {
            newBehavior = 'feeding';
        }
        // Tired fish rest near bottom
        else if (this.energy < 20) {
            newBehavior = 'resting';
        }
        // Lonely fish seek other fish
        else if (this.socialNeed > 70) {
            newBehavior = 'schooling';
        }
        // Default wandering behavior
        else if (Math.random() < 0.01 || this.behaviorTimer > 5000) { // Change behavior every 5 seconds
            const behaviors = ['wandering', 'schooling', 'exploring'];
            newBehavior = behaviors[Math.floor(Math.random() * behaviors.length)];
        }
        
        if (newBehavior !== this.currentBehavior) {
            this.currentBehavior = newBehavior;
            this.behaviorTimer = 0;
            this.onBehaviorChange();
        }
    }
    
    onBehaviorChange() {
        switch (this.currentBehavior) {
            case 'feeding':
                // Head towards top of tank
                this.target.set(
                    (Math.random() - 0.5) * this.tankSize.width * 0.6,
                    this.tankSize.height * 0.3,
                    (Math.random() - 0.5) * this.tankSize.depth * 0.6
                );
                break;
                
            case 'resting':
                // Head towards bottom
                this.target.set(
                    (Math.random() - 0.5) * this.tankSize.width * 0.8,
                    -this.tankSize.height * 0.3,
                    (Math.random() - 0.5) * this.tankSize.depth * 0.8
                );
                break;
                
            case 'schooling':
                // Look for other fish (simulated for now)
                this.findSchoolTarget();
                break;
                
            default:
                this.setRandomTarget();
        }
    }
    
    executeBehavior(deltaTime) {
        switch (this.currentBehavior) {
            case 'wandering':
                this.wander(deltaTime);
                break;
                
            case 'schooling':
                this.school(deltaTime);
                break;
                
            case 'feeding':
                this.seekFood(deltaTime);
                break;
                
            case 'resting':
                this.rest(deltaTime);
                break;
                
            case 'exploring':
                this.explore(deltaTime);
                break;
        }
    }
    
    wander(deltaTime) {
        // Change direction occasionally
        if (this.behaviorTimer > 2000 + Math.random() * 3000) {
            this.setRandomTarget();
            this.behaviorTimer = 0;
        }
        
        this.seekTarget(deltaTime, 0.7);
    }
    
    school(deltaTime) {
        // Simplified schooling - move towards center and maintain distance
        this.findSchoolTarget();
        this.seekTarget(deltaTime, 0.8);
        
        // Add some flocking behavior
        this.addFlockingForces();
    }
    
    seekFood(deltaTime) {
        // Move towards surface and feeding areas
        this.seekTarget(deltaTime, 1.0);
        
        // If at target, look for food particles
        const distToTarget = this.body.position.distanceTo(this.target);
        if (distToTarget < 1.0) {
            // Simulate finding food
            if (Math.random() < 0.05) { // 5% chance per frame
                this.fishData.hunger = Math.min(100, this.fishData.hunger + 10);
                this.energy = Math.min(100, this.energy + 5);
                this.currentBehavior = 'wandering';
            }
        }
    }
    
    rest(deltaTime) {
        // Move slowly towards resting spot
        this.seekTarget(deltaTime, 0.3);
        
        // Recover energy while resting
        this.energy = Math.min(100, this.energy + (deltaTime * 0.02));
        
        // Stop resting when energy is restored
        if (this.energy > 80) {
            this.currentBehavior = 'wandering';
        }
    }
    
    explore(deltaTime) {
        // Similar to wandering but with more direction changes
        if (this.behaviorTimer > 1000 + Math.random() * 2000) {
            this.setRandomTarget();
            this.behaviorTimer = 0;
        }
        
        this.seekTarget(deltaTime, 0.9);
    }
    
    seekTarget(deltaTime, intensity = 1.0) {
        const direction = new CANNON.Vec3();
        direction.copy(this.target);
        direction.vsub(this.body.position);
        
        const distance = direction.length();
        
        if (distance > 0.1) {
            // Normalize and apply desired speed
            direction.normalize();
            direction.scale(this.maxSpeed * intensity);
            
            // Calculate steering force
            const steer = new CANNON.Vec3();
            steer.copy(direction);
            steer.vsub(this.body.velocity);
            
            // Limit steering force
            const steerMag = steer.length();
            if (steerMag > this.swimForce) {
                steer.normalize();
                steer.scale(this.swimForce);
            }
            
            // Apply force
            this.body.force.vadd(steer, this.body.force);
        }
    }
    
    addFlockingForces() {
        // Simplified flocking without access to other fish
        // Add some random lateral movement for natural look
        const lateral = new CANNON.Vec3(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 2
        );
        lateral.scale(0.5);
        this.body.force.vadd(lateral, this.body.force);
    }
    
    applyMovement(deltaTime) {
        // Limit maximum velocity
        const vel = this.body.velocity;
        const speed = vel.length();
        
        if (speed > this.maxSpeed) {
            vel.normalize();
            vel.scale(this.maxSpeed);
        }
        
        // Apply drag/resistance
        const drag = new CANNON.Vec3();
        drag.copy(vel);
        drag.scale(-0.1); // Drag coefficient
        this.body.force.vadd(drag, this.body.force);
        
        // Rotate fish to face movement direction
        if (speed > 0.1) {
            this.alignToVelocity();
        }
    }
    
    alignToVelocity() {
        const vel = this.body.velocity;
        if (vel.length() > 0.1) {
            // Calculate desired rotation
            const forward = new CANNON.Vec3(0, 0, 1);
            const desired = new CANNON.Vec3();
            desired.copy(vel);
            desired.normalize();
            
            // Apply rotation smoothly
            const cross = new CANNON.Vec3();
            forward.cross(desired, cross);
            const dot = forward.dot(desired);
            
            if (cross.length() > 0.01) {
                const angle = Math.acos(Math.max(-1, Math.min(1, dot)));
                cross.normalize();
                cross.scale(angle * 0.1); // Smooth rotation
                
                this.body.angularVelocity.vadd(cross, this.body.angularVelocity);
            }
        }
    }
    
    keepInBounds() {
        const pos = this.body.position;
        const margin = 1.0;
        
        // Tank boundaries
        const bounds = {
            minX: -this.tankSize.width / 2 + margin,
            maxX: this.tankSize.width / 2 - margin,
            minY: -this.tankSize.height / 2 + margin,
            maxY: this.tankSize.height / 2 - margin,
            minZ: -this.tankSize.depth / 2 + margin,
            maxZ: this.tankSize.depth / 2 - margin
        };
        
        // Apply boundary forces
        const boundaryForce = new CANNON.Vec3();
        
        if (pos.x < bounds.minX) {
            boundaryForce.x += (bounds.minX - pos.x) * 10;
        } else if (pos.x > bounds.maxX) {
            boundaryForce.x += (bounds.maxX - pos.x) * 10;
        }
        
        if (pos.y < bounds.minY) {
            boundaryForce.y += (bounds.minY - pos.y) * 10;
        } else if (pos.y > bounds.maxY) {
            boundaryForce.y += (bounds.maxY - pos.y) * 10;
        }
        
        if (pos.z < bounds.minZ) {
            boundaryForce.z += (bounds.minZ - pos.z) * 10;
        } else if (pos.z > bounds.maxZ) {
            boundaryForce.z += (bounds.maxZ - pos.z) * 10;
        }
        
        this.body.force.vadd(boundaryForce, this.body.force);
        
        // Also update target if we're heading out of bounds
        if (this.target.x < bounds.minX || this.target.x > bounds.maxX ||
            this.target.y < bounds.minY || this.target.y > bounds.maxY ||
            this.target.z < bounds.minZ || this.target.z > bounds.maxZ) {
            this.setRandomTarget();
        }
    }
    
    setRandomTarget() {
        const margin = 2.0;
        this.target.set(
            (Math.random() - 0.5) * (this.tankSize.width - margin),
            (Math.random() - 0.5) * (this.tankSize.height - margin),
            (Math.random() - 0.5) * (this.tankSize.depth - margin)
        );
    }
    
    findSchoolTarget() {
        // Simplified schooling target - move to center with some variation
        this.target.set(
            (Math.random() - 0.5) * this.tankSize.width * 0.4,
            (Math.random() - 0.5) * this.tankSize.height * 0.4,
            (Math.random() - 0.5) * this.tankSize.depth * 0.4
        );
    }
    
    updateFishData(newFishData) {
        // Update fish data from server
        this.fishData = newFishData;
        
        // Adjust behavior based on new state
        if (this.fishData.hunger < 20) {
            this.currentBehavior = 'feeding';
            this.behaviorTimer = 0;
        }
    }
    
    // Getter methods for debugging
    getBehaviorInfo() {
        return {
            behavior: this.currentBehavior,
            target: this.target,
            energy: this.energy,
            position: this.body.position,
            velocity: this.body.velocity
        };
    }
}