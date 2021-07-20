var msg = ["I", "wasn't", "sure", "how", "to", "incorporate", "decision", "loops", "for", "this", "assignment."];
var text = "";
var i = 0;

for(; i < msg.length;) {
	text += msg[i] + " ";
	i++;
}

document.getElementById("text").innerHTML = text;