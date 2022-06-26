const firstRowCards = document.querySelectorAll('.first-row-card');
const secondRowCards = document.querySelectorAll('.second-row-card');
const firstArrowButton = document.querySelector('.circle1');
const secondArrowButton = document.querySelector('.circle2');
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const mobileCards = document.querySelectorAll('.cards-mobile');



function scroll() {
    firstRowCards.forEach(card => {
        if (card.classList.contains('scroll-left')) {
            card.classList.add('scroll-right');
            card.classList.remove('scroll-left');
            arrow1.classList.remove('arrow-rotate');
        } else {
            card.classList.add('scroll-left');
            card.classList.remove('scroll-right');
            arrow1.classList.add('arrow-rotate');
        }
    })
}
function scroll2() {
    secondRowCards.forEach(card => {
        if (card.classList.contains('scroll-left')) {
            card.classList.add('scroll-right');
            card.classList.remove('scroll-left');
            arrow2.classList.remove('arrow-rotate');
        } else {
            card.classList.add('scroll-left');
            card.classList.remove('scroll-right');
            arrow2.classList.add('arrow-rotate');
        }
    })
}

function openCard() {
    location.href = "product.html";
}


mobileCards.forEach(card => card.addEventListener('click', openCard));

firstArrowButton.addEventListener('click', scroll);
arrow1.addEventListener('click', scroll);

secondArrowButton.addEventListener('click', scroll2);
arrow2.addEventListener('click', scroll2);


