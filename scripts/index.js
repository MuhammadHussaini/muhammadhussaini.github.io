let revealOn = true
window.onload = () => {
    document.querySelector("#preloader").style.display = 'none'
}

let s = ScrollReveal()
s.reveal(".p-wrapper .starbg", { scale: '1.2', duration: 1000 })
s.reveal(".p-wrapper .mountains", { distance: '100%', origin: 'bottom', duration: 1500, delay: 700 })
s.reveal(".p-wrapper .h2", { distance: '200px', origin: 'top', duration: 1000, delay: 1700 })
s.reveal(".p-wrapper .h1", { distance: '200px', origin: 'bottom', duration: 1000, delay: 2100 })
s.reveal("header", { delay: 2500 })
s.reveal(".name", { origin: 'left', distance: '100px', duration: 1000, delay: 2500 })
s.reveal("nav", { origin: 'top', distance: '100px', duration: 1000, delay: 2500 })
s.reveal(".left-1", {origin: 'left', distance: '50%', duration: 1000, delay: 500})
s.reveal(".right-1 h1", {origin: 'top', distance: '50px', duration: 1000, delay: 800})
s.reveal(".right-1 a", {origin: 'bottom', distance: '50px', duration: 1000, delay: 800})