const backButton = document.querySelector('.back-button');
const removeButton = document.querySelector('.remove-button');
const favoritesIcon = document.querySelector('.fav-icon');
const prijava = document.querySelector('.prijava');
const productPage = document.querySelector('.product-page');
const fav = document.querySelector('.fav');
const backButtonImgs = document.querySelectorAll('.back-button-img');

function returnBack() {
    window.history.back()
    return false;
}

function toggle() {
    favoritesIcon.classList.toggle('opacity-down');
    console.log(favoritesIcon.classList);
}

function popup() {
    prijava.classList.toggle('prijava-disabled')
    prijava.classList.toggle('prijava-active')
    // productPage.classList.add('dark-background');
    document.querySelector('.product-main-img').classList.toggle('dark-background')
    fav.classList.toggle('dark-background');
}

removeButton.addEventListener('click', popup);
backButton.addEventListener('click', returnBack);

console.log(backButtonImgs)