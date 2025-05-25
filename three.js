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

 container.addEventListener('mousemove', (e) => {
    const x = (e.clientX / container.offsetWidth) * 0.3
    const y = (e.clientY / container.offsetHeight) * 0.3

    targetRotationY = x ;
    targetRotationX = y ;
});
 // Animation loop
 function animate() {
    requestAnimationFrame(animate);

    if (model) {
        // Only rotate on mouse move
        // if (targetRotationY !== 0 || targetRotationX !== 0) {
        //     model.rotation.y += (targetRotationY - model.rotation.y) * 0.02;
        //     model.rotation.x += (targetRotationX - model.rotation.x) * 0.02;
        // }
    }

    renderer.render(scene, camera);
}
animate();