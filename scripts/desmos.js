window.onload = function () {
    document.getElementById("preloader").style.display = "none";
}

ScrollReveal().reveal('header', { mobile: false, delay: 200 })
ScrollReveal().reveal('nav', { mobile: false, scale: .85, delay: 250 })
ScrollReveal().reveal('.main', { delay: 300 })
ScrollReveal().reveal('.creations', { delay: 300 })
ScrollReveal().reveal('.creation-card', { scale: .70, delay: 350 })
ScrollReveal().reveal('.panel', { scale: .70, delay: 300 })
ScrollReveal().reveal('footer', { origin: "bottom" })
ScrollReveal().reveal('footer .text', { origin: "left", delay: 100, distance: '100%' })
ScrollReveal().reveal('footer .socials', { mobile: false, origin: "right", delay: 100, distance: '100%' })



function toggleMenu() {
    document.querySelector(".hamburger").classList.toggle("opened");
    document.querySelector("nav").classList.toggle("slided");
}

function toggleMode() {
    document.querySelector('body').classList.toggle("light")
    document.querySelector('header').classList.toggle("light");
    for (let i = 0; i < document.getElementsByClassName('main').length; i++) {
        document.getElementsByClassName('main')[i].classList.toggle("light")
    }
    for (let i = 0; i < document.getElementsByClassName('panel').length; i++) {
        document.getElementsByClassName('panel')[i].classList.toggle("light")
    }
    document.querySelector('footer').classList.toggle("light");
}