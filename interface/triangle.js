$(document).ready(function(){

	var bodyColorArray = ['100px solid; midnightblue', '100px solid; royalblue']
	var randomBodyColor = bodyColorArray[Math.floor(Math.random()*bodyColorArray.length)]
	$('body').css('background-color', randomBodyColor)

	var colorArray = ['midnightblue', 'royalblue', 'cornflowerblue', 'powderblue', 'cadetblue', 'teal', 'darkseagreen', 'darkkhaki', 'lightcoral', 'thistle', 'lavender', 'mistyrose', 'rosybrown', 'plum', 'orchid', 'maroon', 'mediumpurple', 'darkmagenta', 'mediumslateblue', 'slateblue']
	var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
	$('#triangle').css('border-bottom', randomColor)

	var blurArray = ['blur(0vw)', 'blur(0.1vw)']
	var randomBlur = blurArray[Math.floor(Math.random()*blurArray.length)]
	$('#triangle').css('filter', randomBlur)

	var shadowArray = ['0 0 5vw 5vw midnightblue', '0 0 5vw 5vw royalblue', '0 0 5vw 5vw cornflowerblue', '0 0 5vw 5vw powderblue', '0 0 5vw 5vw cadetblue', '0 0 5vw 5vw teal', '0 0 5vw 5vw darkseagreen', '0 0 5vw 5vw darkkhaki', '0 0 5vw 5vw lightcoral', '0 0 5vw 5vw thistle', '0 0 5vw 5vw lavender', '0 0 5vw 5vw mistyrose', '0 0 5vw 5vw rosybrown', '0 0 5vw 5vw plum', '0 0 5vw 5vw orchid', '0 0 5vw 5vw maroon', '0 0 5vw 5vw mediumpurple', '0 0 5vw 5vw darkmagenta', '0 0 5vw 5vw mediumslateblue', '0 0 5vw 5vw slateblue']
	var randomShadow = shadowArray[Math.floor(Math.random()*shadowArray.length)]
	$('#triangle').css('box-shadow', randomShadow)

	var faces = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', ' II', 'JJ', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ', '11', '22', '3 3', '44', '55', '66', '77', '88', '99', '0 0', '! !', '? ?', '//', '@@', '##', '$$', '%%', '^^', '&&', '* *', ") (", '©©', '--', '++', '==', "' '", ' " "', '~~', '` `', '> <', '>>', '< <', "¶¶", 'ºº', ' °°', '÷÷', 'øø', 'ΘΘ', 'ΔΔ', 'ΛΛ', 'ΦΦ', 'ㄱㄱ', 'ㄴㄴ', 'ㄷㄷ', 'ㄹㄹ', 'ㅁㅁ', 'ㅂㅂ', 'ㅅㅅ', 'ㅇㅇ', 'ㅈㅈ', 'ㅊㅊ', 'ㅋㅋ', 'ㅌㅌ', 'ㅍㅍ', 'ㅎㅎ', 'ㅜㅜ', 'ㅠㅠ', 'ㅗㅗ', 'ㅛㅛ'] 
	var randomFace = faces[Math.floor(Math.random()*faces.length)]
	$('#boticon').text(randomFace)

	var textColorArray = ['midnightblue', 'royalblue', 'cornflowerblue', 'powderblue', 'cadetblue', 'teal', 'darkseagreen', 'darkkhaki', 'lightcoral', 'thistle', 'lavender', 'mistyrose', 'rosybrown', 'plum', 'orchid', 'maroon', 'mediumpurple', 'darkmagenta', 'mediumslateblue', 'slateblue']
	var randomTextColor = textColorArray[Math.floor(Math.random()*textColorArray.length)]
	$('#boticon').css('color', randomTextColor)

	var mouth = ['_'] 
	var randomMouth = mouth[Math.floor(Math.random()*mouth.length)]
	$('#mouth').text(randomMouth)

	var mouthColorArray = ['midnightblue', 'royalblue', 'cornflowerblue', 'powderblue', 'cadetblue', 'teal', 'darkseagreen', 'darkkhaki', 'lightcoral', 'thistle', 'lavender', 'mistyrose', 'rosybrown', 'plum', 'orchid', 'maroon', 'mediumpurple', 'darkmagenta', 'mediumslateblue', 'slateblue']
	var randomMouthColor = mouthColorArray[Math.floor(Math.random()*mouthColorArray.length)]
	$('#mouth').css('color', randomMouthColor)

})