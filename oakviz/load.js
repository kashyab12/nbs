import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function loadGLTFObject(path) {
    const loader = new GLTFLoader()
    const addModelToScene = (gltf) => {
        scene.add(gltf.scene)
    }
    loader.load(path, addModelToScene, (xhr) => console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ), (error) => console.log(error))
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshDepthMaterial()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
loadGLTFObject('data/AnimatedCube.gltf')
camera.position.z = 200;
animate()