import * as THREE from 'three';

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 100;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(20, 20, 20);
var material = new THREE.MeshNormalMaterial()

var cube = new THREE.Mesh(geometry, material);

scene.add(cube);
// var vertices = geometry.attributes.position.array;
// for (var i = 0, l = geometry.vertices.length; i < l; i++) {
//     geometry.vertices[i].x += -10 + Math.random() * 20;
//     geometry.vertices[i].y += -10 + Math.random() * 20;
// }

var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);



function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.03;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
}
animate();

// dat gui
// var gui = new dat.GUI();
// var cameraGui = gui.addFolder("camera position");
// cameraGui.add(camera.position, 'x');
// cameraGui.add(camera.position, 'y');
// cameraGui.add(camera.position, 'z');
// cameraGui.open();

// var cameraGui = gui.addFolder("camera projection");
// cameraGui.add(camera, "fov");
// cameraGui.open();

// var lightGui = gui.addFolder("light position");
// lightGui.add(light.position, 'x');
// lightGui.add(light.position, 'y');
// lightGui.add(light.position, 'z');
// lightGui.open();

// var cubeGui = gui.addFolder("cube position");
// cubeGui.add(cube.position, 'x');
// cubeGui.add(cube.position, 'y');
// cubeGui.add(cube.position, 'z');
// cubeGui.open();