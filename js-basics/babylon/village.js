const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// ----------------------Create scene----------------------- //
const createScene = function () {

    // New scene object    
    const scene = new BABYLON.Scene(engine); 

    // Create a model
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});

    const box = BABYLON.MeshBuilder.CreateBox("box1", {width: 2, height: 1.5, depth: 3});
    box1.position.y = 0.75;

    // Create a camera
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 3, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    // Create a light
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    // Show axes
    showWorldAxis(12);

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

// ---------------- Function declarations ----------------- //
function showWorldAxis(size, scene) {
    var makeTextPlane = function (text, color, size) {
            var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
            dynamicTexture.hasAlpha = true;
            dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
            var plane = BABYLON.MeshBuilder.CreatePlane("TextPlane", { size }, scene);
            var planeMaterial = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
            plane.material = planeMaterial;
            planeMaterial.backFaceCulling = false;
            planeMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
            planeMaterial.diffuseTexture = dynamicTexture;
            return plane;
    };

    var axisX = BABYLON.MeshBuilder.CreateLines(
            "axisX",
            {
            points: [BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)],
            },
            scene,
    );
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, 0.05 * size, 0);

    var axisY = BABYLON.MeshBuilder.CreateLines(
            "axisY",
            {
            points: [BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)],
            },
            scene,
    );
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);

    var axisZ = BABYLON.MeshBuilder.CreateLines(
            "axisZ",
            {
            points: [BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)],
            },
            scene,
    );
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
};