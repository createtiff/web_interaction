$(document).ready(function(){

	var bodyColorArray = ['midnightblue', 'royalblue', 'cornflowerblue', 'powderblue', 'cadetblue', 'teal', 'darkseagreen', 'darkkhaki', 'lightcoral', 'thistle', 'lavender', 'mistyrose', 'rosybrown', 'plum', 'orchid', 'maroon', 'mediumpurple', 'darkmagenta', 'mediumslateblue', 'slateblue']
	var randomBodyColor = bodyColorArray[Math.floor(Math.random()*bodyColorArray.length)]
	$('body').css('background-color', randomBodyColor)
	$('#backgroundcolorresult').css('color', randomBodyColor)
	$('#backgroundcolorresult').text(randomBodyColor)

	var colorArray = ['midnightblue', 'royalblue', 'cornflowerblue', 'powderblue', 'cadetblue', 'teal', 'darkseagreen', 'darkkhaki', 'lightcoral', 'thistle', 'lavender', 'mistyrose', 'rosybrown', 'plum', 'orchid', 'maroon', 'mediumpurple', 'darkmagenta', 'mediumslateblue', 'slateblue']
	var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
	$('#square').css('background-color', randomColor)
	$('#squarecolorresult').css('color', randomColor)
	$('#squarecolorresult').text(randomColor)

	var blurArray = ['blur(0.1vw)', 'blur(0.2vw)',  'blur(0.3vw)',  'blur(0.4vw)',  'blur(0.5vw)', 'blur(0.6vw)', 'blur(0.7vw)', 'blur(0.8vw)', 'blur(0.9vw)','blur(1vw)', 'blur(2vw)', 'blur(3vw)', 'blur(4vw)', 'blur(5vw)', 'blur(6vw)','blur(7vw)', 'blur(8vw)','blur(9vw)', 'blur(10vw)']
	var randomBlur = blurArray[Math.floor(Math.random()*blurArray.length)]
	$('#square').css('filter', randomBlur)

	var colorShadowArray = ['midnightblue', 'royalblue', 'cornflowerblue', 'powderblue', 'cadetblue', 'teal', 'darkseagreen', 'darkkhaki', 'lightcoral', 'thistle', 'lavender', 'mistyrose', 'rosybrown', 'plum', 'orchid', 'maroon', 'mediumpurple', 'darkmagenta', 'mediumslateblue', 'slateblue']
	var randomShadowColor = colorShadowArray[Math.floor(Math.random()*colorShadowArray.length)]
	$('#squareshadow').css('background-color', randomShadowColor)
	$('#squareshadowcolorresult').css('color', randomShadowColor)
	$('#squareshadowcolorresult').text(randomShadowColor)

	var blurArray = ['blur(0.1vw)', 'blur(0.2vw)',  'blur(0.3vw)',  'blur(0.4vw)',  'blur(0.5vw)', 'blur(0.6vw)', 'blur(0.7vw)', 'blur(0.8vw)', 'blur(0.9vw)','blur(1vw)', 'blur(2vw)', 'blur(3vw)', 'blur(4vw)', 'blur(5vw)', 'blur(6vw)','blur(7vw)', 'blur(8vw)','blur(9vw)', 'blur(10vw)']
	var randomBlur = blurArray[Math.floor(Math.random()*blurArray.length)]
	$('#squareshadow').css('filter', randomBlur)

	var faces = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', ' II', 'JJ', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ', '11', '22', '3 3', '44', '55', '66', '77', '88', '99', '0 0', '! !', '? ?', '//', '@@', '##', '$$', '%%', '^^', '&&', '* *', ") (", '©©', '--', '++', '==', "' '", ' " "', '~~', '` `', '> <', '>>', '< <', "¶¶", 'ºº', ' °°', '÷÷', 'øø', 'ΘΘ', 'ΔΔ', 'ΛΛ', 'ΦΦ', 'ㄱㄱ', 'ㄴㄴ', 'ㄷㄷ', 'ㄹㄹ', 'ㅁㅁ', 'ㅂㅂ', 'ㅅㅅ', 'ㅇㅇ', 'ㅈㅈ', 'ㅊㅊ', 'ㅋㅋ', 'ㅌㅌ', 'ㅍㅍ', 'ㅎㅎ', 'ㅜㅜ', 'ㅠㅠ', 'ㅗㅗ', 'ㅛㅛ', '♠♠', '♣♣', '♥♥', '♦♦', '◊◊', '⊕⊕', '⊗⊗', '≈≈', '≡≡', '∴∴',  '∞∞', '∂∂', 'ØØ', '××', '日日', 'ŸŸ', 'ΓΓ', 'ΠΠ', 'ΩΩ', 'ββ', 'θθ', 'σσ'] 
	var randomFace = faces[Math.floor(Math.random()*faces.length)]
	$('#boticon').text(randomFace)

	var textColorArray = ['midnightblue', 'royalblue', 'cornflowerblue', 'powderblue', 'cadetblue', 'teal', 'darkseagreen', 'darkkhaki', 'lightcoral', 'thistle', 'lavender', 'mistyrose', 'rosybrown', 'plum', 'orchid', 'maroon', 'mediumpurple', 'darkmagenta', 'mediumslateblue', 'slateblue']
	var randomTextColor = textColorArray[Math.floor(Math.random()*textColorArray.length)]
	$('#boticon').css('color', randomTextColor)
	$('#textcolorresult').css('color', randomTextColor)
	$('#textcolorresult').text(randomTextColor)

	var mouth = ['_'] 
	var randomMouth = mouth[Math.floor(Math.random()*mouth.length)]
	$('#mouth').text(randomMouth)

	var mouthColorArray = ['midnightblue', 'royalblue', 'cornflowerblue', 'powderblue', 'cadetblue', 'teal', 'darkseagreen', 'darkkhaki', 'lightcoral', 'thistle', 'lavender', 'mistyrose', 'rosybrown', 'plum', 'orchid', 'maroon', 'mediumpurple', 'darkmagenta', 'mediumslateblue', 'slateblue']
	var randomMouthColor = mouthColorArray[Math.floor(Math.random()*mouthColorArray.length)]
	$('#mouth').css('color', randomMouthColor)
	$('#mouthcolorresult').css('color', randomMouthColor)
	$('#mouthcolorresult').text(randomMouthColor)

})


function myFunction() {
  var x = document.getElementById("resultbox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}