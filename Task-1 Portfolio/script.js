/*=========================================================
                PORTFOLIO JAVASCRIPT
                Rudrakshi Dobhal Portfolio
=========================================================*/

"use strict";

/*=========================================================
                DOM ELEMENTS
=========================================================*/

const body = document.body;

const header = document.querySelector(".header");

const themeToggle = document.getElementById("theme-toggle");

const themeIcon = themeToggle.querySelector("i");

const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");

const navLinks = document.querySelectorAll(".navbar a");


/*=========================================================
                DARK MODE
=========================================================*/

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    body.classList.add("dark-theme");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }

    else {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    }

});


/*=========================================================
                MOBILE MENU
=========================================================*/

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    }

    else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/*=========================================================
            CLOSE MENU AFTER CLICKING LINK
=========================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/*=========================================================
            CLOSE MENU WHEN CLICKING OUTSIDE
=========================================================*/

document.addEventListener("click", (event) => {

    const clickedInsideNavbar = navbar.contains(event.target);

    const clickedMenuBtn = menuBtn.contains(event.target);

    if (

        navbar.classList.contains("active") &&

        !clickedInsideNavbar &&

        !clickedMenuBtn

    ) {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/*=========================================================
            RESET MENU ON WINDOW RESIZE
=========================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/*=========================================================
                END OF PART 1
=========================================================*/


/*=========================================================
                TYPING ANIMATION
=========================================================*/

const typingElement = document.getElementById("typing");

const professions = [
    "Software Developer",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Problem Solver",
    "Open to SDE Opportunities"
];

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = professions[professionIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex++);

        if (characterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex--);

        if (characterIndex < 0) {

            deleting = false;

            professionIndex++;

            if (professionIndex >= professions.length) {

                professionIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/*=========================================================
                STICKY HEADER EFFECT
=========================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.padding = "0 8%";
        header.style.height = "70px";

    } else {

        header.style.padding = "0 10%";
        header.style.height = "80px";

    }

});


/*=========================================================
                SCROLL TO TOP BUTTON
=========================================================*/

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================================
                SMOOTH NAVIGATION
=========================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================================
                ACTIVE NAVIGATION LINK
=========================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + currentSection

        ) {

            link.classList.add("active");

        }

    });

});


/*=========================================================
                END OF PART 2
=========================================================*/

/*=========================================================
                SCROLL REVEAL ANIMATION
=========================================================*/

const revealElements = document.querySelectorAll(

    ".section-title, \
    .about-text, \
    .skill, \
    .project-card, \
    .timeline-item, \
    .contact-info, \
    .contact-form"

);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {

        threshold: 0.15,

        rootMargin: "0px 0px -50px 0px"

    }

);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/*=========================================================
                STAGGER PROJECT ANIMATION
=========================================================*/

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.12}s`;

});


/*=========================================================
                STAGGER SKILL ANIMATION
=========================================================*/

const skillCards = document.querySelectorAll(".skill");

skillCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});


/*=========================================================
                TIMELINE ANIMATION
=========================================================*/

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item, index) => {

    item.style.transitionDelay = `${index * 0.15}s`;

});


/*=========================================================
                CONTACT SECTION EFFECT
=========================================================*/

const contactCards = document.querySelectorAll(

    ".contact-info, .contact-form"

);

contactCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.15}s`;

});


/*=========================================================
                HERO ENTRANCE EFFECT
=========================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*=========================================================
                IMAGE PARALLAX EFFECT
=========================================================*/

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const offset = window.scrollY * 0.08;

    heroImage.style.transform = `translateY(${offset}px)`;

});


/*=========================================================
                PERFORMANCE OPTIMIZATION
=========================================================*/

let scrollTimeout;

window.addEventListener("scroll", () => {

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {

        document.body.classList.remove("scrolling");

    }, 120);

    document.body.classList.add("scrolling");

});


/*=========================================================
                PREVENT IMAGE DRAG
=========================================================*/

document.querySelectorAll("img").forEach((image) => {

    image.setAttribute("draggable", "false");

});


/*=========================================================
                END OF PART 3
=========================================================*/

/*=========================================================
                PAGE LOADER
=========================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*=========================================================
                HEADER SHADOW
=========================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.12)";

    }

    else {

        header.style.boxShadow = "";

    }

});


/*=========================================================
                LAZY LOAD IMAGES
=========================================================*/

document.querySelectorAll("img").forEach((image) => {

    image.loading = "lazy";

});


/*=========================================================
                EXTERNAL LINKS SECURITY
=========================================================*/

document.querySelectorAll('a[target="_blank"]').forEach(link => {

    link.setAttribute("rel", "noopener noreferrer");

});


/*=========================================================
                BUTTON CLICK EFFECT
=========================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", () => {

        button.style.pointerEvents = "none";

        setTimeout(() => {

            button.style.pointerEvents = "auto";

        }, 500);

    });

});


/*=========================================================
                FOOTER YEAR
=========================================================*/

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/*=========================================================
                SCROLL PROGRESS BAR
=========================================================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";

progressBar.style.left = "0";

progressBar.style.top = "0";

progressBar.style.width = "0%";

progressBar.style.height = "4px";

progressBar.style.background =
    "linear-gradient(90deg,#4F46E5,#06B6D4)";

progressBar.style.zIndex = "9999";

progressBar.style.transition = "width .2s";

document.body.appendChild(progressBar);


window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================================
                KEYBOARD ACCESSIBILITY
=========================================================*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/*=========================================================
                PREVENT EMPTY LINKS
=========================================================*/

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", (e) => {

        const href = link.getAttribute("href");

        if (href === "#") {

            e.preventDefault();

        }

    });

});


/*=========================================================
                PROFESSIONAL CONSOLE MESSAGE
=========================================================*/

console.log(

    `%c👋 Welcome Recruiter!

Thank you for taking the time to visit my portfolio.

I'm Rudrakshi Dobhal,
a Computer Science Engineering student passionate about Web Development and Software Engineering.

I am actively seeking internship and full-time Software Development opportunities.

Thank you for your time and consideration.

Have a great day!`,

    "color:#4F46E5;font-size:14px;font-weight:bold;"

);


/*=========================================================
                GLOBAL ERROR HANDLER
=========================================================*/

window.addEventListener("error", (event) => {

    console.error("Portfolio Error:", event.message);

});


/*=========================================================
                END OF SCRIPT
=========================================================*/