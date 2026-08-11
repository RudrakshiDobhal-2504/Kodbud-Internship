/* =========================================
   FORM ELEMENTS
========================================= */

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");
const submitButton = document.getElementById("submitButton");

const characterCount = document.getElementById("characterCount");


/* =========================================
   VALIDATION FUNCTIONS
========================================= */


/* Name Validation */

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        showError(
            nameInput,
            nameError,
            "Please enter your full name."
        );

        return false;
    }

    if (name.length < 2) {

        showError(
            nameInput,
            nameError,
            "Name must contain at least 2 characters."
        );

        return false;
    }

    showSuccess(nameInput, nameError);

    return true;
}


/* Email Validation */

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (email === "") {

        showError(
            emailInput,
            emailError,
            "Please enter your email address."
        );

        return false;
    }

    if (!emailPattern.test(email)) {

        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        return false;
    }

    showSuccess(emailInput, emailError);

    return true;
}


/* Phone Validation */

function validatePhone() {

    const phone = phoneInput.value.trim();

    const phonePattern = /^[6-9][0-9]{9}$/;

    if (phone === "") {

        showError(
            phoneInput,
            phoneError,
            "Please enter your phone number."
        );

        return false;
    }

    if (!phonePattern.test(phone)) {

        showError(
            phoneInput,
            phoneError,
            "Enter a valid 10-digit Indian phone number."
        );

        return false;
    }

    showSuccess(phoneInput, phoneError);

    return true;
}


/* Message Validation */

function validateMessage() {

    const message = messageInput.value.trim();

    if (message === "") {

        showError(
            messageInput,
            messageError,
            "Please enter your message."
        );

        return false;
    }

    if (message.length < 10) {

        showError(
            messageInput,
            messageError,
            "Message should contain at least 10 characters."
        );

        return false;
    }

    showSuccess(messageInput, messageError);

    return true;
}


/* =========================================
   ERROR / SUCCESS UI
========================================= */

function showError(input, errorElement, message) {

    input.classList.remove("input-success");

    input.classList.add("input-error");

    errorElement.textContent = message;
}


function showSuccess(input, errorElement) {

    input.classList.remove("input-error");

    input.classList.add("input-success");

    errorElement.textContent = "";
}


function clearValidation(input, errorElement) {

    input.classList.remove(
        "input-error",
        "input-success"
    );

    errorElement.textContent = "";
}


/* =========================================
   CHARACTER COUNTER
========================================= */

messageInput.addEventListener("input", function () {

    const currentLength = messageInput.value.length;

    characterCount.textContent =
        `${currentLength} / 500`;

});


/* =========================================
   LIVE VALIDATION
========================================= */

nameInput.addEventListener("blur", validateName);

emailInput.addEventListener("blur", validateEmail);

phoneInput.addEventListener("blur", validatePhone);

messageInput.addEventListener("blur", validateMessage);


/* =========================================
   PREVENT NON-NUMERIC PHONE CHARACTERS
========================================= */

phoneInput.addEventListener("input", function () {

    phoneInput.value =
        phoneInput.value.replace(/\D/g, "");

});


/* =========================================
   FORM SUBMISSION
========================================= */

form.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Validate every field */

    const isNameValid = validateName();

    const isEmailValid = validateEmail();

    const isPhoneValid = validatePhone();

    const isMessageValid = validateMessage();


    /* Check result */

    if (
        !isNameValid ||
        !isEmailValid ||
        !isPhoneValid ||
        !isMessageValid
    ) {

        successMessage.classList.remove("show");

        return;
    }


    /* =====================================
       SUCCESS STATE
    ===================================== */

    submitButton.disabled = true;

    submitButton.querySelector("span:first-child").textContent =
        "Sending...";


    /* Small simulated delay */

    setTimeout(function () {

        successMessage.classList.add("show");

        submitButton.disabled = false;

        submitButton.querySelector("span:first-child").textContent =
            "Message Sent ✓";


        /* Reset form */

        form.reset();

        characterCount.textContent =
            "0 / 500";


        /* Remove validation states */

        clearValidation(
            nameInput,
            nameError
        );

        clearValidation(
            emailInput,
            emailError
        );

        clearValidation(
            phoneInput,
            phoneError
        );

        clearValidation(
            messageInput,
            messageError
        );


        /* Return button to normal after a few seconds */

        setTimeout(function () {

            submitButton.querySelector("span:first-child").textContent =
                "Send Message";

        }, 3000);


    }, 800);

});