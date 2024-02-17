import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-3, 3, 2, -3, 0.2, 10);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(1920, 1080);
document.body.appendChild(renderer.domElement);

camera.position.y -= 10;

// Orbit Controls
const cameraControl = new OrbitControls(camera, renderer.domElement);

// Floor
const floorGeometry = new THREE.BoxGeometry(2, 0.2, 2);
const textureLoader = new THREE.TextureLoader();
const floorTexture = textureLoader.load('https://cdn.architextures.org/textures/24/1/grass-73y0c0.jpg'); 
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(3, 3); 
const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture, color: 0x09B051 });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.castShadow = true; 
floorMesh.receiveShadow = true; 
floorMesh.position.set(0, -0.5, 0);
scene.add(floorMesh);

const whiteMarble = textureLoader.load('https://cdn.architextures.org/textures/21/04/white-marble-608a68d8b4f71-1200.jpg');
whiteMarble.wrapS = THREE.RepeatWrapping;
whiteMarble.wrapT = THREE.RepeatWrapping;
whiteMarble.repeat.set(1, 1);


// Big circle
const marbleFloorGeom = new THREE.CylinderGeometry( 0.5, 0.5, 0.1, 32 );
const marbleFloorMaterial = new THREE.MeshPhongMaterial( {map: whiteMarble, color: 0xFFFFFF} ); 
const cylinder = new THREE.Mesh(marbleFloorGeom, marbleFloorMaterial);
cylinder.position.set(0, -0.25, 0);
scene.add( cylinder );

// Roof
const marbleFloorGeom2 = new THREE.CylinderGeometry( 0.45, 0.45, 0.1, 32 );
const cylinder3 = new THREE.Mesh(marbleFloorGeom2, marbleFloorMaterial);
cylinder3.position.set(0, 1.4, 0);
scene.add( cylinder3 );

// evbn bigger circle
const marbleFloorGeom1 = new THREE.CylinderGeometry( 0.6, 0.6, 0.1, 32 );
const cylinder2 = new THREE.Mesh(marbleFloorGeom1, marbleFloorMaterial);
cylinder2.position.set(0, -0.35, 0);
scene.add( cylinder2 );

// Pillar 1
const pillar1Geom = new THREE.CylinderGeometry( 0.05, 0.05, 2, 32 );
const pillar1 = new THREE.Mesh(pillar1Geom, marbleFloorMaterial);
pillar1.position.set(0.36, 0.4, -0.1);
scene.add( pillar1 );

// Pillar 2
const pillar2 = new THREE.Mesh(pillar1Geom, marbleFloorMaterial);
pillar2.position.set(-0.1, 0.4, 0.36);
scene.add( pillar2 );

// Pillar 3
const pillar3 = new THREE.Mesh(pillar1Geom, marbleFloorMaterial);
pillar3.position.set(-0.26, 0.4, -0.26);
scene.add( pillar3 );

// Pillar base 1
const pillarBaseGeom = new THREE.CylinderGeometry( 0.1, 0.1, 0.2, 32 );
const pillarBase1 = new THREE.Mesh(pillarBaseGeom, marbleFloorMaterial);
pillarBase1.position.set(0.36, -0.1, -0.1);
scene.add( pillarBase1 );

// Pillar Base 2
const pillarBase2 = new THREE.Mesh(pillarBaseGeom, marbleFloorMaterial);
pillarBase2.position.set(-0.1, -0.1, 0.36);
scene.add( pillarBase2 );

// Pillar Base 3
const pillarBase3 = new THREE.Mesh(pillarBaseGeom, marbleFloorMaterial);
pillarBase3.position.set(-0.26, -0.1, -0.26);
scene.add( pillarBase3 );

// Pillar Sub-base 1
const pillarSubBaseGeom = new THREE.CylinderGeometry( 0.075, 0.075, 0.1, 32 );
const pillarSubBase1 = new THREE.Mesh(pillarSubBaseGeom, marbleFloorMaterial);
pillarSubBase1.position.set(0.36, 0.05, -0.1);
scene.add( pillarSubBase1 );

// Pillar Sub-base 2
const pillarSubBase2 = new THREE.Mesh(pillarSubBaseGeom, marbleFloorMaterial);
pillarSubBase2.position.set(-0.1, 0.05, 0.36);
scene.add( pillarSubBase2 );

// Pillar Sub-base 3
const pillarSubBase3 = new THREE.Mesh(pillarSubBaseGeom, marbleFloorMaterial);
pillarSubBase3.position.set(-0.26, 0.05, -0.26);
scene.add( pillarSubBase3 );


