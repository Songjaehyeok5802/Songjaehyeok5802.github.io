

const checkpoint = window.innerHeight - 500;
window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (currentScroll <= checkpoint) {
    opacityG = 1 - currentScroll / checkpoint;
  } else {
    opacityG = 0;
  }
  document.querySelector(".title").style.opacity = opacityG;
  
  
  
  
  
  
  let storyPosY = Math.max(0, currentScroll - story3D.offset().top);
  story_wrap.css({"transform" : "translateX(" + -1 * storyPosY +"px)"});
  console.log(storyPosY);
  if(currentScroll >= story3D.offset().top  && currentScroll < story3D.offset().top + story3D.innerHeight()){
    if(storyPosY < 6400){
      story_wrap.css({"position" : "fixed", "top" : 150 + "px" , "height" : 768, "transform" : "translateX(" + -1 * storyPosY +"px)"});
    }else{
      story_wrap.css({"position" : "relative", "top" : 150 + "px" , "height" : 768, "transform" : "translateX(" + -6400+"px) translateY("+ 6400 + "px)"});
    }
  }else{
    story_wrap.css({"position" : "absolute"});
  }
  
});

const story3D = $("div.story3D");
const story_wrap = $("div.story_wrap");

story3D.css({"width" : 8000, "height" : 7200});










