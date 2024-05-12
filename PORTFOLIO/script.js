gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


let x = 1;
let text = document.querySelector("#txt");
let upmotion= () => {setInterval(()=>{

    if(x%3 === 0) {
        text.innerHTML = "developer";
    }else if(x%3 === 1) {
        text.innerHTML = "designer";
    }else {
        text.innerHTML = "enthusiast";
    }
    gsap.from(text, {
        duration: 1,
        opacity: 1,
        y: 100
    })
    x++;
},2000)

}

let tl = gsap.timeline();

function page1() {
    tl.from("nav h2, nav li",{
        y:-50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.3
    })
    
    tl.from(".hero-part1 h1,.hero-part1 h2,.hero-part1 p",{
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3
    })
    
    tl.from(".hero-part2 img",{
        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: 0.3
    })
}
function page2() {
    gsap.from("#page2 h2", {
        opacity: 0,
        y: -50,
        scrollTrigger: {
            trigger: "#page2 p",
            scroller:"#main",
            start:"top 0%",
            end:"top -100%",
            scrub:1
        }
    })
    
    gsap.from("#page2 .right", {
        opacity: 0,
        duration: 0.5,
        x: -100,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#page2 .skills",
            scroller:"#main",
            start:"top 0%",
            end:"top -100%",
            scrub:1
        }
    })
    
    gsap.from("#page2 .left", {
        opacity: 0,
        duration: 0.5,
        x: 100,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#page2 .left",
            scroller:"#main",
            start:"top 0%",
            end:"top -100%",
            scrub:1
        }
    })
    
    gsap.from("#page2 .bottom-right", {
        opacity: 0,
        duration: 0.5,
        x: -100,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#page2 .bottom-right",
            scroller:"#main",
            start:"top 0%",
            end:"top -100%",
            scrub:1
        }
    })
}

function clickproject() {
    let info = [
        {
            id: 0,
            project_title : "edu hub",
            img: "./edu.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam aliquam ab obcaecati aspernatur asperiores labore? Delectus nesciunt dolore fugiat, obcaecati atque illum nostrum. Sit dolorem deserunt laborum eum dolores."
        }, 
        {
            id: 1,
            project_title : "obys clone",
            img: "./obys-clone.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam aliquam ab obcaecati aspernatur asperiores labore? Delectus nesciunt dolore fugiat, obcaecati atque illum nostrum. Sit dolorem deserunt laborum eum dolores."
        },
        {
            id: 2,
            project_title : "edu hub",
            img: "./edu.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam aliquam ab obcaecati aspernatur asperiores labore? Delectus nesciunt dolore fugiat, obcaecati atque illum nostrum. Sit dolorem deserunt laborum eum dolores."
        },{
            id: 3,
            project_title : "edu hub",
            img: "./edu.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam aliquam ab obcaecati aspernatur asperiores labore? Delectus nesciunt dolore fugiat, obcaecati atque illum nostrum. Sit dolorem deserunt laborum eum dolores."
        },
        {
            id: 4,
            project_title : "apple clone",
            img: "./apple-clone.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam aliquam ab obcaecati aspernatur asperiores labore? Delectus nesciunt dolore fugiat, obcaecati atque illum nostrum. Sit dolorem deserunt laborum eum dolores."
        },
        {
            id: 5,
            project_title : "html canvas",
            img: "./galectic.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam aliquam ab obcaecati aspernatur asperiores labore? Delectus nesciunt dolore fugiat, obcaecati atque illum nostrum. Sit dolorem deserunt laborum eum dolores."
        },
        {
            id: 6,
            project_title : "primer clone",
            img: "./primier.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam aliquam ab obcaecati aspernatur asperiores labore? Delectus nesciunt dolore fugiat, obcaecati atque illum nostrum. Sit dolorem deserunt laborum eum dolores."
        },
        {
            id: 7,
            project_title : "vid craft",
            img: "./vid-craft.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam aliquam ab obcaecati aspernatur asperiores labore? Delectus nesciunt dolore fugiat, obcaecati atque illum nostrum. Sit dolorem deserunt laborum eum dolores."
        }
    ]
    
    let inproject = document.querySelector(".inproject");
    let project = document.querySelectorAll(".col-box");
    let close = document.querySelector(".close");
    
    
    
    let wrapper = gsap.timeline();
    
    
    wrapper.from(".inproject .wrapper .side1 h1,.inproject .wrapper .side1 img", {
        opacity: 0,
        x: 100,
        duration: 0.5,
        stagger: 0.3
    })
    wrapper.from(".inproject .wrapper .side2 h5,.inproject .wrapper .side2 button, .inproject .close", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.3
    })
    wrapper.pause();
    project.forEach((e,idx)=> {
        e.addEventListener("click", () => {
            let title = document.querySelector("#project-title");
            let imglink = document.querySelector("#wrapper-img");
            title.innerHTML = info[idx].project_title;
            imglink.src = info[idx].img;
            inproject.style.zIndex = 10;
            wrapper.play();
        })
    })
    
    close.addEventListener("click", () => {

        wrapper.reverse();
        setTimeout(() => {
            inproject.style.zIndex = 1;
        },2500)
    })
    
}

let initial = `M 10 50 Q 600 500 1200 500`

let final = `M 10 50 Q 600 50 1200 50`

let string = document.querySelector('.line')

string.addEventListener("mousemove", (e) => {
    initial = `M 10 50 Q ${e.x} ${e.y} 1200 50`
    gsap.to("svg path", {
        attr: {d: initial},
        duration: 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", (e) => {
    gsap.to("svg path", {
        attr: {d: final},
        duration: 0.5,
        ease: "elastic.out(1,0.2)"
    })
})

function textScroll() {
    gsap.to(".textScroll h1", {
        transform: "translateX(-60%)",
        scrollTrigger: {
            trigger: ".textScroll",
            scroller:"#main",
            start:"top 0%",
            end:"top -100%",
            scrub:1,
            pin: true
        }
    })
}


window.addEventListener("wheel", (e)=> {
    if(e.deltaY > 0 ){
        gsap.to(".marquee", {
            transform: "translateX(-200%)",
            repeat: -1,
            duration: 4,
            ease: "none"
        })
        gsap.to(".marquee i", {
            rotate: 0
        })
    }
    else {
        gsap.to(".marquee i", {
            rotate: 180
        })
        gsap.to(".marquee", {
            transform: "translateX(0)",
            repeat: -1,
            duration: 4,
            ease: "none"
        })
        
    }
})

let allH1 = document.querySelectorAll("#page2 h3");

function page2text() {
    allH1.forEach((e) => {
        var clutter = ""
        let text = e.textContent;
        let splittedText = text.split("");
        splittedText.forEach((c)=> {
            clutter += `<span>${c}</span>`
        })
        e.innerHTML = clutter;
    })
    
    gsap.to("#page2 h3 span", {
        color: "#B5C18E",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#page2 h3",
            scroller:"#main",
            start:"top -60%",
            end:"top -90%",
            scrub:2
        }
    })
}

function page4text() {
        var clutter = ""
        let text = document.querySelector("#page4text");
        let content = text.textContent;
        let splittedText = content.split("");
        splittedText.forEach((c)=> {
            clutter += `<span>${c}</span>`;
        })
        text.innerHTML = clutter;
        console.log(text);
    
    gsap.to("#page4 h6 span", {
        color: "#FFD0D0",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#page4 h6",
            scroller:"#main",
            start:"top 0%",
            end:"top -50%",
            scrub:2
        }
    })
}

page1()
page2()
page2text()
page4text()
upmotion()
textScroll()
clickproject()


