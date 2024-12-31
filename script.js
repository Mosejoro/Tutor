const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarButtons = document.getElementsByClassName("navbar-buttons")[0];

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navbarLinks.classList.toggle("active");
  navbarButtons.classList.toggle("active");
});

const testimonialSlider = document.querySelector(".testimonials-slider");

function rotateTestimonials() {
  testimonialSlider.style.animation = "slideTestimonials 20s infinite linear";
}

setInterval(rotateTestimonials, 5000);
