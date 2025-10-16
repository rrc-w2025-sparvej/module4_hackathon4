const form = document.getElementById("hackathonForm");

form.addEventListener("submit", (event) => {
    const errorMessages = document.querySelectorAll(".error-message")
    for (const el of errorMessages) {
        el.innerHTML = ""
    }
    event.preventDefault();

    if (validation()) {
        console.log("Validation Successful")
        form.submit()
    } else {
        console.log("Validation Failed.")
    }





})

const validation = () => {
    let isValid = true;


    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const experience = document.getElementById("experience");
    const participantCode = document.getElementById("participantCode");
    const eventDate = document.getElementById("eventDate");
    const category = document.querySelector('input[name="category"]:checked');

    if (userName.value === "") {
        displayErrorMessage(userName, "Cannot be blank idiot.")
        isValid = false;
    }

    const complexEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!complexEmailPattern.test(email.value)) {
        displayErrorMessage(email, "Please input a valid email address.")
        isValid = false;

    }

    const categoryRadios = form.querySelectorAll('input[name="category"]');
    const selectedRadio = form.querySelector('input[name="category"]:checked');
    if (!selectedRadio) {
        displayErrorMessage(categoryRadios[0], "Please select a hackathon category.")
        isValid = false;
    }

    if (experience.value === "") {
        displayErrorMessage(experience, "Please select an experience level.")
        isValid = false;
    }

    const codePattern = /^HACK-\d{4}$/;
    if (!codePattern.test(participantCode.value)) {
        displayErrorMessage(participantCode, "Please input your valid participant code. (HACK-XXXX)")
        isValid = false;
    }

    const dateVal = eventDate.value;

    if (!dateVal) {
        displayErrorMessage(eventDate, "Please select an event date")
        isValid = false;
    }


    return isValid;
}

const displayErrorMessage = (inputElement, message) => {
    const errorSpan = document.getElementById(inputElement.name + "Error");
    if (errorSpan) {
        errorSpan.textContent = message;
    }
};
