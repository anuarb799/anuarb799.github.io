import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
const bottom_light = new THREE.DirectionalLight( 0xffffff, 0.5 );
bottom_light.position.set(0,-1,0);
scene.add( bottom_light );
const right_lifht = new THREE.DirectionalLight( 0xffffff, 0.5 );
right_lifht.position.set(1,0,0);
scene.add( right_lifht );
const left_light = new THREE.DirectionalLight( 0xffffff, 0.5 );
left_light.position.set(-1,0,0);
scene.add( left_light );
const right1_lifht = new THREE.DirectionalLight( 0xffffff, 0.5 );
right1_lifht.position.set(0,0,1);
scene.add( right1_lifht );
const left1_light = new THREE.DirectionalLight( 0xffffff, 0.5 );
left1_light.position.set(0,0,-1);
scene.add( left1_light );
camera.position.z = 32;
//camera.position.x = 9;
camera.position.y = 2;
//const controls = new OrbitControls(camera, renderer.domElement);
//controls.enableDamping = true;
//controls.enablePan = false;
//controls.autoRotate = false;
//controls.target = new THREE.Vector3(0, 1, 0);
//controls.update();

/*



// Function to update cube position based on mouse movement
function onMouseMove(event) {
    // Calculate normalized device coordinates
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    // Convert mouse coordinates to 3D space
    const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
    vector.unproject(camera);

    // Set cube position to the calculated 3D position
    cube.position.copy(vector.sub(camera.position).normalize().multiplyScalar(5));
}
*/
// Event listener for mouse movement

var object__;
const loader = new GLTFLoader();
loader.load('/ufo_flying_saucer_spaceship_ovni/scene.gltf', function(gltf) {
    object__ = gltf.scene;
    scene.add(gltf.scene);
});
function rotatingthedisk(event){
    const mouseScroll = event.deltaY;
    if(camera.position.z < 4){
    }else if(mouseScroll > 0){
        object__.rotation.x +=0.10;
        camera.position.z =  camera.position.z + 0.15;
        //console.log(camera.position.y);
    }else if(mouseScroll < 0){
        object__.rotation.x -=0.10;
        camera.position.z =  camera.position.z - 0.15;
        //console.log(camera.position.y);
    }
}
document.addEventListener('wheel', rotatingthedisk, false);
//object__.position.y = 33;
function animate() {
    requestAnimationFrame(animate);
    object__.rotation.y += 0.02;
    //console.log(camera.position.y)
   // object__.rotation.x += 0.01;
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //controls.update();
    renderer.render(scene, camera);
}

animate();