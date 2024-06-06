import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.CubeTextureLoader();
loader.setPath('data/'); // Set the path to your images

const texture = loader.load([
    'px.png', 'nx.png',
    'py.png', 'ny.png',
    'pz.png', 'nz.png'
]);
// texture.mapping = THREE.EquirectangularRefractionMapping

scene.background = texture

// Animation function
function animate() {
    requestAnimationFrame(animate);
    controls.autoRotate = true
    controls.autoRotateSpeed = 5
    controls.update()
    renderer.render(scene, camera);
}

animate();


