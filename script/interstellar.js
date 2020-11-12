

const checkpoint = window.innerHeight - 500;
const explain = $("div.txtwrap"),
      about = $("div.about"),
      sticky_Title = $("div.sticky_Title"),
      story = $("div.story"),
      explain3D = $("p.explain3D"),
      main3D = $("div.main3D");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= checkpoint) {
    opacityG = 1 - currentScroll / checkpoint;
  } else {
    opacityG = 0;
  }
  document.querySelector(".title").style.opacity = opacityG;


  
  
  
  // let scrollTop = $(document).scrollTop();
  // // let scrollLeft = $(document).scrollLeft();
  // preCount = count;
  // count = scrollTop;
  // if (currentScroll >= 4170 && preCount < count) {
  //   test2 = test - (count- preCount);
  //   test = test2;
  //   console.log(test);
  //   story3D.css("right", test);

  // } else if(currentScroll >= 4170 && preCount > count){
  // }
  
  
});




let test = 6412;
let count = 0;
    preCount = 0;
    i = 0;
const winH = window.innerHeight;
const winW = window.innerWidth;
const story3D = $("div.story3D");
story3D.css({"width" : 8000});






