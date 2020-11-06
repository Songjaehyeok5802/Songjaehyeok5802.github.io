
//  배경 행성
function bg_3D() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
    document.getElementById("bg_3D").appendChild(renderer.domElement);
    control = new THREE.OrbitControls(camera, renderer.domElement);

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
    camera.position.set(3, 0, 0);
    camera.lookAt(scene.position);  

    //LIGHT-------------
    const SpotlightDown = new THREE.PointLight( 0xffffff, 1.5); 
    const SpotlightLeft = new THREE.PointLight( 0xe1fcff, 3); 
    const SpotlightRight = new THREE.PointLight( 0xf6ffe1, 3); 
    const SpotlightUp = new THREE.PointLight( 0xffffff, 1.4);  
    // scene.add( SpotlightDown );
    // scene.add( SpotlightLeft );
    // scene.add( SpotlightRight );
    scene.add( SpotlightUp );
    SpotlightDown.position.set(0, -4, 0);
    SpotlightLeft.position.set(0, 0, 3);
    SpotlightRight.position.set(0, 0, -3);
    // SpotlightUp.position.set(0, 4, 0);
    SpotlightUp.position.set(10, 0, 0);

    // const geo = new THREE.IcosahedronGeometry(1, 3);
    const geo = new THREE.SphereGeometry( 1.5, 20, 20);
    // const texture = new THREE.TextureLoader().load( '../img/project/interstellar/2D/Main.png' );
    const texture = new THREE.TextureLoader().load( '../img/project/dream/Main.png' );
    // const texture = new THREE.TextureLoader().load( '../img/project/subway/subway_1.png' );
    const mat = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false, map: texture});
    const box = new THREE.Mesh(geo, mat);
    box.position.set(0, 0, 0);
    scene.add(box);


    //RENDER-------------------------------------------------------------------------------
    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        box.rotation.y += 0.002;

        renderer.render(scene,camera);
    }   
}

// 배경 스크롤 블러처리
function scrollOpacity(){
    const bg = document.querySelector("#bg_3D");
    const checkpoint = window.innerHeight;
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
    
      if (currentScroll < checkpoint) {
        bg.style.opacity = 1.3 - currentScroll / checkpoint;
      } else {
        bg.style.opacity = 0.1;
      }
    });
}

// 네비게이션바
function navigation(){
    const navBar = $("div.nav_bar"),
          bar_1 = $("span.nav_bar_1"),
          bar_2 = $("span.nav_bar_2"),
          bar_3 = $("span.nav_bar_3");
    let   click = false;

    navBar.click(() => {
        if(!click){
            bar_2.css("opacity", 0),
            bar_1.css({'transform':'rotate('+ 45 +'deg) translate(10px, 10px)' }),
            bar_3.css({'transform':'rotate('+ -45 +'deg) translate(9px, -7px) '}),
            click = true;
        }else{
            bar_2.css("opacity", 1),
            bar_1.css({'transform':'rotate('+ 0 +'deg) translate(0px, 0px)' }),
            bar_3.css({'transform':'rotate('+ 0 +'deg) translate(0px, 0px) '}),
            click = false;
        }
    });

    navBar.mouseenter(() => {
        if(!click){
            bar_2.css({'transform':'rotate('+ -37 +'deg)', "margin-left" : -4 + "px"}),
            bar_2.css("width", 122.5 + "%"),
            bar_3.css("width", 100 + "%");
        }
    });

    navBar.mouseleave(() => {
        if(!click){
            bar_2.css({'transform':'rotate('+ 0 +'deg)'})
            bar_3.css("width", 50 + "%");
        }
    });

}

function Init(){
    // Three Js
    bg_3D();


    // Vanila Js
    scrollOpacity();
    navigation();
    const greet = document.querySelector(".greet");
    greet.style.height=window.innerHeight + "px";
}
Init();


