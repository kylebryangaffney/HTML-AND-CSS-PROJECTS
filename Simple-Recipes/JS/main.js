// --- RECIPE POP UP MODAL SECTION ---

// Selects all input elements from modal-button and adds them to a list
let btnsArray = document.querySelectorAll("input.modal-button");

// Adds all elements with recipe-modal to an array to close windows
let modalsArray = document.querySelectorAll(".recipe-modal");

// Selects all of the close-btn -- X button --- elements 
let closeBtn = document.getElementsByClassName("close-btn");

// Loop through recipe buttons to add a click event listener to open the modals
for (let i = 0; i < btnsArray.length; i++) {
    btnsArray[i].onclick = function (event) {
        // s;ects the specific modal ID using href
        modal = document.querySelector(event.target.getAttribute("href"));
        // Individually sets CSS of that specific modal to make it actually display
        modal.style.display = "block";

        // MOVED UP into the actual loop-----When we open a modal, we start a timer, and after the timer expires, we set the display value to null to hide the recipe modal
        setTimeout(function () {
            modal.style.display = "none";
        }
            , 5000);
    }

}

// Loop through close buttons
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        // loop through all modals on the page after an x is clicked
        for (let index in modalsArray) {
            // Only select elements with with style properties
            if (modalsArray[index].style) {
                // Removes the modal from display
                modalsArray[index].style.display = "none";
            }
        }
    }
}

// --- EMAIL VALIDATION SECTION ---

// Checks for the submit button on the contact form
document.getElementById("contactForm")
    .addEventListener("submit", function (event) {
        // Prevents the page from reloading by default after form submitted
        event.preventDefault();

        // sets the current text values from each input field in the form
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Verifes the email follows standard format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // get the html element for the message to display feedback messages to the user
        const valMsg = document.getElementById("validateMsg");

        // Check that the required text fields are not empty
        if (!firstName || !lastName || !phone || !message) {
            valMsg.innerHTML = "<p style='color: red'>Please fill empty fields</p>";
        }
        // Check the email is valid
        else if (!emailPattern.test(email)) {
            valMsg.innerHTML = "<p style='color: red'>Please enter a valid email address</p>";
        }
        // default to show a success message
        else {
            valMsg.innerHTML = "<p style='color: green'>Thank you for submitting</p>";
        }

        // Set the json data from the form input values
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            // bool for if the user checked subscribe
            subscribe: document.getElementById("subscription").checked
        };

        // Print out the data object into a string on console
        console.log(JSON.stringify(formData));
    });