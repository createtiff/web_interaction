$(document).ready(function(){


	var colorArray = []
	var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
	$('#box').css('background-color', randomColor)

	var faces = []
	var randomFace = faces[Math.floor(Math.random()*faces.length)]
	$('#box').text(randomFace)

})



