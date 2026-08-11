/* =========================================
   DEVJOURNAL BLOG
   JAVASCRIPT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const themeToggle =
    document.getElementById("themeToggle");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const searchInput =
    document.getElementById("searchInput");

const categoryButtons =
    document.querySelectorAll(".category-button");

const blogCards =
    document.querySelectorAll(".blog-card");

const noResults =
    document.getElementById("noResults");

const readMoreButtons =
    document.querySelectorAll(".read-more");

const modal =
    document.getElementById("articleModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalClose =
    document.getElementById("modalClose");

const modalDone =
    document.getElementById("modalDone");

const modalOverlay =
    document.querySelector(".modal-overlay");

const newsletterForm =
    document.getElementById("newsletterForm");

const emailInput =
    document.getElementById("emailInput");


/* =========================================
   DARK MODE
========================================= */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );

    }

});


/* =========================================
   MOBILE MENU
========================================= */

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* CLOSE MOBILE MENU AFTER CLICK */

const mobileLinks =
    mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove(
            "open"
        );

    });

});


/* =========================================
   CATEGORY FILTER
========================================= */

let activeCategory = "all";


categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        categoryButtons.forEach((btn) => {

            btn.classList.remove(
                "active"
            );

        });


        button.classList.add("active");


        activeCategory =
            button.dataset.category;


        filterArticles();

    });

});


/* =========================================
   SEARCH FILTER
========================================= */

searchInput.addEventListener(
    "input",
    filterArticles
);


/* =========================================
   FILTER FUNCTION
========================================= */

function filterArticles() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();

    let visibleCount = 0;


    blogCards.forEach((card) => {

        const category =
            card.dataset.category;

        const title =
            card.dataset.title
                .toLowerCase();


        const categoryMatches =
            activeCategory === "all" ||
            category === activeCategory;


        const searchMatches =
            title.includes(searchTerm);


        if (
            categoryMatches &&
            searchMatches
        ) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCount === 0) {

        noResults.classList.add(
            "show"
        );

    } else {

        noResults.classList.remove(
            "show"
        );

    }

}


/* =========================================
   ARTICLE MODAL
========================================= */

readMoreButtons.forEach((button) => {

    button.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            const postTitle =
                button.dataset.post;


            modalTitle.textContent =
                postTitle;


            modal.classList.add("open");


            modal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

});


/* =========================================
   CLOSE MODAL FUNCTION
========================================= */

function closeModal() {

    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* CLOSE BUTTON */

modalClose.addEventListener(
    "click",
    closeModal
);


/* DONE BUTTON */

modalDone.addEventListener(
    "click",
    closeModal
);


/* OVERLAY */

modalOverlay.addEventListener(
    "click",
    closeModal
);


/* ESC KEY */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {

            closeModal();

        }

    }
);


/* =========================================
   NEWSLETTER
========================================= */

newsletterForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const email =
            emailInput.value.trim();


        if (!email) {

            return;

        }


        alert(
            "Thank you for subscribing to DevJournal!"
        );


        newsletterForm.reset();

    }
);