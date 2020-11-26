
//  배경 행성
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
    renderer.setClearColor( 0xe5e3dd, 1 );

    //CAMERA--------
    camera.position.set(4, 0, 0);
    camera.lookAt(scene.position);  

    //LIGHT-------------
    const hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    // const hemiLight = new THREE.HemisphereLight( 0xffffbb, 1 );
    scene.add( hemiLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.3 );
    directionalLight.position.set(0, 0, 5);
    scene.add( directionalLight );

    const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.3 );
    directionalLight2.position.set(0, 0, -5);
    scene.add( directionalLight2 );
    
    const directionalLight3 = new THREE.DirectionalLight( 0xffffff, 0.3 );
    directionalLight3.position.set(0, -4, 0);
    scene.add( directionalLight3 );

    const SpotlightDown = new THREE.PointLight( 0xffffff, 1); 
    const SpotlightLeft = new THREE.PointLight( 0xe1fcff, 0.2); 
    const SpotlightRight = new THREE.PointLight( 0xf6ffe1, 0.2); 
    const SpotlightUp = new THREE.PointLight( 0xffffff, 1);  
    const SpotlightFront = new THREE.PointLight( 0xffffff, 0.2);  
    // scene.add( SpotlightDown );
    scene.add( SpotlightLeft );
    scene.add( SpotlightRight );
    // scene.add( SpotlightUp );
    scene.add( SpotlightFront );
    SpotlightDown.position.set(0, -4, 0);
    SpotlightLeft.position.set(0, 0, 3);
    SpotlightRight.position.set(0, 0, -3);
    SpotlightUp.position.set(0, 4, 0);
    SpotlightFront.position.set(10, 0, 0);


    // sphere
    let angle = 5;
    // const geoSphere = new THREE.SphereGeometry( 1.5, angle, angle);
    const geoSphere = new THREE.TorusKnotGeometry( 10, 1, 300, 9, 6, 14 );
    const matColor = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false});
    const colorMesh = new THREE.Mesh(geoSphere, matColor);
    colorMesh.scale.set(0.1, 0.1, 0.1);
    colorMesh.position.set(0, 0, 0);
    scene.add(colorMesh);



    // const textureInter = new THREE.TextureLoader().load( '../img/project/interstellar/2D/Main.png' );
    // const matInter = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false, map: textureInter});
    // const interMesh = new THREE.Mesh(geoSphere, matInter);
    // interMesh.position.set(0, 0, 0);

    // const textureDream = new THREE.TextureLoader().load( '../img/project/dream/Main.png' );
    // const matDream = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false, map: textureDream});
    // const dreamMesh = new THREE.Mesh(geoSphere, matDream);
    // dreamMesh.position.set(0, 0, 0);

    // const textureSubway = new THREE.TextureLoader().load( '../img/project/subway/subway_1.png' );
    // const matSubway = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false, map: textureSubway});
    // const subwayMesh = new THREE.Mesh(geoSphere, matSubway);
    // subwayMesh.position.set(0, 0, 0);
    
    // // Btn Event
    // let count = 0;
    // const btnRight = $("div.btnRight");
    // const btnLeft = $("div.btnLeft");
    // btnRight.click(()=>{
    //     if(count == 0){
    //         scene.remove(colorMesh);
    //         scene.add(interMesh);
    //         scene.add( SpotlightFront );
    //     }else if(count == 1){
    //         scene.remove(interMesh);
    //         scene.add(dreamMesh);
    //         SpotlightLeft.intensity = 1;
    //         SpotlightRight.intensity = 1;
    //     }else if(count == 2){
    //         scene.remove(dreamMesh);
    //         scene.add(subwayMesh);
    //     }else if(count == 3){
    //         scene.remove(subwayMesh);
    //         scene.add(colorMesh);
    //         SpotlightLeft.intensity = 3;
    //         SpotlightRight.intensity = 3;
    //         scene.remove( SpotlightFront );
    //         count = -1;
    //     }
    //     count ++ ;
    // });
    // btnLeft.click(()=>{
    //     if(count == 0){
    //         scene.remove(colorMesh);
    //         scene.add(subwayMesh);
    //         scene.add( SpotlightFront );
    //         count = 4;
    //     }else if(count == 1){
    //         scene.remove(interMesh);
    //         scene.add(colorMesh);
    //         SpotlightLeft.intensity = 3;
    //         SpotlightRight.intensity = 3;
    //         scene.remove( SpotlightFront );
    //     }else if(count == 2){
    //         scene.remove(dreamMesh);
    //         scene.add(interMesh);
    //     }else if(count == 3){
    //         scene.remove(subwayMesh);
    //         scene.add(dreamMesh);
    //         SpotlightLeft.intensity = 1;
    //         SpotlightRight.intensity = 1;
    //     }
    //     count -- ;
    // });


    // POSTPROCESSING
    let composer;
    composer = new POSTPROCESSING.EffectComposer(renderer);
    composer.addPass(new POSTPROCESSING.RenderPass(scene,camera));

    const effectPass = new POSTPROCESSING.EffectPass(
      camera,
      new POSTPROCESSING.BloomEffect()
    );
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);

    
    //RENDER-------------------------------------------------------------------------------
    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        
        colorMesh.rotation.y += 0.004;
        
        // interMesh.rotation.y += 0.0035;
        // dreamMesh.rotation.y += 0.0035;
        // subwayMesh.rotation.y += 0.0035;


        composer.render();
        // renderer.render(scene,camera);
    }   
}



// 배경 스크롤 블러처리
function scrollOpacity(){
    const bg = document.querySelector("#bg_3D"),
          btnRight = document.querySelector("div.btnRight"),
          btnLeft = document.querySelector("div.btnLeft");
    const checkpoint = window.innerHeight;
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
    
      if (currentScroll < checkpoint) {
        bg.style.opacity = 1.3 - currentScroll / checkpoint;
        btnRight.style.opacity = 1.3 - currentScroll / checkpoint;
        btnLeft.style.opacity = 1.3 - currentScroll / checkpoint;
      } else {
        bg.style.opacity = 0.1;
        btnRight.style.opacity = 0.1;
        btnLeft.style.opacity = 0.1;
      }
    });
}

function Init(){
    // Three Js
    bg_3D();


    // Vanila Js
    // scrollOpacity();

    const greet = document.querySelector(".greet");
    greet.style.height=window.innerHeight + "px";
}
Init();


