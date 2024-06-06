import * as THREE from 'three';

const loader = new THREE.CubeTextureLoader();
loader.setPath('data/'); // Set the path to your images

const texture = loader.load([
    'posx.jpg', 'negx.jpg',
    'posy.jpg', 'negy.jpg',
    'posz.jpg', 'negz.jpg'
]);
