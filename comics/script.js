AOS.init();

// const horseButton = document.getElementById("button-horse");
const horseButton = document.getElementById("word-horse");
horseButton.addEventListener("click",() => showPicture(0));

// const bearButton = document.getElementById("button-bear");
const bearButton = document.getElementById("word-bear");
bearButton.addEventListener("click",() => showPicture(1));

// const wormButton = document.getElementById("button-worm");
const wormButton = document.getElementById("word-worm");
wormButton.addEventListener("click",() => showPicture(2));

const panelFourImages = document.querySelectorAll(".image-4");
const panelSixImages = document.querySelectorAll(".image-6");
const panelSevenImages = document.querySelectorAll(".image-7");

function showPicture(number) {
	panelFourImages.forEach((image, index) => {
		image.style.visibility = "hidden";
	});
	panelSixImages.forEach((image, index) => {
		image.style.visibility = "hidden";
	});
	panelSevenImages.forEach((image, index) => {
		image.style.visibility = "hidden";
	});
	switch(number) {
			case 0: panelSixImages[0].style.visibility = "visible";
					panelFourImages[0].style.visibility = "visible";
					panelSevenImages[0].style.visibility = "visible";
					break;
			case 1: panelSixImages[1].style.visibility = "visible";
					panelFourImages[1].style.visibility = "visible";
					panelSevenImages[1].style.visibility = "visible";
					break;
			case 2: panelSixImages[1].style.visibility = "visible";
					panelFourImages[2].style.visibility = "visible";
					panelSevenImages[1].style.visibility = "visible";
					break;
		}
}