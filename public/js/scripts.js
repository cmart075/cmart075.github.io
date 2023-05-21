const skillsWrap = document.querySelector(".skills");
const skillsBars = document.querySelectorAll(".skill-level");
const footerInput = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

/**-----------------Fixed Navbar when scroll-------------------- */

document.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    const navbarHeight = 100;
    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );
    if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
    else navbar.classList.remove("fixed-top");
});


/**-----------------Hamburger Menu----------------------------- */
function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
        document.body.classList.add("stop-scrolling");
    } else {
        closeMenu();
    }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));


const swiper = new Swiper(".swiper", {
    speed: 1100,
    slidesPerView: 1,
    // loop: true,
    autoplay: {
        delay: 5000,

    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})


/*-------------------------------------------------------------------------------------- */
/**
 * Animation for skill bar and records number
 */


function checkScroll(skillsBoundary) {
    // returns a DOMRect object providing information about 
    // the size of an element and its position relative to the viewport.
    let rect = skillsBoundary.getBoundingClientRect();
    if (window.innerHeight >= rect.top + skillsBoundary.offsetHeight) {
        return true;
    }
    return false;
}


const skillsAnimation = () => {
    if (!checkScroll(skillsWrap)) {
        skillsBars.forEach(skill => skill.style.width = 0);
        return;
    };

    skillsBars.forEach(skill => skill.style.width = skill.dataset.progress);
}


window.addEventListener("scroll", () => {
    skillsAnimation();
})

/**-------------------------------------------------------------------------------------- */



/** Reference: https://codepen.io/josephwong2004/pen/ExgoKde?editors=1010 */

const carouselText = { text: "Christian Martinez" }

$(document).ready(async function () {
    carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 150) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}

async function carousel(carouselList, eleRef) {
    await typeSentence(carouselList.text, eleRef);
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

/**---------------------------------------------------------------------------------------- */


footerInput.addEventListener("focus", () => {
    footerInput.classList.add("focus");
});

footerInput.addEventListener("blur", () => {
    if (footerInput.value != "") return;
    footerInput.classList.remove("focus");
});