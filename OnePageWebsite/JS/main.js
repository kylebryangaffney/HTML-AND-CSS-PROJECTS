// get a modal and bring it to the forefront visually
function openModal() {
    document.getElementById("imgModal").style.display = "block";
}

// Close the Modal with the x in the upper right hand corner
function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

// Or close the modal by clicking somewhere outside of the img
window.onclick = function (event) {
    let modal = document.getElementById("imgModal");
    if (event.target == modal) {
        closeModal();
    }
}

// set the current slide index to iterate through 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls for navigating the modals incrementally
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    // get all of the slides into an array, all of the thumbnails into a separate array, and then the empty paragraph elements to print out the alt text
    let i;
    let slides = document.getElementsByClassName("lightBoxSlides");
    let dots = document.getElementsByClassName("thumbnail");
    let captionText = document.getElementById("caption");
    // check to see if we are at the end of the slide array or the beginning to make it so the next and prev buttons will wrap around instead of throwing an out of bounds error
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    // iterate through the slides aray and hide all of the images
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // iterate through the thumbnails and turns off the highlighting effect
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // gets the current image to display and accounts for when we started indexing at 1 earlier 
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // gets the alt text to display on the paragraph element
    captionText.innerHTML = dots[slideIndex - 1].alt;
}