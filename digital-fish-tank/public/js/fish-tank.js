/**
 * Digital Fish Tank - Main Tank Environment
 * Creates the 3D aquarium with physics, lighting, and water effects
 */

class FishTank {
    constructor() {
        // Core Three.js components
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.world = null; // Cannon-ES physics world
        this.controls = null;
        
        // Tank dimensions
        this.tankSize = {
            width: 20,
            height: 12,
            depth: 12
        };
        
        // Game objects
        this.fish = new Map();
        this.decorations = new Map();
        this.selectedFish = null;
        
        // Tank state
        this.tankData = null;
        this.playerData = null;
        
        // Animation
        this.animationId = null;
        this.lastUpdateTime = 0;
        
        // Interaction
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        
        this.init();
    }
    
    async init() {
        try {
            console.log('🐠 Initializing Digital Fish Tank...');
            
            this.setupScene();
            this.setupPhysics();
            this.setupLighting();
            this.setupCamera();
            this.setupControls();
            this.createTankEnvironment();
            this.setupEventListeners();
            
            // Hide loading screen
            document.getElementById('loading').style.display = 'none';
            document.getElementById('game-container').style.display = 'block';
            
            // Start animation loop
            this.animate();
            
            console.log('✅ Fish Tank initialized successfully!');
            
            // Initialize multiplayer after fish tank is ready
            setTimeout(() => {
                if (typeof window.initializeMultiplayer === 'function') {
                    window.initializeMultiplayer();
                }
            }, 500);
            
        } catch (error) {
            console.error('❌ Failed to initialize fish tank:', error);
        }
    }
    
