AOS.init();

// Add scroll event for the whole HTLM document and set updateNavigation function as callback
let navButtons = document.getElementsByClassName('nav-btn');
document.addEventListener('scroll', updateNavigation);
function updateNavigation(){
	// pos saves current scrollY position
	let pos = window.scrollY;
	// height saves current web page height
	let height = window.innerHeight;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = parseInt(pos / height);

	// Fix color of navigation button
	// Set all button color to white
	for(let i = 0; i < navButtons.length; i++){
		navButtons[i].style.backgroundColor = 'white';
	}

	// Set color of current section button to black
	navButtons[sectionNum].style.backgroundColor = 'black';
}