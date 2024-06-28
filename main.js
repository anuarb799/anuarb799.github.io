import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import getStarfield from "/creatingstars.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const loader = new THREE.TextureLoader();

const basiclayout = loader.load("/Resources/2_no_clouds_16k.jpg");
const bumplayout = loader.load("/Resources/elev_bump_16k.jpg");
const citylights =  loader.load("Resources/cities_16k.png");
const countryboundaries = loader.load("Resources/boundaries_16k.png");

camera.position.x = -2.7512;
camera.position.y = 2.001098;
camera.position.z = 1.0106;

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const earthGroup = new THREE.Group();
scene.add(earthGroup);
const controls = new OrbitControls(camera, renderer.domElement);

controls.minDistance = 3;
controls.maxDistance = 10;
controls.update();
controls.saveState();

window.addEventListener('resize', onWindowResize, false);
window.addEventListener('click', onMouseClick, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


const geometry = new THREE.IcosahedronGeometry(1,12);
const material = new THREE.MeshStandardMaterial({
    map: basiclayout,
    bumpMap: bumplayout,
    bumpScale: 1,
});

const earthMesh = new THREE.Mesh(geometry,material);
earthGroup.add(earthMesh);

const lightsMat = new THREE.MeshBasicMaterial({
    map: citylights,
    blending: THREE.AdditiveBlending,
});

const lightsMesh = new THREE.Mesh(geometry, lightsMat);
earthGroup.add(lightsMesh);

const countriesMat = new THREE.MeshBasicMaterial({
    map: countryboundaries,
    blending: THREE.AdditiveBlending,
});

const countriesMesh = new THREE.Mesh(geometry, countriesMat);
//earthGroup.add(countriesMesh);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0.5);
scene.add(hemiLight);

let starssid;

const stars = getStarfield({numStars: 2000});
stars.name = "hello";
const starsdouble = getStarfield({numStars: 2000});
scene.add(stars);
/*
const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);
*/


function addingCities(latitude, longitude){
    let pointOfInterest = new THREE.SphereGeometry(.005, 32, 32);
    let lat = latitude * (Math.PI/180);
    let lon = longitude * (Math.PI/180);
    const radius = 1;

    let material = new THREE.MeshBasicMaterial({
        color:0xff0000
    });

    let mesh = new THREE.Mesh(
        pointOfInterest,
        material
    );

    mesh.position.set(
        Math.cos(lat) * Math.cos(lon) * radius,
        Math.sin(lat) * radius,
        Math.cos(lat) * Math.sin(lon) * radius
    );

    earthGroup.add(mesh);
};
//Almaty -> 43.238949, 103
addingCities(43.238949, 103);
//Kyiv
addingCities(50.3, 149.5);
//Prague
addingCities(50.2, 165.8);
//Bern
addingCities(47, 172.5);
//Toronto
addingCities(43.7, 259.49);

const flagmap = new Map();

let ufo;
const loaderkzflag = new GLTFLoader();
let ufo_animated;
loaderkzflag.load('ufomoving.glb', function(gltf) {
    ufo = gltf.scene;

    ufo.scale.set(0.1,0.1,0.1);
    flagmap.set('ufoid', ufo.uuid);

    ufo.position.set(
        2,0,0
    );
    scene.add(ufo);

    ufo_animated = new THREE.AnimationMixer(ufo);

    gltf.animations.forEach((clip) => {
        ufo_animated.clipAction(clip).play();
    });
});

let kazakhflag;
let animated;
loaderkzflag.load('kazflagmod.glb', function(gltf) {
    kazakhflag = gltf.scene;

    kazakhflag.scale.set(0.05,0.05,0.05);
    flagmap.set('kazakhid', kazakhflag.uuid);
    let lat = 43 * (Math.PI/180);
    let lon = 103 * (Math.PI/180);

    kazakhflag.position.set(
        Math.cos(lat) * Math.cos(lon) * 1,
        Math.sin(lat) * 1,
        Math.cos(lat) * Math.sin(lon) * 1
    );
    scene.add(kazakhflag);

    animated = new THREE.AnimationMixer(kazakhflag);

    gltf.animations.forEach((clip) => {
        animated.clipAction(clip).play();
    });
});

let ukrflag;
let animated_ukr;
loaderkzflag.load('ukrflag.glb', function(gltf) {
    ukrflag = gltf.scene;

    ukrflag.scale.set(0.05,0.05,0.05);
    flagmap.set('ukrid', ukrflag.uuid);
    let lat = 50.3 * (Math.PI/180);
    let lon = 149.5 * (Math.PI/180);
    console.log(ukrflag.uuid);
    ukrflag.position.set(
        Math.cos(lat) * Math.cos(lon) * 1,
        Math.sin(lat) * 1,
        Math.cos(lat) * Math.sin(lon) * 1
    );
    scene.add(ukrflag);

    animated_ukr = new THREE.AnimationMixer(ukrflag);

    gltf.animations.forEach((clip) => {
        animated_ukr.clipAction(clip).play();
    });
});

let cadflag;
let animated_cad;
loaderkzflag.load('cadflagmod.glb', function(gltf) {
    cadflag = gltf.scene;
    cadflag.scale.set(0.05,0.05,0.05);
    flagmap.set('cadid', cadflag.uuid);
    let lat = 43.7 * (Math.PI/180);
    let lon = 259.49 * (Math.PI/180);
    //43.7, 259.49
    cadflag.position.set(
        Math.cos(lat) * Math.cos(lon) * 1,
        Math.sin(lat) * 1,
        Math.cos(lat) * Math.sin(lon) * 1
    );
    scene.add(cadflag);

    animated_cad = new THREE.AnimationMixer(cadflag);

    gltf.animations.forEach((clip) => {
        animated_cad.clipAction(clip).play();
    });
});

let swiflag;
let animated_swi;
loaderkzflag.load('swiflag.glb', function(gltf) {
    swiflag = gltf.scene;
    swiflag.scale.set(0.05,0.05,0.05);
    flagmap.set('swissid', swiflag.uuid);
    let lat = 47 * (Math.PI/180);
    let lon = 172.5 * (Math.PI/180);

    swiflag.position.set(
        Math.cos(lat) * Math.cos(lon) * 1,
        Math.sin(lat) * 1,
        Math.cos(lat) * Math.sin(lon) * 1
    );
    scene.add(swiflag);

    animated_swi = new THREE.AnimationMixer(swiflag);
    //console.log(animated_swi.uuid);
    gltf.animations.forEach((clip) => {
        animated_swi.clipAction(clip).play();
    });
});

let czeflag;
let animated_cze;
loaderkzflag.load('czeflag.glb', function(gltf) {
    czeflag = gltf.scene;
    flagmap.set('czeid', czeflag.uuid);
    czeflag.scale.set(0.05,0.05,0.05);
    //50.2, 165.8
    let lat = 50.2 * (Math.PI/180);
    let lon = 165.8 * (Math.PI/180);
 
    czeflag.position.set(
        Math.cos(lat) * Math.cos(lon) * 1,
        Math.sin(lat) * 1,
        Math.cos(lat) * Math.sin(lon) * 1
    );
    scene.add(czeflag);

    animated_cze = new THREE.AnimationMixer(czeflag);

    gltf.animations.forEach((clip) => {
        animated_cze.clipAction(clip).play();
    });
});

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

const bottom_light = new THREE.DirectionalLight( 0xffffff, 0.5 );
bottom_light.position.set(0,-1,0);
scene.add(bottom_light);

var all_objects = [];

scene.traverse(function(children){
    all_objects.push(children);
});

let currentsel = null;
let currentval = null;
//Keep this for now, fix the error with display in flags
let flagsclickable = true;

function clickedonflag(theflag){
    scene.traverse(function(children){
        if(children.name === "hello"){
            children.visible = true;
        }else{
            children.visible = false;
        }
        
    });
    controls.enabled = false;
    flagsclickable = false;
}

function reverseonclick(theflag){
    scene.traverse(function(children){
        children.visible = true;
    });
    controls.enabled = true;
    flagsclickable = true;
}


let typingprogress = false;
function writing_removing(theflagpointed){
    let index = 0;
    let text = null;
    
    if(theflagpointed === 'kazakhid'){
        text = "KAZAKHSTAN";
    }else if(theflagpointed === 'cadid'){
        text = "CANADA";
    }else if(theflagpointed === 'czeid'){
        text = "CZECHIA";
    }else if(theflagpointed === 'swissid'){
        text = "SWISS";
    }else if(theflagpointed === 'ukrid'){
        text = "UKRAINE";
    }
    const typingContainer = document.getElementById('typing-container');
    const typedTextElement = document.getElementById('typed-text');
    const closeButton = document.getElementById('close-button');

    function type() {
        if (index < text.length) {
            let currentText = "";

            currentText = text;
            typedTextElement.textContent += currentText[index];
            index++;
            setTimeout(type, 50);
        }else{
            typingprogress = false;
        }
    }

    closeButton.addEventListener('click', function() {
        typingContainer.style.display = 'none';
        reverseonclick(theflagpointed);
        typingprogress = false;
    });

    
    typingprogress = true;
    typingContainer.style.display = 'block';
    typedTextElement.textContent = '';
    index = 0;
    type();

}

function onMouseClick(event) {
    if(flagsclickable === false){
        return;
    }
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(all_objects);
    let posone = null;
    if (intersects.length > 0) {
        console.log(intersects);
        //ukr -> 18
        /*
        try{
            posone = intersects[0].object.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.uuid;
        }catch(error){
            posone = intersects[0].object.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.uuid;
        }
            */

    
        try {
            let currentObject = intersects[0].object;
            for (let i = 0; i < 18; i++) {
                if (currentObject && currentObject.parent) {
                    currentObject = currentObject.parent;
                } else {
                    break;
                }
                posone = currentObject.uuid;

                for (let[key, value] of flagmap){
                    if(value === posone){
                        currentsel = key;
                        currentval = value;
                        break;
                    }
                }
        
                if(currentsel !== null){
                    console.log('Current Selection:', currentsel, currentval);
                    break;
                }
            }
        } catch (error) {
            console.error('Parent-chain smth wrong', error);
        }

        if(currentsel === null){
            return;
        }
        
        if(currentsel !== 'ufoid'){
            currentsel = null;
            currentval = null;
            posone = null;
            return;
            //clickedonflag(currentsel);
            //writing_removing(currentsel);
        }

        if(currentsel === 'ufoid'){
            window.location.href = "projects.html";
        }
        currentsel = null;
        currentval = null;
        posone = null;
 

    
    }
}

function updateBoxPosition() {
    const offsetX = 0.12;
    const offsetY = 0.25;

    const ndcPosition = new THREE.Vector3(1 - offsetX * 2, 1 - offsetY * 2, -1);

    ndcPosition.unproject(camera);

    const dir = ndcPosition.sub(camera.position).normalize();

    const distance = 5;
    const newPosition = camera.position.clone().add(dir.multiplyScalar(distance));

    ufo.position.copy(newPosition);
}

function animate(){
    requestAnimationFrame(animate);

    if(ufo_animated){
        ufo_animated.update(0.005);
    }

    if(animated){
        animated.update(0.01);
    }

    if(animated_ukr){
        animated_ukr.update(0.01);
    }

    if(animated_cad){
        animated_cad.update(0.01);
    }

    if(animated_cze){
        animated_cze.update(0.01);
    }

    if(animated_swi){
        animated_swi.update(0.01);
    }

    if(kazakhflag){
        kazakhflag.lookAt(camera.position);
    }

    if(swiflag){
        swiflag.lookAt(camera.position);
    }

    if(czeflag){
        czeflag.lookAt(camera.position);
    }

    if(cadflag){
        cadflag.lookAt(camera.position);
    }

    if(ukrflag){
        ukrflag.lookAt(camera.position);
    }

    if(ufo){
        updateBoxPosition();
    }
    
    renderer.render(scene, camera);
};

animate();