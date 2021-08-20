function calcular(){
	var peso;
	var altura;
	var imc;
	peso = document.getElementById('peso').value;
	altura = document.getElementById('altura').value;

	imc = peso/(altura * altura);

	alert(imc);
    document.getElementById('seuimc').innerHTML = imc;

	if (imc < 18.5) {

		document.getElementById('tabela').src="lib/img/Figura3.png";

	}else if ( imc > 18.6 && imc < 24.9){

		document.getElementById('tabela').src="lib/img/Figura4.png";


	}else if( imc > 25){

		document.getElementById('tabela').src="lib/img/Figura5.png";

	}
}

function limpar(){
	document.getElementById('peso').value='';
	document.getElementById('altura').value='';
 }


