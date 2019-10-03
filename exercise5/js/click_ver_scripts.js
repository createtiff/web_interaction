var logo = document.getElementById("logo");


//helvetica
function helveticaFunction(){

	var checkBox = document.getElementById("helveticaCheck");

	console.log(checkBox.checked)

	if ( checkBox.checked == true ) {
		logo.style.fontFamily = 'helvetica';
	}

	else{
		logo.style.color = 'initial';
	}
}

//Timew New Roman
function timesNewRomanFunction(){

	var checkBox = document.getElementById("timesNewRomanCheck");

	console.log(checkBox.checked)

	if ( checkBox.checked == true ) {
		logo.style.fontFamily = 'Times New Roman';
	}

	else{
		logo.style.fontFamily = 'initial';
	}
}

//Courier
function courierFunction(){

	var checkBox = document.getElementById("courierCheck");

	console.log(checkBox.checked)

	if ( checkBox.checked == true ) {
		logo.style.fontFamily = 'Courier';
	}

	else{
		logo.style.fontFamily = 'initial';
	}
}

//bold
function boldFunction(){

	var checkBox = document.getElementById("boldCheck");

	console.log(checkBox.checked)

	if ( checkBox.checked == true ) {
		logo.style.fontWeight = 'bold';
	}

	else{
		logo.style.fontWeight = 'inherit';
	}
}

//italic
function italicFunction(){

	var checkBox = document.getElementById("italicCheck");

	console.log(checkBox.checked)

	if ( checkBox.checked == true ) {
		logo.style.fontStyle = 'italic';
	}

	else{
		logo.style.fontStyle = 'inherit';
	}
}

//color_red
function redFunction(){

	var checkBox = document.getElementById("redCheck");

	console.log(checkBox.checked)

	if ( checkBox.checked == true ) {
		logo.style.color = 'red';
	}

	else{
		logo.style.color = 'inherit';
	}
}

//color_blue
function blueFunction(){

	var checkBox = document.getElementById("blueCheck");

	console.log(checkBox.checked)

	if ( checkBox.checked == true ) {
		logo.style.color = 'blue';
	}

	else{
		logo.style.color = 'inherit';
	}
}

//color_green
function greenFunction(){

	var checkBox = document.getElementById("greenCheck");

	console.log(checkBox.checked)

	if ( checkBox.checked == true ) {
		logo.style.color = 'green';
	}

	else{
		logo.style.color = 'inherit';
	}
}

//size

function sizeFunction(){
	var checkSize = document.getElementById("size").value;
	console.log(checkSize)
	logo.style.fontSize = checkSize + "px";

}






