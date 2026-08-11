/* =========================================
   GOOGLE HOMEPAGE CLONE
   JAVASCRIPT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

const luckyButton = document.getElementById("luckyButton");

const clearButton = document.getElementById("clearButton");

const themeToggle = document.getElementById("themeToggle");

const voiceButton = document.getElementById("voiceButton");

const lensButton = document.getElementById("lensButton");


/* =========================================
   SEARCH INPUT
========================================= */

searchInput.addEventListener("input", () => {

    if (searchInput.value.trim() !== "") {

        clearButton.classList.remove("hidden");

    } else {

        clearButton.classList.add("hidden");

    }

});


/* =========================================
   CLEAR SEARCH
========================================= */

clearButton.addEventListener("click", () => {

    searchInput.value = "";

    clearButton.classList.add("hidden");

    searchInput.focus();

});


/* =========================================
   GOOGLE SEARCH BUTTON
========================================= */

searchButton.addEventListener("click", () => {

    performSearch();

});


/* =========================================
   ENTER KEY SEARCH
========================================= */

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        performSearch();

    }

});


/* =========================================
   SEARCH FUNCTION
========================================= */

function performSearch() {

    const query = searchInput.value.trim();

    if (query === "") {

        searchInput.focus();

        return;

    }

    const googleSearchURL =
        "https://www.google.com/search?q="
        + encodeURIComponent(query);

    window.location.href = googleSearchURL;

}


/* =========================================
   I'M FEELING LUCKY
========================================= */

luckyButton.addEventListener("click", () => {

    const query = searchInput.value.trim();

    if (query === "") {

        searchInput.focus();

        return;

    }

    const googleSearchURL =
        "https://www.google.com/search?q="
        + encodeURIComponent(query)
        + "&btnI=1";

    window.location.href = googleSearchURL;

});


/* =========================================
   DARK MODE
========================================= */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );

    }

});


/* =========================================
   VOICE BUTTON
========================================= */

voiceButton.addEventListener("click", () => {

    alert(
        "Voice Search is a visual feature in this internship project."
    );

});


/* =========================================
   GOOGLE LENS BUTTON
========================================= */

lensButton.addEventListener("click", () => {

    alert(
        "Google Lens is a visual feature in this internship project."
    );

});


/* =========================================
   INITIAL FOCUS
========================================= */

window.addEventListener("load", () => {

    searchInput.focus();

});