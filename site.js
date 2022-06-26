const menuLinks = document.querySelectorAll("a");
const header = document.querySelector("header");
const menuButton = document.querySelector(".menu-button")
const menu = document.querySelector('.menu')



menuButton.addEventListener("click", function () {
    menu.classList.toggle("disabledMenu");
    menu.classList.toggle("enabledMenu");

})

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        header.classList.remove("showHeader");
        header.classList.add("hideHeader");
    } else {
        header.classList.add("showHeader");
        header.classList.remove("hideHeader");
    }
    prevScrollpos = currentScrollPos;
}

const allLinks = document.querySelectorAll(".link");
allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");


        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("menuLinks")) {
            menu.classList.toggle("enabledMenu");
            menu.classList.toggle("disabledMenu");
        }
    });
});


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}  // copyed code //



const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        // when to slide - half way trhrough the image
        const slideInAt = (window.scrollY + window.innerHeight) -
            sliderImage.height / 2;

        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
        } else {
            sliderImage.classList.remove('active')
        }
    })
}


window.addEventListener('scroll', debounce(checkSlide))