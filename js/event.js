/* Chapters 5&6: Events */
function changeText(){
	var card = document.getElementsByClassName('title');
	
	card[0].style.color = "green";
	card[1].style.color = "green";
	card[2].style.color = "orange";
	card[3].style.color = "orange";
	card[4].style.color = "red";
	card[5].style.color = "red";
	card[6].style.color = "yellow";
	card[7].style.color = "red";
	
	var click = document.getElementById("click");
	
	click.addEventListener("click", function(){
		alert("Hello, anything in green is a completed miniature, those in orange need pain, red designates the need for a print and paint, and yellow means a complete product is coming soon(Check out the timer!)");
	});
}