import $ from 'jquery'; 

const homeScript = ({ name }) => { 

    document.addEventListener('DOMContentLoaded', function () {

    // Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let slideIndex = 1;

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', function () {
    function updateSlideImage(image) {
        console.log("updating slide image to", image.url);
        let slideShowDiv = $("#slideshow-image");
        slideShowDiv.css("background-image", `url(${image.url})`);
    }

    showSlides(slideIndex);

    window.setInterval(() => {
        console.log("plus slide 1");
        plusSlides(1);
    }, 5000);
});

// document.getElementById("contact-form").addEventListener("submit", (event) => {
//     const contactForm = event.target
//     if (!validateContactForm(contactForm)) {
//       event.preventDefault();
//       displayError(contactForm, 'Invalid input')
//     }
// });

});
}

export default homeScript;