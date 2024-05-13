// var tl = gsap.timeline();

// tl.from("#nav img", {
//     y: -55,
//     delay: 0.5,
//     duration: 1,
// })

// tl.from("#nav #nav-center a", {
//     y: 8,
//     opacity: 0,
//     delay: 0.2,
//     duration: 0.5,
//     stagger: 0.1,
// })

// tl.from("#nav i", {
//     y: -8,
//     opacity: 0,
//     delay: 0.1,
//     duration: 0.5,
// })

// tl.from("#center .swiper", {
//     y: 20,
//     opacity: 0,
//     delay: 0.5,
//     duration: 1,
// })

// tl.from("#under-center", {
//     y: 5,
//     opacity: 0,
//     delay: 0.2,
//     duration: 0.3,
// })

// tl.from(".small img", {
//     y: 10,
//     opacity: 0,
//     duration: 1,
//     delay: 0.3,
//     stagger: 0.3,
// })

// tl.from("#hero-para #hero-h1 h1", {
//     x: -100,
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.2,
//     stagger: 0.3,
// })

// tl.from("#hero-para .para p", {
//     x: 100,
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.2,
//     stagger: 0.3,
// })

// tl.from("#hero-para .para h5", {
//     y: 5,
//     opacity: 0,
//     duration: 0.3,
//     delay: 0.2,
// })

// tl.from("#types .photo img", {
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     delay: 0.1,
//     stagger: 0.5,
// })

// tl.from("#types .photo .text", {
//     y: 2,
//     opacity: 0,
//     duration: 1,
//     delay: 0.1,
//     stagger: 0.1,
// });

// gsap.set("#some-info", { borderTop: "1px solid transparent" });

// tl.to("#some-info", {
//     borderTopColor: "#111",
//     duration: 0.5
// });

// tl.from("#some-info p", {
//     x: 100,
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.2,
// })

// tl.from("#some-info .btn", {
//     y: 2,
//     opacity: 0,
//     duration: 1,
//     delay: 0.1,
//     stagger: 0.1,
// })

// tl.from("#some-info .sh5 h5", {
//     x: 50,
//     opacity: 0,
//     duration: 1,
//     delay: 0.1,
//     stagger: 0.1,
// })

// tl.from("#r1-side .rh, #r1-side .rh1", {
//     opacity: 0,
//     y: 20,
//     duration: 0.5,
//     stagger: 0.1
// });

// // Animation for the center logo
// tl.from("#center img", {
//     opacity: 0,
//     scale: 0.5,
//     duration: 0.5,
//     ease: "back.out(1.7)"
// });

// // Animation for the left-side elements
// tl.from("#l1-side .rh, #l1-side .rh1", {
//     opacity: 0,
//     y: 20,
//     duration: 0.5,
//     stagger: 0.1
// }, "-=0.3"); // Offset the animation of left-side elements to start slightly after the center logo animation

// var menu = document.querySelector("#nav i");
// var cross = document.querySelector("#full i");

// var tl = gsap.timeline();

// tl.to("#full", {
//     top: 0,
//     duration: 0.8,
// });

// tl.from("#full h4", {
//     x: 80,
//     duration: 1,
//     stagger: 0.15,
//     opacity: 0,
// })

// tl.from("#full i", {
//     opacity: 0,
// })

// tl.pause();

// menu.addEventListener("click", () => {
//     tl.play();
// })

// cross.addEventListener("click", ()=> {
//     tl.reverse();
// })

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

const tl = gsap.timeline();

tl.from("#nav img", { 
  y: -55, 
  duration: 1, 
  opacity: 0, 
  delay: 0.5 
});

tl.from("#nav #nav-center a", {
  y: 8,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  delay: 0.2,
});

tl.from("#nav i", { 
  y: -8, 
  opacity: 0, 
  duration: 0.5, 
  delay: 0.1 
});

tl.from("#center .swiper", { 
  y: 20, 
  opacity: 0, 
  duration: 1, 
  delay: 0.5 
});

tl.from("#under-center", { 
  y: 5, 
  opacity: 0, 
  duration: 0.3, 
  delay: 0.2 
});

tl.from(".small img", {
  y: 10,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  delay: 0.3,
});

tl.from("#hero-para #hero-h1 h1, #hero-para .para p", {
  x: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
  delay: 0.2,
});

tl.from("#hero-para .para h5", { 
  y: 5, 
  opacity: 0, 
  duration: 0.3, 
  delay: 0.2 
});

tl.from("#types .photo img", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  delay: 0.1,
});

tl.from("#types .photo .text", {
  y: 2,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  delay: 0.1,
});

tl.set("#some-info", { 
  borderTop: "1px solid transparent" 
})
.to("#some-info", { 
  borderTopColor: "#111", 
  duration: 0.5 
})
.from("#some-info p", { 
  x: 100, 
  opacity: 0, 
  duration: 0.8, 
  delay: 0.2 
})
.from("#some-info .btn", {
  y: 2,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  delay: 0.1,
})
.from("#some-info .sh5 h5", {
  x: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  delay: 0.1,
});

tl.from("#footer #r1-side .rh, #footer #r1-side .rh1", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.1,
});

tl.from("#footer #center img", {
  opacity: 0,
  scale: 0.5,
  duration: 0.5,
  ease: "back.out(1.7)",
});

tl.from(
  "#footer #l1-side .rh, #footer #l1-side .rh1",
  { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 },
  "-=0.3"
);

tl.from("#footer-bottom", { 
  opacity: 0, 
  y: 20, 
  duration: 0.5 
});

const menuTl = gsap.timeline({ 
  paused: true 
});

menuTl
  .to("#full", { top: 0, duration: 0.8 })
  .from("#full h4", { x: 80, opacity: 0, duration: 1, stagger: 0.15 })
  .from("#full i", { opacity: 0 });

document.querySelector("#nav i").addEventListener("click", () => menuTl.play());
document.querySelector("#full i").addEventListener("click", () => menuTl.reverse());

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: { 
    delay: 2500, 
    disableOnInteraction: false 
  },
  pagination: { 
    el: ".swiper-pagination", 
    clickable: true 
  },
  navigation: { 
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev" 
  },
});

