const mobileCards = document.querySelectorAll('.cards-mobile');


function openCard() {
    location.href = "product.html"
    console.log("123123")
}

mobileCards.forEach(card => card.addEventListener('click', openCard));