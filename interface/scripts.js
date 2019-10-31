$(document).ready(function(){


	var colorArray = ['red', '#00ff00', 'rgb(255,66,33)']
	var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
	$('#box').css('background-color', randomColor)

	var faces = ['A_A', 'B_B', 'C_C']
	var randomFace = faces[Math.floor(Math.random()*faces.length)]
	$('#box').text(randomFace)

})



