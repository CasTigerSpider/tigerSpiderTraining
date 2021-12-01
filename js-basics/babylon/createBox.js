const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// ----------------------Create scene----------------------- //
const createScene = function () {

    // New scene object    
    const scene = new BABYLON.Scene(engine); 

    // ICreate a model
    BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 2, depth: 0.5});

    // Create a camera
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 3, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    // Create a light
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    return scene;
};
// --------------------------------------------------------- //

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});