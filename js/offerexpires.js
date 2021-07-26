const countdown = () => {
	const countDate = new Date("August 1, 2021 00:00:00").getTime();
	const now = new Date().getTime();
	const gap = countDate - now;
	
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
	
	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);
	
	document.querySelector(".day").innerText = textDay;
	document.querySelector(".hour").innerText = textHour;
	document.querySelector(".minute").innerText = textMinute;
	document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);

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

$(function(){
	$(".models").hide().slideDown(2000);
});