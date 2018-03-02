

// DO NOT LOOK AT IT! I know it makes no sense and it would have been much easier
// to have one div container for each view and maybe toggle them but... I wanted
// to finish quickly. Lazy, I know. But I'm busy! Starting next week, sure, but 
// right now I got places to be, yo! Don't judge me!


window.onload = function() {
	document.getElementById("about").addEventListener("click", function() {
		document.getElementById("bg").style.opacity = 0.6;
		document.getElementById("textBox").style.display = 'block';
		document.getElementById("coolPug").style.display = 'block';
		document.getElementById("contactDiv").style.display = 'none';
		document.getElementById("pugMail").style.display = 'none';
	});

	document.getElementById("contact").addEventListener("click", function() {
		document.getElementById("bg").style.opacity = 0.6;
		document.getElementById("contactDiv").style.display = 'block';
		document.getElementById("pugMail").style.display = 'block';
		document.getElementById("textBox").style.display = 'none';
		document.getElementById("coolPug").style.display = 'none';
	});

	document.getElementById("portrait").addEventListener("click", function() {
		document.getElementById("bg").style.opacity = 1.0;
		document.getElementById("contactDiv").style.display = 'none';
		document.getElementById("textBox").style.display = 'none';
		document.getElementById("coolPug").style.display = 'none';
		document.getElementById("pugMail").style.display = 'none';
	});
}