function calculaIMC(){
	var calculadora = document.getElementById("calculadora");
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
	if( peso != "" && altura != "" ){
		altura = parseInt(altura) / 100;
		var imc = peso / (altura * altura);
		calculadora.innerHTML += '<p>Con una altura de ' + altura + 'm y un peso de ' + peso + 'kgs, tu índice de masa corporal es <span>' + imc.toFixed(2) + '</span>.</p>';
	}
	peso = "";
	altura = "";
}

