// ===============================
// Portfolio Website JavaScript
// ===============================

// Active Navigation Link
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// ===============================
// Typing Animation
// ===============================

const typingElement = document.querySelector(".hero-left h3");

const words = [
    "Software Developer",
    "C++ Programmer",
    "Full Stack Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length)
            wordIndex = 0;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Scroll Reveal Animation
// ===============================

const cards = document.querySelectorAll(".card, .project-card");

function revealCards() {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealCards);

revealCards();


// ===============================
// Scroll To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300)
        topButton.style.display = "block";
    else
        topButton.style.display = "none";

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


// ===============================
// Smooth Fade In Hero
// ===============================

window.addEventListener("load", () => {

    document.querySelector(".hero").style.opacity = "1";
    document.querySelector(".hero").style.transform = "translateY(0)";

});

document.querySelector(".hero").style.opacity = "0";
document.querySelector(".hero").style.transform = "translateY(30px)";
document.querySelector(".hero").style.transition = "1s";


// ===============================
// Footer Year
// ===============================

const footerText = document.querySelector("footer p");

if (footerText) {

    const year = new Date().getFullYear();

    footerText.innerHTML =
        `© ${year} Dhruv Mistri. All Rights Reserved.`;

}