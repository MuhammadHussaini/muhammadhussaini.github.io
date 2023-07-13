window.onload = function () {
    document.getElementById("preloader").style.display = "none";
}

ScrollReveal().reveal('header', {delay: 200})
ScrollReveal().reveal('nav', { mobile: false, scale: .85, delay: 250 })
ScrollReveal().reveal('.container-main', { delay: 300 })
ScrollReveal().reveal('.big-text', { distance: '100%', origin: "left", opacity: null, delay: 400 })
ScrollReveal().reveal('.my-image', { distance: '100%', origin: "right", delay: 500 })
ScrollReveal().reveal('.card', { distance: '200%', origin: "bottom", delay: 500 })
ScrollReveal().reveal('.card .bi', { distance: '200%', origin: "bottom", delay: 550 })
ScrollReveal().reveal('.card-title', { distance: '200%', origin: "bottom", delay: 550 })
ScrollReveal().reveal('.card-desc', { distance: '200%', origin: "bottom", delay: 600 })
ScrollReveal().reveal('.card a', { distance: '200%', origin: "bottom", delay: 600 })
ScrollReveal().reveal('footer', { origin: "bottom"})
ScrollReveal().reveal('footer .text', { origin: "left", delay: 100, distance: '100%'})
ScrollReveal().reveal('footer .socials', { origin: "right", delay: 100, distance: '100%'})



function toggleMenu() {
    document.querySelector(".hamburger").classList.toggle("opened");
    document.querySelector("nav").classList.toggle("slided");
}

function toggleMode() {
    document.querySelector('body').classList.toggle("light")
    document.querySelector('header').classList.toggle("light");
    document.querySelector('.container-main').classList.toggle("light");
    document.querySelector('.big-text').classList.toggle("light");
    document.querySelector('.cards').classList.toggle("light");
    document.querySelector('footer').classList.toggle("light");
}