
// rotate my diamond


$('#diamond').click(function(){
	console.log('yooooooo')
	$('#diamond').css('transform', 'rotate(0deg)')

})


// randomly position left to right

setInterval(function(){

	console.log()
	var randomNumber = Math.random() * 100 + "px";
	$('#square').css('margin-left', randomNumber)

},1000)


var rotate = false;
$('#diamond').click(function(){

	if (rotate===true){
		$('#diamond').css('transform', 'rotate(0deg)')
	rotate=false;
	}

	else{
		$('diamond').css('transform', 'rotate(45deg)')
	rotate=true;

	}
	console.log(rotate)
})