// query all slides
const slides = document.querySelectorAll(".slide");
let curSlide = 0;

// initial positions of the images, otherwise the last element is shown first
showSlides(0); 

// increment curSlide if next button is clicked
const nextButton = document.querySelector(".button-next");
nextButton.addEventListener("click",() => showSlides(1));

// decrement curSlide if prev button is clicked
const prevButton = document.querySelector(".button-prev");
prevButton.addEventListener("click",() => showSlides(-1));

// show image with index equal to curSlide
function showSlides(moveTo) {
	curSlide = (curSlide + moveTo + slides.length) % slides.length;

	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
	});
}


// query all down arrows
const scrollDownArrows = document.querySelectorAll(".arrow-down a");
scrollDownArrows.forEach((scrollDownArrow, index) => {
	scrollDownArrow.addEventListener("click", function (event) {
		 // ignore default anchor point
        event.preventDefault();
        // scroll to section written in href
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});