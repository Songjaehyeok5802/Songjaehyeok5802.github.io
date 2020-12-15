console.clear();

new hoverEffect({
    parent: document.querySelector('#changeImg'),
    intensity: 0.2,
    image1: "./img/profile_Img/profile.png",
    image2: "./img/profile_Img/profile_side.png",
    speedIn : 1,
    speedOut :2,
    displacementImage:"./img/profile_Img/effect.png"
});

const windowWidth = $( window ).width();
    let IS_SmallWidth = (windowWidth < 500) ? true : false;
    
    
if(IS_SmallWidth){
    $("p.mainTxt > br").remove();
    $("p.mainTxt > span > br").remove();
}



//three 
/*
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
        camera.position.set(2.5, 0, 0); //0, 0.5, 3
        camera.lookAt(scene.position);  

        //LIGHT-------------
        const hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( hemiLight );

        const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.3 );
        directionalLight.position.set(0, 0, 5);
        scene.add( directionalLight );

        const geo = new THREE.BoxGeometry( 1, 1, 1 );
        const matGroup = [
            new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load("../img/logo/html.png"), side : THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load("../img/logo/css.png"), side : THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load("../img/logo/js.png"), side : THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load("../img/logo/jquery.png"), side : THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load("../img/logo/three.png"), side : THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load("../img/logo/"), side : THREE.DoubleSide})
        ];
        const toolMat = new THREE.MeshFaceMaterial(matGroup);
        const box = new THREE.Mesh(geo, toolMat);
        box.position.set(0, 0, 1.5);
        box.rotation.set(0, 5.1, 0);
        scene.add(box);
        let scrollValue= 0;

        const body = document.querySelector("body");
        const bodyH = body.offsetHeight;
        console.log(bodyH);


        function boxAni(){
            this.tl = new TimelineMax();
            let stan = bodyH / 8;
            $(window).scroll( () => {
                scrollValue = $(document).scrollTop();
                return scrollValue;
            });
            // console.log(scrollValue); 
            if(scrollValue < stan){
                $("article.introduce").css({"opacity" : 1});
                $("div.toolTxt").css({"opacity" : 0});
                $("p.greet").css({"opacity" : 0});
                this.tl.to(box.rotation,2, {x: 0, y : 5.1, z : 0,  ease : Expo.easeOut})
            }
            if(scrollValue > stan && scrollValue <= stan * 2){
                $("article.introduce").css({"opacity" : 0});
                $("div.toolTxt").css({"opacity" : 0}).eq(0).css({"opacity" : 1});
                $("p.greet").css({"opacity" : 0});
                this.tl.to(box.rotation,2, { x : 0, y : 0.7,  z : 0, ease : Expo.easeOut})
            }
            if(scrollValue > stan * 2 && scrollValue <= stan * 3){
                $("article.introduce").css({"opacity" : 0});
                $("div.toolTxt").css({"opacity" : 0}).eq(1).css({"opacity" : 1});
                this.tl.to(box.rotation,2, { x : 0, y : 4,  z : 0, ease : Expo.easeOut})
            }
            if(scrollValue > stan * 3 && scrollValue <= stan * 4){
                $("article.introduce").css({"opacity" : 0});
                $("div.toolTxt").css({"opacity" : 0}).eq(2).css({"opacity" : 1});
                $("p.greet").css({"opacity" : 0});
                this.tl.to(box.rotation,2, {x: -1.5, y : -3.3, z : 1,  ease : Expo.easeOut})
                
            }
            if(scrollValue > stan * 4 && scrollValue <= stan * 5){
                $("article.introduce").css({"opacity" : 0});
                $("div.toolTxt").css({"opacity" : 0}).eq(3).css({"opacity" : 1});
                $("p.greet").css({"opacity" : 0});
                this.tl.to(box.rotation,2, {x: 1.5, y : 3.1, z : -1,  ease : Expo.easeOut})
            }
            if(scrollValue > stan * 5 && scrollValue <= stan * 6){
                $("article.introduce").css({"opacity" : 0});
                $("div.toolTxt").css({"opacity" : 0}).eq(4).css({"opacity" : 1});
                $("p.greet").css({"opacity" : 0});
                this.tl.to(box.rotation,2, {x : 0, y : 2, z : 0, ease : Expo.easeOut});
            }
            if(scrollValue > stan * 6){
                $("article.introduce").css({"opacity" : 0});
                $("div.toolTxt").css({"opacity" : 0});
                $("p.greet").css({"opacity" : 1});
                this.tl.to(box.rotation,2, {x : 0, y : 5.1, z : 0, ease : Expo.easeOut});
                this.tl.to(box.scale, 0.1, {x : 0, y : 0, z : 0, ease : Expo.easeOut});
            }else{
                this.tl.to(box.scale, 2, {x : 1, y : 1, z : 1, ease : Expo.easeOut});
            }
        }

        //RENDER-------------------------------------------------------------------------------
        const renderScene = new function renderScene() {
            requestAnimationFrame(renderScene);


            renderer.render(scene,camera);
        }   
    }
    bg_3D();
*/