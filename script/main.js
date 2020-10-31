
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
    const SpotlightUp = new THREE.PointLight( 0xffffff, 1.5);  
    scene.add( SpotlightDown );
    scene.add( SpotlightLeft );
    scene.add( SpotlightRight );
    scene.add( SpotlightUp );
    SpotlightDown.position.set(0, -4, 0);
    SpotlightLeft.position.set(0, 0, 3);
    SpotlightRight.position.set(0, 0, -3);
    SpotlightUp.position.set(0, 4, 0);

    // const geo = new THREE.IcosahedronGeometry(1, 3);
    const geo = new THREE.SphereGeometry( 1.5, 20, 20);
    const mat = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false});
    const box = new THREE.Mesh(geo, mat);
    // box.position.set(1.5, -0.5, -1.5);
    box.position.set(0, 0, 0);
    scene.add(box);

    // const geo2 = new THREE.SphereGeometry(0.3, 20, 20);
    // const mat2 = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false});
    // const box2 = new THREE.Mesh(geo2, mat2);
    // box2.position.set(1, 0.5, 0.5);
    // scene.add(box2);

    // const geo3 = new THREE.SphereGeometry(0.2, 20, 20);
    // const mat3 = new THREE.MeshLambertMaterial({color : 0xedfaff, wireframe : false});
    // const box3 = new THREE.Mesh(geo3, mat3);
    // box3.position.set(1, -0.5, 2);
    // scene.add(box3);


    //RENDER-------------------------------------------------------------------------------
    const renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        box.rotation.y += 0.002;
        // box2.rotation.y -= 0.001;
        // box3.rotation.y += 0.002;


        // console.log(camera.position.x);
        // console.log(camera.position.y);
        // console.log(camera.position.z);
        renderer.render(scene,camera);
    }   
}

// 인터스텔라 이미지
function inter_3D() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    document.getElementById("inter_3D").appendChild(renderer.domElement);

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
    camera.position.set(0, 0, 80);
    camera.lookAt(0, 0, 0);  

    const texture = new THREE.TextureLoader().load( '../img/project/interstellar/Main.jpg' );
    const geometry = new THREE.PlaneGeometry(120, 70, 30, 30);
    const material = new THREE.MeshBasicMaterial({map : texture});
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.position.set(30, 0, 0);

    let speed = 0;
    function testAni(){
        for (let i = 0; i < geometry.vertices.length; i++) {
            let z = geometry.vertices[i].z;
            geometry.vertices[i].z = Math.sin(( i + speed));
            plane.geometry.verticesNeedUpdate = true;
            speed += 0.00005;
          }
    }

    //RENDER-------------------------------------------------------------------------------
    const renderScene = new function renderScene() {
      requestAnimationFrame(renderScene);
    
        // testAni();
        renderer.render(scene,camera);
    }   
}

// 지하철 이미지
function subway_3D() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    document.getElementById("subway_3D").appendChild(renderer.domElement);

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
    camera.position.set(0, 0, 80);
    camera.lookAt(0, 0, 0);  

    const texture = new THREE.TextureLoader().load( '../img/project/subway/subway_2.png' );
    const geometry = new THREE.PlaneGeometry(120, 70, 30, 30);
    const material = new THREE.MeshBasicMaterial({map : texture});
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.position.set(-30, 0, 0);

    let speed = 0;
    function testAni(){
        for (let i = 0; i < geometry.vertices.length; i++) {
            let z = geometry.vertices[i].z;
            geometry.vertices[i].z = Math.sin(( i + speed));
            plane.geometry.verticesNeedUpdate = true;
            speed += 0.00005;
          }
    }

    //RENDER-------------------------------------------------------------------------------
    const renderScene = new function renderScene() {
      requestAnimationFrame(renderScene);
    
        // testAni();
        renderer.render(scene,camera);
    }   
}

// 꿈 이미지
function dream_3D() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    document.getElementById("dream_3D").appendChild(renderer.domElement);

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
    camera.position.set(0, 0, 80);
    camera.lookAt(0, 0, 0);  

    const texture = new THREE.TextureLoader().load( '../img/project/dream/Main.png' );
    const geometry = new THREE.PlaneGeometry(120, 70, 30, 30);
    const material = new THREE.MeshBasicMaterial({map : texture});
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.position.set(30, 0, 0);

    let speed = 0;
    function testAni(){
        for (let i = 0; i < geometry.vertices.length; i++) {
            let z = geometry.vertices[i].z;
            geometry.vertices[i].z = Math.sin(( i + speed));
            plane.geometry.verticesNeedUpdate = true;
            speed += 0.00005;
          }
    }

    //RENDER-------------------------------------------------------------------------------
    const renderScene = new function renderScene() {
      requestAnimationFrame(renderScene);
    
        // testAni();
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
        bg.style.opacity = 0.3;
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
        bar_2.css("opacity", 0),
        bar_1.css({'transform':'rotate('+ 45 +'deg) translate(10px, 10px)' }),
        bar_3.css({'transform':'rotate('+ -45 +'deg) translate(9px, -7px) '}),
        click = true;
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
    inter_3D();
    subway_3D();
    dream_3D();

    // Vanila Js
    scrollOpacity();
    navigation();
    const greet = document.querySelector(".greet");
    greet.style.height=window.innerHeight + "px";
}
Init();


