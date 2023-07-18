window.onload = () => {
    document.querySelector("#preloader").style.display = 'none';
}

const parallaxElements = document.querySelectorAll(".parallax");
let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) => {
    if (timeline.isActive()) return;

    xValue = e.clientX - (window.innerWidth / 2)
    yValue = e.clientY - (window.innerHeight / 2)

    update(e)
});

function update(e) {
    parallaxElements.forEach(el => {
        let speedx = el.dataset.speedx
        let speedy = el.dataset.speedy
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).right)) / 50;
        el.style.transition = `0.45s cubic-bezier(.2, .49, .32, .99)`
        el.style.transform = `translateX(${-xValue * speedx}px) translateY(${-yValue * speedy}px) perspective(1000px) translateZ(${(-zValue)}px)`
    });
    document.querySelector(".name").style.transform = `skewY(${xValue / 270}deg) skewX(${-yValue / 270}deg)`
}

let timeline = gsap.timeline()

timeline.from(".starbg", {
    top: "-10px",
    duration: 1.5
}, "0").from(".mountains", {
    y: 1000,
    duration: 1.5
}, "0.8").from("header", {
    y: "-60px",
    duration: 1,
    opacity: 0,
    ease: "power1.out"
}, "2").from(".name", {
    opacity: 0,
    y: 200,
    duration: 1.1,
    ease: "power1.out"
}, "2.2").from(".iam", {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power1.out"
}, "2")