    setupScene() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x001122); // Deep ocean blue
        
        // Setup renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        
        // Add canvas to container
        const container = document.getElementById('canvas-container');
        container.appendChild(this.renderer.domElement);
        
        // Add fog for depth
        this.scene.fog = new THREE.Fog(0x001122, 15, 40);
    }
    
    setupPhysics() {
        // Create physics world
        this.world = new CANNON.World({
            gravity: new CANNON.Vec3(0, 0, 0), // No gravity in water
            broadphase: new CANNON.NaiveBroadphase(),
            solver: new CANNON.GSSolver()
        });
        
        // Set up materials
        this.materials = {
            fish: new CANNON.Material('fish'),
            tank: new CANNON.Material('tank'),
            decoration: new CANNON.Material('decoration')
        };
        
        // Material interactions
        const fishTankContact = new CANNON.ContactMaterial(
            this.materials.fish,
            this.materials.tank,
            {
                friction: 0.1,
                restitution: 0.8
            }
        );
        this.world.addContactMaterial(fishTankContact);
        
        this.world.allowSleep = true;
    }
    
    setupLighting() {
        // Ambient light for overall illumination
        const ambientLight = new THREE.AmbientLight(0x4488aa, 0.4);
        this.scene.add(ambientLight);
        
        // Main aquarium light (from top)
        const topLight = new THREE.DirectionalLight(0xffffff, 1.2);
        topLight.position.set(0, 15, 0);
        topLight.castShadow = true;
        topLight.shadow.mapSize.width = 2048;
        topLight.shadow.mapSize.height = 2048;
        topLight.shadow.camera.near = 0.1;
        topLight.shadow.camera.far = 30;
        topLight.shadow.camera.left = -15;
        topLight.shadow.camera.right = 15;
        topLight.shadow.camera.top = 15;
        topLight.shadow.camera.bottom = -15;
        this.scene.add(topLight);
        
        // Side accent lights for visual appeal
        const sideLight1 = new THREE.PointLight(0x00aaff, 0.6, 20);
        sideLight1.position.set(-12, 6, 0);
        this.scene.add(sideLight1);
        
        const sideLight2 = new THREE.PointLight(0x00ffaa, 0.6, 20);
        sideLight2.position.set(12, 6, 0);
        this.scene.add(sideLight2);
        
        // Underwater effect light
        const underwaterLight = new THREE.HemisphereLight(0x00aaff, 0x003366, 0.8);
        this.scene.add(underwaterLight);
    }
    
    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        this.camera.position.set(0, 8, 25);
        this.camera.lookAt(0, 0, 0);
    }
    
    setupControls() {
        // Simple orbital controls for viewing the tank
        this.controls = {
            enabled: true,
            update: () => {
                // Custom camera movement (gentle auto-rotation)
                const time = Date.now() * 0.0005;
                const radius = 25;
                this.camera.position.x = Math.cos(time) * radius;
                this.camera.position.z = Math.sin(time) * radius;
                this.camera.position.y = 8 + Math.sin(time * 0.5) * 2;
                this.camera.lookAt(0, 0, 0);
            }
        };
    }
    
    createTankEnvironment() {
        // Create tank walls (glass)
        this.createTankWalls();
        
        // Create substrate (sand/gravel bottom)
        this.createSubstrate();
        
        // Create water effects
        this.createWaterEffects();
        
        // Add some default decorations
        this.createDefaultDecorations();
    }
    
    createTankWalls() {
        const wallThickness = 0.2;
        const glassOpacity = 0.1;
        
        // Glass material
        const glassMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x88ccff,
            transparent: true,
            opacity: glassOpacity,
            transmission: 0.9,
            roughness: 0,
            metalness: 0,
            clearcoat: 1,
            clearcoatRoughness: 0,
            side: THREE.DoubleSide
        });
        
        // Tank dimensions
        const { width, height, depth } = this.tankSize;
        
        // Front and back walls
        const frontWall = new THREE.Mesh(
            new THREE.PlaneGeometry(width, height),
            glassMaterial
        );
        frontWall.position.z = depth / 2;
        this.scene.add(frontWall);
        
        const backWall = new THREE.Mesh(
            new THREE.PlaneGeometry(width, height),
            glassMaterial
        );
        backWall.position.z = -depth / 2;
        backWall.rotation.y = Math.PI;
        this.scene.add(backWall);
        
        // Left and right walls
        const leftWall = new THREE.Mesh(
            new THREE.PlaneGeometry(depth, height),
            glassMaterial
        );
        leftWall.position.x = -width / 2;
        leftWall.rotation.y = Math.PI / 2;
        this.scene.add(leftWall);
        
        const rightWall = new THREE.Mesh(
            new THREE.PlaneGeometry(depth, height),
            glassMaterial
        );
        rightWall.position.x = width / 2;
        rightWall.rotation.y = -Math.PI / 2;
        this.scene.add(rightWall);
        
        // Top (open for feeding)
        // Bottom
        const bottom = new THREE.Mesh(
            new THREE.PlaneGeometry(width, depth),
            glassMaterial
        );
        bottom.position.y = -height / 2;
        bottom.rotation.x = -Math.PI / 2;
        this.scene.add(bottom);
        
        // Create physics walls for fish collision
        this.createPhysicsWalls();
    }
    
    createPhysicsWalls() {
        const { width, height, depth } = this.tankSize;
        const wallThickness = 0.1;
        
        // Create invisible collision walls
        const walls = [
            // Front wall
            { pos: [0, 0, depth / 2], size: [width / 2, height / 2, wallThickness] },
            // Back wall  
            { pos: [0, 0, -depth / 2], size: [width / 2, height / 2, wallThickness] },
            // Left wall
            { pos: [-width / 2, 0, 0], size: [wallThickness, height / 2, depth / 2] },
            // Right wall
            { pos: [width / 2, 0, 0], size: [wallThickness, height / 2, depth / 2] },
            // Bottom
            { pos: [0, -height / 2, 0], size: [width / 2, wallThickness, depth / 2] },
            // Top
            { pos: [0, height / 2, 0], size: [width / 2, wallThickness, depth / 2] }
        ];
        
        walls.forEach(wall => {
            const shape = new CANNON.Box(new CANNON.Vec3(...wall.size));
            const body = new CANNON.Body({ 
                mass: 0, 
                material: this.materials.tank 
            });
            body.addShape(shape);
            body.position.set(...wall.pos);
            this.world.addBody(body);
        });
    }
    
    createSubstrate() {
        // Sand/gravel bottom
        const substrateGeometry = new THREE.PlaneGeometry(
            this.tankSize.width - 0.4, 
            this.tankSize.depth - 0.4
        );
        const substrateMaterial = new THREE.MeshStandardMaterial({
            color: 0xc2b280,
            roughness: 0.8,
            metalness: 0.1
        });
        
        const substrate = new THREE.Mesh(substrateGeometry, substrateMaterial);
        substrate.rotation.x = -Math.PI / 2;
        substrate.position.y = -this.tankSize.height / 2 + 0.1;
        substrate.receiveShadow = true;
        this.scene.add(substrate);
    }
    
    createWaterEffects() {
        // Create subtle water distortion effect
        const waterGeometry = new THREE.PlaneGeometry(
            this.tankSize.width * 2, 
            this.tankSize.depth * 2, 
            32, 32
        );
        
        const waterMaterial = new THREE.MeshStandardMaterial({
            color: 0x006994,
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide
        });
        
        const water = new THREE.Mesh(waterGeometry, waterMaterial);
        water.rotation.x = -Math.PI / 2;
        water.position.y = this.tankSize.height / 2 - 0.5;
        this.scene.add(water);
        
        // Add floating particles for water effect
        this.createWaterParticles();
    }
    
    createWaterParticles() {
        const particleCount = 100;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * this.tankSize.width * 0.8;
            positions[i + 1] = (Math.random() - 0.5) * this.tankSize.height * 0.8;
            positions[i + 2] = (Math.random() - 0.5) * this.tankSize.depth * 0.8;
        }
        
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x88aacc,
            size: 0.1,
            transparent: true,
            opacity: 0.3
        });
        
        const particleSystem = new THREE.Points(particles, particleMaterial);
        this.scene.add(particleSystem);
        
        // Animate particles
        this.waterParticles = particleSystem;
    }
    
    createDefaultDecorations() {
        // Add some basic plants and rocks
        this.addPlant({ x: -6, y: -4, z: -4 }, 'large');
        this.addPlant({ x: 4, y: -4, z: 3 }, 'small');
        this.addRock({ x: 0, y: -4, z: -5 }, 'medium');
        this.addPlant({ x: -3, y: -4, z: 4 }, 'medium');
    }
    
    addPlant(position, size = 'medium') {
        const plantGroup = new THREE.Group();
        
        const sizes = {
            small: { height: 2, width: 0.5 },
            medium: { height: 4, width: 0.8 },
            large: { height: 6, width: 1.2 }
        };
        
        const plantSize = sizes[size];
        
        // Stem
        const stemGeometry = new THREE.CylinderGeometry(0.1, 0.15, plantSize.height, 6);
        const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x2d5016 });
        const stem = new THREE.Mesh(stemGeometry, stemMaterial);
        stem.position.y = plantSize.height / 2;
        plantGroup.add(stem);
        
        // Leaves
        for (let i = 0; i < 5; i++) {
            const leafGeometry = new THREE.EllipseCurve(0, 0, plantSize.width, plantSize.width * 0.6);
            const leafShape = new THREE.Shape(leafGeometry.getPoints(10));
            const leafGeometry3D = new THREE.ExtrudeGeometry(leafShape, { depth: 0.05 });
            const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x4a7c59 });
            const leaf = new THREE.Mesh(leafGeometry3D, leafMaterial);
            
            leaf.position.y = (i / 5) * plantSize.height + 1;
            leaf.rotation.y = (i / 5) * Math.PI * 2;
            leaf.rotation.z = Math.random() * 0.3 - 0.15;
            plantGroup.add(leaf);
        }
        
        plantGroup.position.set(position.x, position.y, position.z);
        plantGroup.castShadow = true;
        plantGroup.receiveShadow = true;
        this.scene.add(plantGroup);
        
        return plantGroup;
    }
    
    addRock(position, size = 'medium') {
        const sizes = {
            small: 0.8,
            medium: 1.2,
            large: 1.8
        };
        
        const rockSize = sizes[size];
        
        const rockGeometry = new THREE.DodecahedronGeometry(rockSize);
        const rockMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x666666,
            roughness: 0.8,
            metalness: 0.1
        });
        
        const rock = new THREE.Mesh(rockGeometry, rockMaterial);
        rock.position.set(position.x, position.y + rockSize, position.z);
        rock.castShadow = true;
        rock.receiveShadow = true;
        
        // Add some random rotation
        rock.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        
        this.scene.add(rock);
        return rock;
    }
    
    setupEventListeners() {
        // Window resize
        window.addEventListener('resize', () => this.onWindowResize());
        
        // Mouse events for fish interaction
        this.renderer.domElement.addEventListener('click', (e) => this.onMouseClick(e));
        this.renderer.domElement.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }
    
    onMouseClick(event) {
        // Calculate mouse position in normalized device coordinates
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Raycast to find clicked fish
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const fishMeshes = Array.from(this.fish.values()).map(fish => fish.mesh);
        const intersects = this.raycaster.intersectObjects(fishMeshes);
        
        if (intersects.length > 0) {
            // Find which fish was clicked
            const clickedMesh = intersects[0].object;
            for (let [fishId, fishObj] of this.fish) {
                if (fishObj.mesh === clickedMesh) {
                    this.selectFish(fishId);
                    break;
                }
            }
        } else {
            this.selectFish(null);
        }
    }
    
    onMouseMove(event) {
        // Update mouse position for interaction
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    selectFish(fishId) {
        // Deselect previous fish
        if (this.selectedFish && this.fish.has(this.selectedFish)) {
            const prevFish = this.fish.get(this.selectedFish);
            prevFish.mesh.material.emissive.setHex(0x000000);
        }
        
        this.selectedFish = fishId;
        
        if (fishId && this.fish.has(fishId)) {
            // Highlight selected fish
            const fish = this.fish.get(fishId);
            fish.mesh.material.emissive.setHex(0x222222);
            
            // Update UI
            this.updateSelectedFishUI(fish.data);
        } else {
            // Hide fish info panel
            document.getElementById('selected-fish-info').style.display = 'none';
        }
    }
    
    updateSelectedFishUI(fishData) {
        const fishInfo = document.getElementById('selected-fish-info');
        fishInfo.style.display = 'block';
        
        document.getElementById('selected-fish-name').textContent = fishData.name;
        
        // Update progress bars
        this.updateProgressBar('health-bar', 'health-value', fishData.health);
        this.updateProgressBar('happiness-bar', 'happiness-value', fishData.happiness);
        this.updateProgressBar('hunger-bar', 'hunger-value', fishData.hunger);
    }
    
    updateProgressBar(barId, valueId, value) {
        const bar = document.getElementById(barId);
        const valueSpan = document.getElementById(valueId);
        
        bar.style.width = `${value}%`;
        valueSpan.textContent = `${Math.round(value)}%`;
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        const currentTime = Date.now();
        const deltaTime = currentTime - this.lastUpdateTime;
        this.lastUpdateTime = currentTime;
        
        // Update controls
        if (this.controls && this.controls.update) {
            this.controls.update();
        }
        
        // Update physics
        this.world.step(1/60);
        
        // Update water particles
        if (this.waterParticles) {
            this.waterParticles.rotation.y += 0.001;
            const positions = this.waterParticles.geometry.attributes.position.array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] += Math.sin(currentTime * 0.001 + i) * 0.001;
            }
            this.waterParticles.geometry.attributes.position.needsUpdate = true;
        }
        
        // Update fish AI and animations
        this.updateFish(deltaTime);
        
        // Render scene
        this.renderer.render(this.scene, this.camera);
    }
    
    updateFish(deltaTime) {
        // Update each fish's position and behavior
        for (let [fishId, fishObj] of this.fish) {
            if (fishObj.ai) {
                fishObj.ai.update(deltaTime);
            }
            
            // Sync visual mesh with physics body
            if (fishObj.body) {
                fishObj.mesh.position.copy(fishObj.body.position);
                fishObj.mesh.quaternion.copy(fishObj.body.quaternion);
            }
        }
    }
    
    addFish(fishData) {
        console.log('🐠 Adding fish:', fishData.name);
        
        // Create fish mesh
        const fishMesh = this.createFishMesh(fishData);
        
        // Create physics body
        const fishBody = this.createFishBody(fishData);
        
        // Create AI controller
        const fishAI = new FishAI(fishData, fishBody, this.tankSize);
        
        // Store fish object
        this.fish.set(fishData.id, {
            data: fishData,
            mesh: fishMesh,
            body: fishBody,
            ai: fishAI
        });
        
        this.scene.add(fishMesh);
        this.world.addBody(fishBody);
        
        // Update UI
        this.updateFishList();
    }
    
    createFishMesh(fishData) {
        // Create basic fish shape
        const fishGeometry = new THREE.ConeGeometry(0.3, 1.5, 6);
        const fishMaterial = new THREE.MeshStandardMaterial({
            color: fishData.color || 0xff6b6b,
            metalness: 0.1,
            roughness: 0.3
        });
        
        const fishMesh = new THREE.Mesh(fishGeometry, fishMaterial);
        fishMesh.position.set(
            fishData.position.x,
            fishData.position.y,
            fishData.position.z
        );
        fishMesh.castShadow = true;
        fishMesh.receiveShadow = true;
        
        // Add fins
        const finGeometry = new THREE.ConeGeometry(0.2, 0.8, 3);
        const finMaterial = new THREE.MeshStandardMaterial({
            color: fishData.color || 0xff6b6b,
            transparent: true,
            opacity: 0.7
        });
        
        // Tail fin
        const tailFin = new THREE.Mesh(finGeometry, finMaterial);
        tailFin.position.z = -0.7;
        tailFin.rotation.x = Math.PI / 2;
        fishMesh.add(tailFin);
        
        // Side fins
        const sideFin1 = new THREE.Mesh(finGeometry, finMaterial);
        sideFin1.position.set(0.3, 0, 0.2);
        sideFin1.rotation.z = Math.PI / 4;
        sideFin1.scale.set(0.5, 0.5, 0.5);
        fishMesh.add(sideFin1);
        
        const sideFin2 = new THREE.Mesh(finGeometry, finMaterial);
        sideFin2.position.set(-0.3, 0, 0.2);
        sideFin2.rotation.z = -Math.PI / 4;
        sideFin2.scale.set(0.5, 0.5, 0.5);
        fishMesh.add(sideFin2);
        
        return fishMesh;
    }
    
    createFishBody(fishData) {
        const shape = new CANNON.Sphere(0.4);
        const body = new CANNON.Body({ 
            mass: 1,
            material: this.materials.fish
        });
        body.addShape(shape);
        body.position.set(
            fishData.position.x,
            fishData.position.y,
            fishData.position.z
        );
        
        return body;
    }
    
    updateFishList() {
        const fishList = document.getElementById('fish-list');
        fishList.innerHTML = '';
        
        for (let [fishId, fishObj] of this.fish) {
            const fishData = fishObj.data;
            const fishItem = document.createElement('div');
            fishItem.className = 'fish-item';
            fishItem.onclick = () => this.selectFish(fishId);
            
            fishItem.innerHTML = `
                <div class="fish-name">${fishData.name}</div>
                <div class="fish-species">${fishData.species}</div>
            `;
            
            fishList.appendChild(fishItem);
        }
        
        // Update fish count
        document.getElementById('fish-count').textContent = this.fish.size;
    }
    
    removeFish(fishId) {
        if (this.fish.has(fishId)) {
            const fishObj = this.fish.get(fishId);
            
            this.scene.remove(fishObj.mesh);
            this.world.removeBody(fishObj.body);
            this.fish.delete(fishId);
            
            if (this.selectedFish === fishId) {
                this.selectFish(null);
            }
            
            this.updateFishList();
        }
    }
    
    feedFish(fishId) {
        if (this.fish.has(fishId)) {
            const fishObj = this.fish.get(fishId);
            
            // Create food particle effect
            this.createFoodParticles(fishObj.mesh.position);
            
            // Update fish data (will be handled by server)
            console.log(`🍽️ Feeding fish: ${fishObj.data.name}`);
        }
    }
    
    createFoodParticles(position) {
        const particleCount = 20;
        const particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = new THREE.Mesh(
                new THREE.SphereGeometry(0.05),
                new THREE.MeshBasicMaterial({ color: 0xffaa00 })
            );
            
            particle.position.copy(position);
            particle.position.y += 3;
            particle.position.x += (Math.random() - 0.5) * 2;
            particle.position.z += (Math.random() - 0.5) * 2;
            
            this.scene.add(particle);
            particles.push(particle);
        }
        
        // Animate particles falling
        let fallTime = 0;
        const animateParticles = () => {
            fallTime += 0.016;
            
            particles.forEach((particle, index) => {
                particle.position.y -= 0.1;
                particle.rotation.x += 0.1;
                particle.rotation.y += 0.1;
                
                if (particle.position.y < position.y) {
                    this.scene.remove(particle);
                    particles.splice(index, 1);
                }
            });
            
            if (particles.length > 0) {
                requestAnimationFrame(animateParticles);
            }
        };
        
        animateParticles();
    }
    
    updateTankData(tankData) {
        this.tankData = tankData;
        
        // Update tank name
        document.getElementById('tank-name').textContent = tankData.name;
        
        // Update tank stats
        document.getElementById('temperature').textContent = `${tankData.settings.temperature}°C`;
        document.getElementById('cleanliness').textContent = `${Math.round(tankData.settings.cleanliness)}%`;
        
        // Update fish
        const currentFishIds = new Set(Array.from(this.fish.keys()));
        const newFishIds = new Set(tankData.fish.map(f => f.id));
        
        // Remove fish that no longer exist
        for (let fishId of currentFishIds) {
            if (!newFishIds.has(fishId)) {
                this.removeFish(fishId);
            }
        }
        
        // Add or update fish
        tankData.fish.forEach(fishData => {
            if (this.fish.has(fishData.id)) {
                // Update existing fish
                const fishObj = this.fish.get(fishData.id);
                fishObj.data = fishData;
                if (fishObj.ai) {
                    fishObj.ai.updateFishData(fishData);
                }
            } else {
                // Add new fish
                this.addFish(fishData);
            }
        });
    }
    
    updatePlayerData(playerData) {
        this.playerData = playerData;
        
        // Update UI
        document.getElementById('aqua-coins').textContent = playerData.aquaCoins;
        document.getElementById('player-level').textContent = playerData.level;
        document.getElementById('player-xp').textContent = playerData.xp;
    }
    
    addMessage(message) {
        const messageLog = document.getElementById('message-log');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = message;
        
        messageLog.appendChild(messageDiv);
        messageLog.scrollTop = messageLog.scrollHeight;
        
        // Remove old messages (keep last 5)
        while (messageLog.children.length > 5) {
            messageLog.removeChild(messageLog.firstChild);
        }
    }
}

