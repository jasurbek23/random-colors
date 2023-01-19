

const items = document.querySelectorAll('.item');
const card = document.querySelectorAll('.card');
const card2 = document.querySelectorAll('.card_2')


function randColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    console.log(r);
    return `rgb(${r}, ${g}, ${b})`
}

function ranDeg() {
    return Math.floor(Math.random() * 361)
}


for (let i = 0; i < items.length; i++) {
    items[i].style.background = items[i].getAttribute('data-bg');

    items[i].addEventListener('click', () => {
        body.style.background = items[i].getAttribute('data-bg');
    })
}

for (let i = 0; i < card.length; i++) {
    // card - addEventListener

    card2[i].addEventListener('click', () => {
        card2[i].style.background = `linear-gradient(${ranDeg()}deg, ${randColor()}, ${randColor()}, ${randColor()})`
    })
}


for (let index = 0; index < card.length; index++) {

    card[index].addEventListener('click', () => {
        card[index].style.background = `${randColor()}`;
    })
}