// Streetlight stem
const streetlightStemGeom = new THREE.CylinderGeometry( 0.02, 0.02, 3, 32 );
const steelTexture = textureLoader.load('https://cdn.architextures.org/textures/23/6/stainless-steel-none-g8nd1f.jpg');
steelTexture.wrapS = THREE.RepeatWrapping;
steelTexture.wrapT = THREE.RepeatWrapping;
const steelMaterial = new THREE.MeshPhysicalMaterial( {map: steelTexture, color: 0xe0e5e5} ); 
const streetlightStem1 = new THREE.Mesh(streetlightStemGeom, steelMaterial);
streetlightStem1.position.set(-0.5, 1, 0.8);
scene.add( streetlightStem1 );

// Streetlight head
const streetlightHeadGeom = new THREE.CylinderGeometry( 0.1, 0.1, 0.05, 32 );
const HeadMaterial = new THREE.MeshPhysicalMaterial( {color: 0xFFFFFF} ); 
const streetlightHead1 = new THREE.Mesh(streetlightHeadGeom, HeadMaterial);
streetlightHead1.position.set(-0.5, 2.5, 0.8);
scene.add( streetlightHead1 );

// Lost flashlight base
const flashlightGeom = new THREE.CylinderGeometry( 0.02, 0.02, 0.2, 32 );
const plasticTexture = textureLoader.load('https://cdn.architextures.org/textures/23/6/plastic-none-85rca2.jpg');
plasticTexture.wrapS = THREE.RepeatWrapping;
plasticTexture.wrapT = THREE.RepeatWrapping;
const plasticMaterial = new THREE.MeshPhysicalMaterial( {map: plasticTexture, color: 0xFF0000} ); 
const flashlightBase1 = new THREE.Mesh(flashlightGeom, plasticMaterial);
flashlightBase1.rotation.x = Math.PI / 2;
flashlightBase1.position.set(0.8, -0.37, 0.5);
scene.add( flashlightBase1 );

// Lost flashlight head
const flashlightHeadGeom =  new THREE.CylinderGeometry( 0.02, 0.04, 0.05, 32 );
const flashlightHeadMaterial = new THREE.MeshStandardMaterial( {map: steelTexture, color: 0x303234 } ); 
const flashlightHead = new THREE.Mesh(flashlightHeadGeom, flashlightHeadMaterial);
flashlightHead.rotation.x = Math.PI / 2;
flashlightHead.position.set(0.8, -0.37, 0.4);
scene.add( flashlightHead );

// Create walls
const wallGeometry1 = new THREE.BoxGeometry(0.1, 0.7, 2.0);
const wallGeometry2 = new THREE.BoxGeometry(0.1, 2, 2.0); 
const leftWall = new THREE.Mesh(wallGeometry1, whiteMarble);
const rightWall = new THREE.Mesh(wallGeometry2, whiteMarble);
leftWall.position.set(-1, -0.23, -0.05); 
rightWall.position.set(-0.05, 0.4, -1.02); 
rightWall.rotation.y = -Math.PI / 2; 
scene.add(leftWall);
scene.add(rightWall);



// LIGHTING

// Moonlight (type 1: directional light)
const moonlight = new THREE.DirectionalLight(0x8c9ec9 , 0.3);
moonlight.position.set(-0.75, 1.5, 0.1); // position sa light
moonlight.target.position.set(0.5, -0.3, -0.8); // target sa light
moonlight.intensity = 1;
scene.add(moonlight);
scene.add(moonlight.target);

// Flashlight (type 2: spotlight)
const streetlightSpotlight = new THREE.SpotLight(0xFFFFFF, 5, 10, Math.PI / 6, 0.5, 2); // Parameters: (color, intensity, distance, angle, penumbra, decay)
streetlightSpotlight.position.set(0.8, -0.37, 0.43); // Position of the light
streetlightSpotlight.target.position.set(0.8, -0.4, 0.1); // Target position for the light
scene.add(streetlightSpotlight);
scene.add(streetlightSpotlight.target);

// Streetlight (type 3: Pointlight)
const lampLight = new THREE.PointLight(0xFFFFFF, 1.5, 60);
lampLight.position.set(-0.45, 2.4, 0.78); // Position sa light
scene.add(lampLight);



// Camera shit
camera.position.set(2, 5, 2);
camera.lookAt(0, 0, 0);

// Animation shit
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();



