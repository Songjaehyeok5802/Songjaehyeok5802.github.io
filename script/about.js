new hoverEffect({
    parent: document.querySelector('#changeImg'),
    intensity: 0.2,
    image1: "./img/profile_Img/profile.png",
    image2: "./img/profile_Img/profile_side.png",
    speedIn : 1,
    speedOut :2,
    displacementImage:"./img/profile_Img/effect.png"
});



function bg_3D() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
    document.getElementById("bg_3D").appendChild(renderer.domElement);
    // control = new THREE.OrbitControls(camera, renderer.domElement);

    //SIZE ---------
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", function(){
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    })
    renderer.setClearColor( 0x000000, 0 );

    //CAMERA--------
    camera.position.set(3, 0, 0); //0, 0.5, 3
    camera.lookAt(scene.position);  

    //LIGHT-------------
    const SpotlightDown = new THREE.PointLight( 0xffffff, 1.5); 
    const SpotlightLeft = new THREE.PointLight( 0xe1fcff, 3); 
    const SpotlightRight = new THREE.PointLight( 0xf6ffe1, 3); 
    const SpotlightUp = new THREE.PointLight( 0xffffff, 1.5);  
    scene.add( SpotlightDown );
    scene.add( SpotlightLeft );
    scene.add( SpotlightRight );
    scene.add( SpotlightUp );
    SpotlightDown.position.set(0, -4, 0);
    SpotlightLeft.position.set(0, 0, 3);
    SpotlightRight.position.set(0, 0, -3);
    SpotlightUp.position.set(0, 4, 0);

    var geo = new THREE.SphereGeometry( 1.5, 40, 40);
    const mat = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false});
    const box = new THREE.Mesh(geo, mat);
    box.position.set(0, 0, 0);
    scene.add(box);


    //RENDER-------------------------------------------------------------------------------
    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        if(camera.position.x > 0){
            camera.position.x -=0.01;
        }
        if(camera.position.y < 0.5){
            camera.position.y +=0.01;
        }
        if(camera.position.z < 3){
            camera.position.z +=0.01;
        }
        camera.lookAt(0, 0, 0);

        box.rotation.y += 0.002;
        renderer.render(scene,camera);
    }   
}
// bg_3D();