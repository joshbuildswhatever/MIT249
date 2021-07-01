var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening, and welcome to my site!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon, and welcome to my site!';
} else if (hourNow > 0) {
    greeting = 'Good morning, and welcome to my site!';
} else {
    greeting = 'Welcome to my site!';
}

document.write('<h3>' + greeting + '</h3>');