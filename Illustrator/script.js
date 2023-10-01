let shape = document.getElementById("Shape");
let color = document.getElementsByClassName("cls-1")[0];
shape.addEventListener("click", () => {
	color.style.fill = "#" + Math.floor(Math.random() * 16777215).toString(16);
});