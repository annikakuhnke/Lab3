function colorChange() 
{
	let bor_red= document.getElementById("border_red").value;
	let bor_blue= document.getElementById("border_blue").value;
	let bor_green= document.getElementById("border_green").value;
	let bor_width= document.getElementById("border_width").value;
	let back_red= document.getElementById("background_red").value;
	let back_green= document.getElementById("background_green").value;
	let back_blue= document.getElementById("background_blue").value;
	document.getElementById("myParagraph").style.backgroundColor="rgb(" + back_red + ", " + back_green + ", " + back_blue + ")";
	document.getElementById("myParagraph").style.borderColor="rgb(" + bor_red + ", " + bor_green + ", " + bor_blue + ")";
	document.getElementById("myParagraph").style.borderWidth=bor_width;
}
