

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

$(window).scroll(()=>{
  let scrollVal = $(document).scrollTop();
  console.log(scrollVal);
})
