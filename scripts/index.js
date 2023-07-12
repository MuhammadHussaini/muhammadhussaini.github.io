function toggleMenu() {
    document.querySelector(".hamburger").classList.toggle("opened");
    document.querySelector("nav").classList.toggle("slided");
}

function toggleMode() {
    document.querySelector('header').classList.toggle("light")
    document.querySelector('.container-main').classList.toggle("light");
    document.querySelector('.big-text').classList.toggle("light");

}