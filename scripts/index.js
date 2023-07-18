let revealOn = true
window.onload = () => {
    document.querySelector("#preloader").style.display = 'none'
}

let s = ScrollReveal()
s.reveal(".p-wrapper .starbg", { scale: '1.2', duration: 1000 })
s.reveal(".p-wrapper .mountains", { distance: '100%', origin: 'bottom', duration: 1500, delay: 700 })
s.reveal(".p-wrapper .h2", { distance: '200px', origin: 'top', duration: 1000, delay: 1200 })
s.reveal(".p-wrapper .h1", { distance: '200px', origin: 'bottom', duration: 1000, delay: 1700 })
s.reveal("header", { delay: 2000 })
s.reveal(".name", { origin: 'left', distance: '100px', duration: 1000, delay: 2000 })
s.reveal("nav", { origin: 'top', distance: '100px', duration: 1000, delay: 2000 })