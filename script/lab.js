
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
    renderer.setClearColor( 0x000000, 0 );

    //CAMERA--------
    camera.position.set(0, 3, 0);
    camera.lookAt(scene.position);  

    //LIGHT-------------
    const SpotlightDown = new THREE.PointLight( 0xffffff, 1); 
    const SpotlightLeft = new THREE.PointLight( 0xe1fcff, 1); 
    const SpotlightRight = new THREE.PointLight( 0xf6ffe1, 1); 
    const SpotlightUp = new THREE.PointLight( 0xffffff, 1);  
    const SpotlightFront = new THREE.PointLight( 0xffffff, 1.2);  
    scene.add( SpotlightDown );
    scene.add( SpotlightLeft );
    scene.add( SpotlightRight );
    scene.add( SpotlightUp );
    // scene.add( SpotlightFront );
    SpotlightDown.position.set(0, -4, 0);
    SpotlightLeft.position.set(0, 0, 3);
    SpotlightRight.position.set(0, 0, -3);
    SpotlightUp.position.set(0, 4, 0);
    SpotlightFront.position.set(10, 0, 0);


    const geoSphere = new THREE.SphereGeometry( 1.5, 30, 30);
    const matColor = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false});
    const colorMesh = new THREE.Mesh(geoSphere, matColor);
    const colorMesh2 = new THREE.Mesh(geoSphere, matColor);
    const colorMesh3 = new THREE.Mesh(geoSphere, matColor);
    const colorMesh4 = new THREE.Mesh(geoSphere, matColor);
    const colorMesh5 = new THREE.Mesh(geoSphere, matColor);
    colorMesh.position.set(0, 0, 0);
    colorMesh2.position.set(3, 0, 0);
    colorMesh3.position.set(-3, 0, 0);
    colorMesh4.position.set(6, 0, 0);
    colorMesh5.position.set(-6, 0, 0);
    scene.add(colorMesh);
    scene.add(colorMesh2);
    scene.add(colorMesh3);
    scene.add(colorMesh4);
    scene.add(colorMesh5);

    var t = 0;

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

        
        colorMesh.rotation.y += 0.0035;
        t += 0.01;  
        camera.position.x = 20*Math.cos(t) + 0;
        camera.position.z = 20*Math.sin(t) + 0;
        camera.lookAt(0, 0, 0);
        composer.render();
        // renderer.render(scene,camera);
    }   
}


function clickProject(){
  const project = $("a.projectLink"),
        project_lab = $("a.projectLink_Lab"),
        changeBg = $("div.changeWeb_main"),
        changeBg_2 = $("div.changeWeb_main_2"),
        changeLab = $("div.changeLab_main"),
        changeLab_2 = $("div.changeLab_main_2");


  project.click((e)=>{
      e.preventDefault();
      const el = e.currentTarget;
      changeBg.css({"height" : 100 + "%"});
      changeBg_2.css({"height" : 100 + "%"});
      setInterval(
          ()=>{
              location.href = el.getAttribute("href");
          }, 1300
      )
  })

  project_lab.click((e)=>{
      e.preventDefault();
      const el = e.currentTarget;
      changeLab.css({"height" : 100 + "%"});
      changeLab_2.css({"height" : 100 + "%"});
      setInterval(
          ()=>{
              location.href = el.getAttribute("href");
          }, 1300
      )
  })
}

function goTop(){
    const topBtn = $("div.topBtn");
    topBtn.click(()=>{
        $scroll.animate({ scrollTop: 0 },{ duration : 800, easing: 'easeOutCirc' })
    });
}


window.addEventListener("scroll", (e)=>{
    var scrollValue = $(document).scrollTop();
    if(scrollValue > 300){
        $("div.topBtn").addClass("topBtnActive");
    }else{
        $("div.topBtn").removeClass("topBtnActive");
    }

})


function Init(){
    // Three Js
    bg_3D();
    // Vanila Js
    goTop();
    clickProject();
}
Init();


