var resultContainer = document.getElementById("result");
var submitButton = document.getElementById("submit-btn");
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

function getConvertToScale(){
	var radioCel = document.getElementById("radio-cel").checked;
	return radioCel ? "C" : "F"
}

function getTemp(){
	return document.getElementById("temp-input").value;
}

function writeToDom(temp, color){
	var resultContainer = document.getElementById("result");
	var domId = '<h2 id="'+color+'">'
	var domString = domId + temp + '</h2>'
	resultContainer.innerHTML = domString

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

function converter() {
	var temp = getTemp();
	var scale = getConvertToScale();
	var convertedTemp = convertInputTemp(temp, scale);
	var color = getColor(convertedTemp, scale);
	writeToDom(convertedTemp, color);
	return ("" + color + " " + convertedTemp + "");
}

function convertButton(){
	console.log(converter());
}




