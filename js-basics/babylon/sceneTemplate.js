const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// ----------------------Create scene----------------------- //
var createScene = function() {
    // Create a new scene object
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas

    // Add a light to the scene

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