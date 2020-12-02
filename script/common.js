
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
        closeBtn = $("div.contact_bg");

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

const $scroll = $("html, body");
let isScroll = true;


function goTop(){
    const topBtn = $("div.topBtn");
    topBtn.click(()=>{
        $scroll.animate({ scrollTop: 0 },{ duration : 800, easing: 'easeOutCirc' });
    });
    $scroll.on('mousewheel', ()=>{
        $scroll.stop();
    });
}

function clickProject(){
    const project = $(".projectLink"),
          project_lab = $(".projectLink_Lab"),
          changeBg = $("div.changeWeb_main"),
          changeBg_2 = $("div.changeWeb_main_2"),
          changeLab = $("div.changeLab_main"),
          changeLab_2 = $("div.changeLab_main_2");


    project.click((e)=>{
        e.preventDefault();
        const el = e.currentTarget;
        changeBg.css({"height" : 100 + "%"});
        changeBg_2.css({"height" : 100 + "%"});
        setInterval(
            ()=>{
                location.href = el.getAttribute("href");
            }, 1300
        )
    })

    project_lab.click((e)=>{
        e.preventDefault();
        const el = e.currentTarget;
        changeLab.css({"height" : 100 + "%"});
        changeLab_2.css({"height" : 100 + "%"});
        setInterval(
            ()=>{
                location.href = el.getAttribute("href");
            }, 1300
        )
    })
}


document.addEventListener('mousemove', function(e){
    let card_x = getTransformValue(e.clientX,window.innerWidth,25);
    let card_y = getTransformValue(e.clientY,window.innerHeight,25);
    let text_shadow_x = getTransformValue(e.clientX,window.innerWidth,28);
    let text_shadow_y = getTransformValue(e.clientY,window.innerHeight,28);
    $(".floating").css("transform","rotateX("+card_y+"deg) rotateY("+card_x+"deg)  translateZ(60px)");
    $(".floating").css("box-shadow",-card_x+"px "+card_y+"px 55px rgba(255, 255, 255, .2)");
    $(".text").css("text-shadow",-text_shadow_x+"px "+text_shadow_y+"px 6px rgba(0, 0, 0, .3)");
});
function getTransformValue(v1,v2,value){
    return (v1/v2*value-value/2).toFixed(1);                        
}
    
// Scroll Fade In
const activeEl = document.querySelectorAll(".scrollAni");
for(let i = 0 ; i < activeEl.length; i++){
  activeEl[i].dataset.index = i;
}

function footer(){
    const footer_link = $("a.footerLink"),
          footer_img = $("img.footer_img");

    footer_link.mouseover(()=>{
        footer_img.addClass("hover");
        footer_img.removeClass("leave");
    }).mouseout(()=>{
        footer_img.removeClass("hover");
        footer_img.addClass("leave");
    })
}

window.addEventListener("scroll", (e)=>{
    

    var scrollValue = $(document).scrollTop();
    if(scrollValue > 300){
        $("div.topBtn").addClass("topBtnActive");
    }else{
        $("div.topBtn").removeClass("topBtnActive");
    }

    let boundingRect, activeEl_i;
    for(let i = 0 ; i < activeEl.length; i++){
      activeEl_i = activeEl[i];
      boundingRect = activeEl[i].getBoundingClientRect();
      if(boundingRect.top < window.innerHeight * 0.8){
        activeEl[activeEl_i.dataset.index].style.opacity = 1;
      }
    }
})


function init(){
    goTop();
    navigation();
    contactBtn();
    clickProject();
    footer();
}
init();