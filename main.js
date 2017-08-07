var convertFtoC = (temp) => {
		return (temp - 32) / (9/5); 
		}

var convertCtoF = (temp) => {
		return (temp * (9/5)) + 32; 
		}

function convertInputTemp(temp, scale){
	return scale === "F" ? convertCtoF(temp).toFixed(2) : convertFtoC(temp).toFixed(2)
}

function getConvertToScale(){
	return document.querySelector('input[name="conversion-radio"]:checked').value
}

function getTemp(){
	return document.getElementById("temp-input").value;
}

function writeToDom(temp, color){
	var resultContainer = document.getElementById("result");
	var domId = '<h2 id="'+color+'">' // <h2>id="red"</h2>
	var domString = domId + temp + '</h2>' //<h2>id="red"</h2>-17.22</h2>
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
}

document.onkeydown = function (e) {
    if (e.keyCode === 13) {
        converter();
    }
}

// document.getElementById("submit-btn").onclick = function () {
// 	converter();	
// }

document.getElementById("submit-btn").addEventListener("click", converter)
