 // Initialize Three.js Scene
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
 const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
 const container = document.getElementById('modelContainer');
 
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
     const model = gib.scene;
     scene.add(model);
     
     // Center model and set camera position
     const bbox = new THREE.Box3().setFromObject(model);
     const center = bbox.getCenter(new THREE.Vector3());
     model.position.sub(center);
     
     camera.position.z = bbox.getSize(new THREE.Vector3()).length() * 1.5;
 });

 // Handle window resize
 window.addEventListener('resize', () => {
     camera.aspect = container.offsetWidth / container.offsetHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(container.offsetWidth, container.offsetHeight);
 });

 // Animation loop
 function animate() {
     requestAnimationFrame(animate);
     renderer.render(scene, camera);
 }
 animate();

 function animate() {
    requestAnimationFrame(animate);
    if (scene.rotation) {
        scene.rotation.y += 0.005; // Adjust rotation speed
    }
    renderer.render(scene, camera);
}