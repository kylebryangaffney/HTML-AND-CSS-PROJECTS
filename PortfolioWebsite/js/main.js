// Functions to open and close the contact form at the bottom
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// displays the first image in the slideshow when the page loads
let slideIndex = 1;
showSlides(slideIndex);

// changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let slideArray = document.getElementsByClassName("mySlides"); // gets all elements from class name "mySlides" and builds an array
    let dotArray = document.getElementsByClassName("dot"); // gets all elements from class name "dot" and builds an array
    // wrap around the indexing so that we stay in bounds of the slide array
    if (n > slideArray.length) { slideIndex = 1 }; // Checks if the current slide inddex is greater than the length of the slide array, if it is reset the slideIndex to 1
    if (n < 1) { slideIndex = slideArray.length }; // check if the current slide index is less than 1, if it is then the slideIndex is set to the length of the slide array
    for (let i = 0; i < slideArray.length; i++) {
        slideArray[i].style.display = "none"; // iterates over the slides array and sets all of them to show "none"
    }
    for (let i = 0; i < dotArray.length; i++) {
        dotArray[i].className = dotArray[i].className.replace(" active", ""); // iterates over the dots array and removes "active" which removes the active styling
    }
    slideArray[slideIndex - 1].style.display = "block"; // displays the desiredd image in the slideshow
    dotArray[slideIndex - 1].className += " active"; // adds the active styling to the dot associated with the image
}

// creates and closes contact form when
// add an event listener for any clicks on the page
document.addEventListener("click", function (event) {
    // check if the click happens on the cancel button or anywhere that is not the contact form AND the click does not happen on any element with the contact class. We will call the closeForm() function with any click accept the submit button
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false)

