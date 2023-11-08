let revealOn = true
window.onload = () => {
    document.querySelector("#preloader").style.display = 'none';
    scrollReveal()
}

function scrollReveal() {
    let s = ScrollReveal()
    s.reveal(".left", { origin: 'left', distance: '50%', duration: 1500 })
    s.reveal(".right", { origin: 'right', distance: '50%', duration: 1500 })
    s.reveal("header", { duration: 2500, afterReveal: () => { document.querySelector('header').style.transition = '0.7s' } })
    s.reveal(".left-1", { origin: 'left', distance: '50%', duration: 1500 })
    s.reveal(".right-1", { origin: 'right', distance: '50%', duration: 1500 })
    s.reveal(".left-2", { origin: 'left', distance: '50%', duration: 1500 })
    s.reveal(".right-2", { origin: 'right', distance: '50%', duration: 1500 })
    s.reveal(".bar", { delay: 1200 })
}

document.querySelector('.controls-1').addEventListener('click', () => {
    document.querySelector('.view-fb').style.display = 'flex'
    document.querySelector('.view-fb').style.animation = 'reveal .5s 1 0s forwards ease-in-out'
    document.querySelector('main').style.animation = 'blur 1s 1 0s forwards linear'
    document.querySelector('header').style.animation = 'blur 1s 1 0s forwards linear'
})

document.querySelector('.cancel').addEventListener('click', () => {
    document.querySelector('.view-fb').style.animation = 'unreveal .5s 1 0s forwards ease-in-out'
    document.querySelector('.view-fb').style.display = 'none'
    document.querySelector('main').style.animation = 'unblur .5s 1 0s forwards linear'
    document.querySelector('header').style.animation = 'unblur .5s 1 0s forwards linear'
})