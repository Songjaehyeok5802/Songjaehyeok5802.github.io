

const activeEl = document.querySelectorAll(".scrollAni");
for(let i = 0 ; i < activeEl.length; i++){
  activeEl[i].dataset.index = i;
}
window.addEventListener("scroll", ()=>{
    let boundingRect, activeEl_i;
    for(let i = 0 ; i < activeEl.length; i++){
      activeEl_i = activeEl[i];
      boundingRect = activeEl[i].getBoundingClientRect();
      if(boundingRect.top < window.innerHeight * 0.8){
        console.log(activeEl_i.dataset.index);
        activeEl[activeEl_i.dataset.index].style.opacity = 1;
      }
    }
})