
//mudança de titulo.
			var titulo = document.querySelector("#titulo");
			titulo.textContent = "Aparecida Nutricionista";

//get só do ID primeiro-paciente, de dentro do html(document) para a variavel paciente
			var pacientes = document.querySelectorAll(".paciente");

// veja que pacientes deve ser diferente do paciente interno do for
// é uma arrey de caractere, manteremos a paciente como um controlador numérico.
for (var i = 0; i < pacientes.length; i++)
{
	var paciente = pacientes[i];

	//get só da classe .info-peso de dentro da variavel paciente para a variavel trpeso
	var trPeso = paciente.querySelector(".info-peso");
	//console.log(trpeso);

	//get só do peso de dentro da variavel trpeso para uma variavel peso
	var peso = trPeso.textContent;
	//console.log(peso);


	//get só da classe .info-altura da variavel paciente para uma variavel traltura
	var trAltura = paciente.querySelector(".info-altura");
	//console.log(traltura);

	//get só da altura de dentro da variavel traltura para a variavel altura
	var altura = trAltura.textContent;
	//console.log(altura);

	var alturaValida = validaAltura(altura);
	var pesoValido = validaPeso(peso);//true or false
				//input verification
				if(imc<1 || 100<imc)
				{
					alert("Reveja os números colocados");
				}

				if(!alturaValida)
				{
//					alert("Altura invalida");
					alturaValida = false;
					paciente.classList.add("paciente-invalido");

				}

				if(!pesoValido)
				{
					paciente.classList.add("paciente-invalido");
//					alert("Peso invalido");
					pesoValido = false;


				}

	if( pesoValido && alturaValida)
	{
		//calculo "imc" para uma variavel chamada imc
				var imc = calculaImc(peso,altura);
				//console.log(imc);

		//get só da classe .info-imc , de dentro da variavel paciente
		//para uma variavel trimc
				var tdImc = paciente.querySelector(".info-imc");
				//apenas a informação texto da variavel trimc
				//foi trocada pela informação da variavel imc
				tdImc.textContent = imc;
				//console.log(imc);
	}
	else
	{
		var tdImc = paciente.querySelector(".info-imc");
		tdImc.textContent = "Imc Impossível";
	}

}

function validaPeso(peso)
{
	if(peso >= 0 && peso < 1000)
	{
		return true;
	}else {
		return false;
	}

}

function validaAltura(altura)
{
	if(altura>=0 && altura <=3.0)
	{
		return true;
	}else{
		return false;
	}
}

function calculaImc(peso,altura){

	var imc = peso / ( altura*altura);
	return imc.toFixed(2);

}
