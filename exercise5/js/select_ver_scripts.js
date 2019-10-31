var logo = document.getElementById("logo");

//get date and push it to logo

//Font
function fontFunction(){

	var checkFont = document.getElementById("myFonts").value;

	console.log(checkFont)

	logo.style.fontFamily = checkFont;
}

//Weight
function weightFunction(){

	var checkFont = document.getElementById("myWeights").value;

	console.log(checkFont)

	logo.style.fontWeight = checkFont;
}

//Style
function styleFunction(){

	var checkFont = document.getElementById("myStyles").value;

	console.log(checkFont)

	logo.style.fontStyle = checkFont;
}

//Underline
function decorationFunction(){

	var checkFont = document.getElementById("myDecorations").value;

	console.log(checkFont)

	logo.style.textDecorationLine = checkFont;
}

//Text Shadow 
function textShadowFunction(){

	var checkFont = document.getElementById("myTextShadows").value;

	console.log(checkFont)

	logo.style.textShadow = checkFont;
}

//Kerning
function kerningFunction(){

	var checkFont = document.getElementById("myKernings").value;

	console.log(checkFont)

	logo.style.fontKerning = checkFont;
}

//Color
function colorFunction(){

	var checkFont = document.getElementById("myColors").value;

	console.log(checkFont)

	logo.style.color = checkFont;
}

//Background Color
function backgroundColorFunction(){

	var checkFont = document.getElementById("myBackgroundColors").value;

	console.log(checkFont)

	background.style.background = checkFont;
}

//Line Color
function lineColorFunction(){

	var checkFont = document.getElementById("myLineColors").value;

	console.log(checkFont)

	logo.style.textDecorationColor = checkFont;
}

//Shadow Color
function textShadowColorFunction(){

	var checkFont = document.getElementById("myTextShadowColors").value;

	console.log(checkFont)

	logo.style.textShadow = checkFont;
}


//size

function sizeFunction(){
	var checkSize = document.getElementById("size").value;
	console.log(checkSize)
	logo.style.fontSize = checkSize + "px";

}

//letterspacing

function spacingFunction(){
	var checkSize = document.getElementById("spacing").value;
	console.log(checkSize)
	logo.style.letterSpacing = checkSize + "px";

}

//opacity

function opacityFunction(){
	var checkSize = document.getElementById("opacity").value;
	console.log(checkSize)
	logo.style.opacity = checkSize;

}



