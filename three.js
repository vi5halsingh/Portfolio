// Initialize Three.js Scene
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(70, 1, 0.5, 1000);
 const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
 const container = document.getElementById('modelContainer');
 let model = null;
 
 // Set renderer size
 renderer.setSize(container.offsetWidth, container.offsetHeight);
 renderer.setClearColor(0x000000, 0); // Transparent background
 container.appendChild(renderer.domElement);

 // Add lighting
 const ambientLight = new THREE.AmbientLight(0xffffff, 1);
 scene.add(ambientLight);
 const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
 directionalLight.position.set(5, 5, 5);
 scene.add(directionalLight);

 // Load 3D model
 const loader = new THREE.GLTFLoader();
 loader.load('assets/models/vishal.bled.glb', (gib) => {
    model = gib.scene;
    model.scale.set(4, 4, 4);
    model.rotation.y = -Math.PI/2 ; // Add this line for -90° X-axis rotation
    scene.add(model);
    
    const bbox = new THREE.Box3().setFromObject(model);
    const center = bbox.getCenter(new THREE.Vector3());
    model.position.sub(center);
    
    camera.position.z = bbox.getSize(new THREE.Vector3()).length();
});

 // Handle window resize
 window.addEventListener('resize', () => {
     camera.aspect = container.offsetWidth / container.offsetHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(container.offsetWidth, container.offsetHeight);
 });
 let targetRotationX = 0;
 let targetRotationY = 0;
 let currentRotationX = 0;
 let currentRotationY = 0;

 container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    // Map x/y from 0-1 to -0.5 to 0.5, then scale for effect
    targetRotationY = (x - 0.5) * Math.PI * 0.5; // left/right
    targetRotationX = (y - 0.5) * Math.PI * 0.5; // up/down
});

// Reset rotation when mouse leaves the container
container.addEventListener('mouseleave', () => {
    targetRotationX = 0;
    targetRotationY = 0;
});

 // Animation loop
 function animate() {
    requestAnimationFrame(animate);
    if (model) {
        // Smoothly interpolate rotation
        currentRotationY += (targetRotationY - currentRotationY) * 0.08;
        currentRotationX += (targetRotationX - currentRotationX) * 0.08;
        model.rotation.y = currentRotationY - Math.PI/2; // keep initial -90deg offset
        model.rotation.x = currentRotationX;
    }
    renderer.render(scene, camera);
}
animate();