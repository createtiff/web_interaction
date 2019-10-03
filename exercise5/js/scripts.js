var logo = document.getElementById("logo");

//get date and push it to logo


function fontFunction(){

	var checkFont = document.getElementById("myFonts").value;

	console.log(checkFont)

	logo.style.fontFamily = checkFont;
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

//
function colorFunction2(){

	var logo = document.getElementById("myColors").value;
	logo.style.color = color;
}


//size

function sizeFunction(){
	var checkSize = document.getElementById("size").value;
	console.log(checkSize)
	logo.style.fontSize = checkSize + "px";

}






