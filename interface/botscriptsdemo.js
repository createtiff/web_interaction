$(document).ready(function(){


	var colorArray = ['red', '#00ff00', 'rgb(255,66,33)']
	var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
	$('#bot').css('background-color', randomColor)

	var faces = ['A_A', 'B_B', 'C_C', 'D_D', 'E_E', 'F_F', 'G_G', 'H_H', 'I_I', 'J_J', 'K_K', 'L_L', 'M_M', 'N_N', 'O_O', 'P_P', 'Q_Q', 'R_R', 'S_S', 'T_T', 'U_U', 'V_V', 'W_W', 'X_X', 'Y_Y', 'Z_Z', '1_1', '2_2', '3_3', '4_4', '5_5', '6_6', '7_7', '8_8', '9_9', '0_0', '!_!', '?_?', '/_/', '@_@', '#_#', '$_$', '%_%', '^_^', '&_&', '*_*', ")_(", '(_(', ')_)', '©_©', '-_-', '+_+', '=_=', "'_'", '"_"', '~_~', '`_`', '>_<', '>_>', '<_<', "¶_¶", 'º_º', '°_°', '÷_÷', 'ø_ø', 'Θ_Θ', 'Δ_Δ', 'Λ_Λ', 'Φ_Φ', 'ㄱ_ㄱ', 'ㄴ_ㄴ', 'ㄷ_ㄷ', 'ㄹ_ㄹ', 'ㅁ_ㅁ', 'ㅂ_ㅂ', 'ㅅ_ㅅ', 'ㅇ_ㅇ', 'ㅈ_ㅈ', 'ㅊ_ㅊ', 'ㅋ_ㅋ', 'ㅌ_ㅌ', 'ㅍ_ㅍ', 'ㅎ_ㅎ', 'ㅜ_ㅜ', 'ㅠ_ㅠ', 'ㅗ_ㅗ', 'ㅛ_ㅛ'] 
	var randomFace = faces[Math.floor(Math.random()*faces.length)]
	$('#bot').text(randomFace)

})



