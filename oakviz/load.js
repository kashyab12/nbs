import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


function animate() {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  requestAnimationFrame(animate);
  controls.update()
  renderer.render(scene, camera);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
const light = new THREE.AmbientLight(0xf0f0ff, 1); // White light, intensity 1
scene.add(light)
// scene.add(cube);
const loader = new GLTFLoader();
loader.load(
  "data/scene.gltf",
  (gltf) => {
    gltf.scene.scale.set(10, 10, 10)
    scene.add(gltf.scene);
  },
  (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
  (error) => console.log(error)
);
camera.position.z = 200;
animate();
