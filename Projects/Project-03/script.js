function UpdateFlyingObj (event) {
	var mouseX = Math.round (event.clientX);
	var mouseY = Math.round (event.clientY);

	var flyingObj = document.getElementById ("flying");
	flyingObj.style.left = mouseX + "px";
	flyingObj.style.top = mouseY + "px";

}