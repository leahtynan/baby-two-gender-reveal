// Baby Two Gender Reveal by Leah Tynan 2023

// -------------------- BUTTONS --------------------

var boyButton = document.getElementById("boy-button"); 
boyButton.addEventListener("click", function () { 
	guessBoy();
});

var girlButton = document.getElementById("girl-button"); 
girlButton.addEventListener("click", function () { 
	guessGirl();
});

var resetButton = document.getElementById("reset-button"); 
resetButton.addEventListener("click", function () { 
	reset();
});                     

// -------------------- FUNCTIONS -------------------

function reset() {
// *** Restarts the interaction ***
	document.body.style.background = "white";
	document.getElementById("helper-text").innerHTML = "Make your guess!";
	document.getElementById("helper-text").style.color = "black";
	document.getElementById("helper-text").style.fontWeight = "lighter";
	resetButton.style.opacity = "0.15";
	resetButton.disabled = "disabled";
	boyButton.removeAttribute("disabled");
	girlButton.removeAttribute("disabled");
	boyButton.style.opacity = "1.0";
	girlButton.style.opacity = "1.0";
}

function guessBoy() {
	// *** Shows boy messaging and reveals answer *** /
	document.getElementById("helper-text").innerHTML = "Yes, it's a boy this time!";
	showAnswer();
}

function guessGirl() {
	// *** Shows girl messaging and reveals answer *** /
	document.getElementById("helper-text").innerHTML = "Nope, it's a boy this time!";
	showAnswer();
}

function showAnswer() {
	// ** Updates UI to show the answer **
	document.body.style.background = "#0072bb";
	document.getElementById("helper-text").style.color = "white";
	document.getElementById("helper-text").style.fontWeight = "bolder";
	girlButton.style.opacity = "0.15";
	boyButton.disabled = "disabled";
	girlButton.disabled = "disabled";
	resetButton.style.opacity = "1.0";
	resetButton.removeAttribute("disabled");
}
