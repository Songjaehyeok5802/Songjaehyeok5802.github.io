
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
    const SpotlightDown = new THREE.PointLight( 0xffffff, 1); 
    const SpotlightLeft = new THREE.PointLight( 0xe1fcff, 3); 
    const SpotlightRight = new THREE.PointLight( 0xf6ffe1, 3); 
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
    colorMesh.position.set(0, 0, 0);
    scene.add(colorMesh);

    const textureInter = new THREE.TextureLoader().load( '../img/project/interstellar/2D/Main.png' );
    const matInter = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false, map: textureInter});
    const interMesh = new THREE.Mesh(geoSphere, matInter);
    interMesh.position.set(0, 0, 0);

    const textureDream = new THREE.TextureLoader().load( '../img/project/dream/Main.png' );
    const matDream = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false, map: textureDream});
    const dreamMesh = new THREE.Mesh(geoSphere, matDream);
    dreamMesh.position.set(0, 0, 0);

    const textureSubway = new THREE.TextureLoader().load( '../img/project/subway/subway_1.png' );
    const matSubway = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false, map: textureSubway});
    const subwayMesh = new THREE.Mesh(geoSphere, matSubway);
    subwayMesh.position.set(0, 0, 0);

    let count = 0;
    window.addEventListener("click", ()=>{
        if(count == 0){
            scene.remove(colorMesh);
            scene.add(interMesh);
            scene.add( SpotlightFront );
            count++;
        }else if(count == 1){
            scene.remove(interMesh);
            scene.add(dreamMesh);
            count++;
        }else if(count == 2){
            scene.remove(dreamMesh);
            scene.add(subwayMesh);
            count ++;
        }else if(count == 3){
            scene.remove(subwayMesh);
            scene.add(colorMesh);
            scene.remove( SpotlightFront );
            count = 0;
        }
    })

    //RENDER-------------------------------------------------------------------------------
    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        
        colorMesh.rotation.y += 0.0035;
        interMesh.rotation.y += 0.0035;
        dreamMesh.rotation.y += 0.0035;
        subwayMesh.rotation.y += 0.0035;



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
          bar_3 = $("span.nav_bar_3"),
          menu = $("div.menu");
    let   click = false;

    navBar.click(() => {
        if(!click){
            bar_2.css("opacity", 0);
            bar_1.css({'transform':'rotate('+ 45 +'deg) translate(10px, 10px)' });
            bar_3.css({'transform':'rotate('+ -45 +'deg) translate(9px, -7px) '});
            menu.addClass("active");
            click = true;
        }else{
            bar_2.css("opacity", 1),
            bar_1.css({'transform':'rotate('+ 0 +'deg) translate(0px, 0px)' });
            bar_3.css({'transform':'rotate('+ 0 +'deg) translate(0px, 0px) '});
            menu.removeClass("active");
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

function contactBtn(){
    const a_Contact = $("li.contact"),
          contactEls = $("div.contact_popup"),
          closeBtn = $("div.closeContact");

    a_Contact.click(
        ()=>{
            contactEls.css({"opacity" : 1, "pointer-events": "all"})
        }
    )
    closeBtn.click(
        ()=>{
            contactEls.css({"opacity" : 0, "pointer-events": "none"})
        }
    )
}

function Init(){
    // Three Js
    bg_3D();


    // Vanila Js
    scrollOpacity();
    navigation();
    contactBtn();
    const greet = document.querySelector(".greet");
    greet.style.height=window.innerHeight + "px";
}
Init();


