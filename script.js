// sidebar code
let sidebar = document.querySelector("#sidebar");
document.querySelector("#sidebarBtn").addEventListener("click", () => {
  sidebar.style.right = 0 + "%";
});
document.querySelector("#closeSidebar").addEventListener("click", () => {
  sidebar.style.right = -100 + "%";
});
// home Animation
let tl = gsap.timeline();
tl.from(".logo img,.nav-item ", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.2,
});
tl.from("#home-text h1,#home-text button,#home-image", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
});


// about section
/*gsap.from(".about-container>.heading",{
  y:-40,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".about-container",
    // scroller:"body",
    markers:{
      startColor:"purple",
      endColor:"fuchsia",
      fontSize:"3rem"
    },
    start:"top 60%",
    end:"top 30%"
  
  }
})




gsap.from(".educ-contain", {
  x: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".educ-contain",
    scroller: "body",
    start: "top 85%",
    end: "top -30%",
    markers:true,
    toggleActions: "restart reverse restart reverse",
  },
});
gsap.from("#contact-form", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".educ-contain",
    scroller: "body",
    start: "top 85%",
    end: "top -30%",
    markers:true,
    toggleActions: "restart reverse restart reverse",
  },
});

gsap.form("#contact-form #email", {
  y: 800,
  backgroundColor:red,
opacity: 0,
duration: 0.8,
stagger: 0.6,
scrollTrigger:{
  trigger:"#contact-form",
  scroller:"body",
  markers:true,
  start:"top 40%",
  end:" top 20%"

},
});

// let str = "Gulam Samdani";
// let index_count = 0;
// function typing_animation() {
// if (str.length + 1 == index_count) {
//   clearInterval(typing_animation);
// } else {
//   let hero_name = "";
//   hero_name = str.slice(0, index_count);
//   document.querySelector("#name").innerText = hero_name + "|";
//   index_count++;
// }
// }
// setInterval(typing_animation, 400);*/
