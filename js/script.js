let customScroll = document.querySelector(".scroll")
let BoxElem = document.querySelector(".Box");


function scrollSize() {
    let documentHeight = document.body.clientHeight

    let scrollTop = window.scrollY

    let windowHeight = window.innerHeight

    let scrollPrcent = scrollTop / (documentHeight - windowHeight)
    let scrillPercentRound = Math.round(scrollPrcent * 100)
    customScroll.style.width = `${scrillPercentRound}%`
    BoxElem.style.background = `linear-gradient(to top, red ${scrillPercentRound}%, transparent ${scrillPercentRound}%)`;
}

function goUp() {
    window.scrollTo({top: 0,behavior: 'smooth'});
}

window.addEventListener("scroll" , scrollSize)
BoxElem.addEventListener("click" , goUp)