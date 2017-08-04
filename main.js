var tempInput = document.getElementById("temp-input");
var scaleInput = document.getElementById("temp-input");
var resultContainer = document.getElementById("result");
var submitButton = document.getElementById("submit-btn")
var resetButton = document.getElementById("reset-btn");

function convertCtoF(temp){
	return (temp * (9/5)) + 32; 
}

function convertFtoC(temp){
	return (temp - 32) / (9/5); 
}

function convertInputTemp(temp, scale){
	return scale === "F" ? convertCtoF(temp).toFixed(2) : convertFtoC(temp).toFixed(2)
}

function getColor(temp, scale){
	if ((scale === "C" && temp > 32) || (scale === "F" && temp > 90)) {
		return "red";
	} else if ((scale === "C" && temp < 0) || (scale === "F" && temp < 32)) {
		return "blue";
	} else {
		return "green";
	}
}

function controller(temp, scale) {
	var convertedTemp = convertInputTemp(temp, scale);
	var color = getColor(convertedTemp, scale);
	return ("" + color + " " + convertedTemp + "");
}

console.log(controller(32,"C"));