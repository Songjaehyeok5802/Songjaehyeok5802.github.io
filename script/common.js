
// Header
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
      }else{
          bar_1.css({'transform':'rotate('+ 45 +'deg) translate(10px, 10px)' });
          bar_3.css({'transform':'rotate('+ -45 +'deg) translate(9px, -7px) '});
      }
  });

  navBar.mouseleave(() => {
      if(!click){
          bar_2.css({'transform':'rotate('+ 0 +'deg)'})
          bar_3.css("width", 50 + "%");
      }else{
          bar_1.css({'transform':'rotate('+ 0 +'deg) translate(10px, 10px)' });
          bar_3.css({'transform':'rotate('+ 90 +'deg) translate(-20px, -5px) '});
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

navigation();
contactBtn();

// Scroll Fade In
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