// Global tank instance
let fishTank = null;

// WebGL Support Check
function checkWebGLSupport() {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
    } catch (e) {
        return false;
    }
}

// Safe initialization function called by dependency loader
function initializeFishTank() {
    try {
        // Check WebGL support
        if (!checkWebGLSupport()) {
            throw new Error('WebGL is not supported in your browser. Please use a modern browser like Chrome, Firefox, or Safari.');
        }
        
        // Check required dependencies
        if (typeof THREE === 'undefined') {
            throw new Error('Three.js library failed to load');
        }
        
        if (typeof CANNON === 'undefined') {
            throw new Error('Cannon.js physics library failed to load');
        }
        
        console.log('🎮 Dependencies verified, creating fish tank...');
        fishTank = new FishTank();
        
    } catch (error) {
        console.error('❌ Failed to initialize fish tank:', error);
        showInitializationError(error.message);
    }
}

function showInitializationError(message) {
    const loading = document.getElementById('loading');
    loading.innerHTML = `
        <div class="loading-content">
            <div style="color: #ff4757; text-align: center;">
                <h3>❌ Initialization Error</h3>
                <p>${message}</p>
                <div style="margin: 20px 0;">
                    <strong>Troubleshooting:</strong>
                    <ul style="text-align: left; margin: 10px 0;">
                        <li>Try refreshing the page</li>
                        <li>Check your internet connection</li>
                        <li>Make sure JavaScript is enabled</li>
                        <li>Try a different browser (Chrome recommended)</li>
                    </ul>
                </div>
                <button onclick="location.reload()" style="
                    background: #ff6b35; 
                    color: white; 
                    border: none; 
                    padding: 10px 20px; 
                    border-radius: 5px; 
                    cursor: pointer; 
                    margin-top: 15px;
                ">🔄 Reload Page</button>
            </div>
        </div>
    `;
}

// Make the function available globally for the dependency loader
window.initializeFishTank = initializeFishTank;