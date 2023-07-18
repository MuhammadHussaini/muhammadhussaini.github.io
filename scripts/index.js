// Preloader
window.onload = () => {
    document.querySelector("#preloader").style.display = 'none';
}


// ScrollReveal() reveal
let revealOngoing = true;

function revealComplete() {
    revealOngoing = false
}

const parallaxElements = document.querySelectorAll(".parallax");
let xValue = 0,
    yValue = 0;

// Parallax Effect
window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - (window.innerWidth / 2);
    yValue = e.clientY - (window.innerHeight / 2);
    update(e);
});

function update(e) {
    if (revealOngoing) return;
    parallaxElements.forEach(el => {
        let speedx = el.dataset.speedx
        let speedy = el.dataset.speedy
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).right)) / 50;
        el.style.transition = `0.45s cubic-bezier(.2, .49, .32, .99)`
        el.style.transform = `translateX(${-xValue * speedx}px) translateY(${-yValue * speedy}px) perspective(1000px) translateZ(${(-zValue)}px)`
    });
    document.querySelector(".name").style.transform = `skewY(${xValue / 270}deg) skewX(${-yValue / 270}deg)`
}


// ScrollReveal