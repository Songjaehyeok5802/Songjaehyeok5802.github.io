

const checkpoint = window.innerHeight - 500;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= checkpoint) {
    opacityG = 1 - currentScroll / checkpoint;
  } else {
    opacityG = 0;
  }
  document.querySelector(".title").style.opacity = opacityG;
});


const nextBtn = $("a.nextBtn");
let mouseX = 0, mouseY = 0;

nextBtn.mousemove( (e)=>{
  mouseX = e.pageX;
  mouseY = e.pageY;
  $("div.cursor").css({"top" : mouseY, "left" : mouseX});
  $("div.cursor").addClass("active");
});
nextBtn.mouseleave(()=>{
  $("div.cursor").removeClass("active");
});
  

