function locomotive(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        inertia: .6,
        getDirection: true,
        mobile: {
            breakpoint: 0,  
            smooth: true,
            inertia: .9,
            getDirection: true,
        },
        tablet: {
            breakpoint: 0,  
            smooth: true,
            inertia: 0.9,
            getDirection: true,
        },
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, true) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
locomotive();

let width = window.innerWidth;



gsap.from("#matter-container canvas",{
    duration: 3,
    delay: 1.5,
    // rotateX: -100,
    opacity: 0,
    stagger: .2,
    ease: "elastic.out(1, 0.7)",
})
gsap.from("#matter-container>p",{
    duration: 3,
    delay: 2.5,
    rotateX: -100,
    opacity: 0,
    ease: "elastic.out(1, 0.7)",
})
gsap.from("#matter-container>#infosys>img",{
    duration: 5,
    delay: 3,
    rotateX: -10,
    opacity: 0,
    scale: .8,
    stagger: .2,
    ease: "elastic.out(1, 0.7)",
})
gsap.from("#matter-container>#infosys>button",{
    duration: 5,
    delay: 3,
    rotateX: -10,
    opacity: 0,
    stagger: .2,
    ease: "elastic.out(1, 0.7)",
})



if(width>550){
    Shery.mouseFollower({
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        skew: true,
        duration: 1,
    });
    
    Shery.makeMagnet(".hero>.right>.text>a", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}

function textAnime(){
    Shery.textAnimate(".hero>.left>.bottom>.b-cont>h4", {
        style: 1,
        y: 1,
        delay: 0.05,
        duration: .2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.5,
      });
    Shery.textAnimate(".hero>.left>.top", {
        style: 1,
        y: 1,
        delay: 0.05,
        duration: .2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.5,
      });
    Shery.textAnimate(".hero>.left>.bottom>.b-cont>span", {
        style: 1,
        y: 1,
        delay: 0.05,
        duration: .2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.5,
      });
}
let flag = true;


function menu(){
    let menu = document.getElementById("menu");
    let line = document.getElementById("line");
    let line1 = document.getElementById("line1");


    if(flag == true){
        if(width>700){
            menu.style.right = "-150%";
        }
        if(width<700){
            menu.style.right = "-30%";
        }
        line.style.stroke = "#fff";
        line1.style.stroke = "#fff";
        flag = false;
        gsap.to("nav>.right>.menu a, nav>.right>.menu>button",{
            opacity: 1,
            duration: 1.5,
            stagger: .2,
            delay: .7,
            rotateX: 0,
            // x: 50,
            y: -20,
            // scale: 2,
            ease: "power2"
        })
    }
    else{
        menu.style.right = "-2500%";
        line.style.stroke = "#000";
        line1.style.stroke = "#000";
        flag = true;
        gsap.to("nav>.right>.menu a, nav>.right>.menu>button",{
            opacity: 0,
            duration: 1, 
            stagger: .2,
            rotateX: 100,
            // x: 50,
            y: 20,
            delay: .2,
            // scale: 2,
            ease: "power2"
        })
    }
}


let tl = gsap.timeline();



function heroAnimation(){
    tl.from("nav>.logo>img, nav>.right>.hamburger",{
        opacity: 0,
        duration: 2, 
        // y: -50,
        delay: .2,
        stagger: .3,
        scale: 0,
        ease: "expo.out"
    },"hero")
    // .from("nav>.right a, nav>.right>button",{
    //     opacity: 0,
    //     duration: 2, 
    //     stagger: .2,
    //     // x: 50,
    //     y: -50,
    //     delay: .2,
    //     // scale: 2,
    //     ease: "elastic.out(1, 0.8)"
    // },"hero")
    .from(".hero>video",{
        opacity: 0,
        duration: 2, 
        stagger: .2,
        // x: 50,
        y: -50,
        scale: 1.5,
        ease: "elastic.out(1, 0.6)",
        delay: 1.2
    },"hero")
    .from(".hero>.left>.top",{
        opacity: 0,
        duration: 1, 
        stagger: .2,
        delay: .8,
        // x: 50,
        y: 50,
    },"hero")
    .from(".hero>.left>.bottom>h4",{
        opacity: 0,
        onStart: ()=> textAnime(),
        duration: 1, 
        delay: 1.4
    },"hero")
    .from(".hero>.left>.bottom>h1",{
        opacity: 0,
        duration: 2, 
        stagger: .2,
        rotateX: 100,
        delay: 2,
        scale: .9,
        y: 15,
        ease: "elastic.out(1, 0.6)"
    },"hero")
    .from(".hero>.left>.bottom>a",{
        opacity: 0,
        delay: 1,
        duration: 1, 
        // x: 50,
        scale: 0.5,
        ease: "elastic.out(1, 0.8)",
        delay: 2.8
    },"hero")
    .from(".hero>.right>.text",{
        opacity: 0,
        duration: 2, 
        // x: 50,
        stagger: .3,
        y: -50,
        ease: "elastic.out(1, 0.8)",
        delay: 2.8
    },"hero")
}

heroAnimation();


function section2 () {
  const tiltContainer = document.querySelector('.tilt-container');
  const tiltElement = document.querySelector('.tilt-element');

  tiltContainer.addEventListener('mousemove', (e) => {
    const width = tiltContainer.offsetWidth;
    const height = tiltContainer.offsetHeight;
    const centerX = tiltContainer.offsetLeft + width / 2;
    const centerY = tiltContainer.offsetTop + height / 2;

    const percentX = (e.pageX - centerX) / (width / 2);
    const percentY = -(e.pageY - centerY) / (height / 2);

    const rotateX = percentY * 15; // Adjust the multiplier for effect intensity
    const rotateY = percentX * 15;

    tiltElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltContainer.addEventListener('mouseleave', () => {
    tiltElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

section2 ();

gsap.from(".section3>.left p",{
  scrollTrigger: {
      scroller: ".main",
      trigger: ".section3>.left p",
      start: "top 75%",
      end: "bottom bottom",
      // markers: true,
  },

  opacity: 0,
  // scale: 0.5,
  stagger: .3,
  y: 50,
  duration: 1.5,
  ease: "elastic.out(1, 0.8)"
})

gsap.from(".section3>.left>button",{
  scrollTrigger: {
      scroller: ".main",
      trigger: ".section3>.left>p",
      start: "top 65%",
      end: "bottom bottom",
      // markers: true,
  },

  opacity: 0,
  scale: 0.5,
  y: 50,
  duration: 1.5,
  ease: "elastic.out(1, 0.8)"
})

function section3TextAnime(){
  Shery.textAnimate(".section3>.right>h4", {
      style: 1,
      y: 1,
      delay: 0.1,
      duration: .2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.5,
    });
}

gsap.from(".section3>.right>h4",{
  scrollTrigger: {
      scroller: ".main",
      trigger: ".section3>.right>h4",
      start: "top 75%",
      end: "bottom bottom",
      // markers: true,
  },

  opacity: 0,
  onStart: ()=> section3TextAnime(),
  // y: 50,
  duration: 1.5,
  ease: "elastic.out(1, 0.8)"
})

gsap.from(".section3>.right>h1",{
  scrollTrigger: {
      scroller: ".main",
      trigger: ".section3>.right>h1",
      start: "top 75%",
      end: "bottom bottom",
      // markers: true,
  },

  opacity: 0,
  y: 50,
  delay: .4,
  duration: 1.5,
  ease: "elastic.out(1, 0.8)"
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1460: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
   
   
  },
});

var swiper = new Swiper(".solution", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".caseStudy", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
   
  },
});

var swiper = new Swiper(".reviw", {
  slidesPerView: "auto",
  loop:true,
  centeredSliders:true,
  speed: 7000,
  allowTouchMove: false,
  disableOnInteraction:false,
  spaceBetween: 10,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".fivee", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
   
  },
});

gsap.to(".section10",{
  scrollTrigger: {
      scroller: ".main",
      trigger: ".section10",
      start: "top 0%",
      end: "+=100%",
      // markers: true,
      pin: true,
      pinSpacing: false, 
      scrub: 1
  },

  scale: 1.3,
})



gsap.to(".section11>.one",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section11>.one",
        start: "top 0%",
        end: "+=400%",
        // markers: true,
        pin: true,
        pinSpacing: false, 
        scrub: 1
    },

})

gsap.to(".section11>.two",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section11>.two",
        start: "top 0%",
        end: "+=300%",
        // markers: true,
        pin: true,
        pinSpacing: false, 
    },

})
gsap.to(".section11>.three",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section11>.three",
        start: "top 0%",
        end: "+=200%",
        // markers: true,
        pin: true,
        pinSpacing: false, 
    },

})
gsap.to(".section11>.four",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section11>.four",
        start: "top 0%",
        end: "+=100%",
        // markers: true,
        pin: true,
        pinSpacing: false, 
    },

})




const buttons = document.querySelectorAll(".line2>button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    buttons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
  });
});


gsap.from(".section12>.top h1",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section12>.top h1",
        start: "top 80%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    delay: .2,
    y: 50,
    duration: 3,
    ease: "elastic.out(1, 0.7)"
})


gsap.from(".section12>.mid span, .section12>.mid input, .section12>.mid>.line2 button, .section12>.mid>.line5>button",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section12>.mid ",
        start: "top 80%",
        end: "bottom bottom",
        // markers: true,
    },

    opacity: 0,
    delay: .1,
    rotateX: 100,
    // y: 50,
    stagger: .1,
    duration: 2,
    ease: "elastic.out(1, 0.7)"
})

