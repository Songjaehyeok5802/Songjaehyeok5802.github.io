
const story3D = $("div.story3D");
const story_wrap = $("div.story_wrap");
const checkpoint = window.innerHeight - 500;
let windowW = $( window ).width();


console.log(story_wrap.css({"transform" : "translateX"}))

  // section > article > div > div.story3D > div.story_wrap {position: relative;  top: 0px; flex-direction: column;} 
  // section > article > div > div.story3D > div.story_wrap > img{ float: none; margin-bottom: 70px;}

window.addEventListener("resize", ()=>{
  windowW = $( window ).width();
})

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (currentScroll <= checkpoint) {
    opacityG = 1 - currentScroll / checkpoint;
  } else {
    opacityG = 0;
  }
  document.querySelector(".title").style.opacity = opacityG;
  
  


  if(IS_MOBILE  || windowW < 1480){

  }else{
    let storyPosY = Math.max(0, currentScroll - story3D.offset().top);
    story_wrap.css({"transform" : "translateX(" + -1 * storyPosY +"px)"});
    if(currentScroll >= story3D.offset().top  && currentScroll < story3D.offset().top + story3D.innerHeight()){
      if(storyPosY < 6400){
        story_wrap.css({"position" : "fixed", "top" : 150 + "px" , "height" : 768, "transform" : "translateX(" + -1 * storyPosY +"px)"});
      }else{
        story_wrap.css({"position" : "relative", "top" : 150 + "px" , "height" : 768, "transform" : "translateX(" + -6400+"px) translateY("+ 6400 + "px)"});
      }
    }else{
      story_wrap.css({"position" : "absolute"});
    }
  }



  
});




if(IS_MOBILE || windowW < 1480){
}else{
  story3D.css({"width" : 8000, "height" : 7300});
}













