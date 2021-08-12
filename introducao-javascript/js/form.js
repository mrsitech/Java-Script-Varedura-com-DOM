
var adicionarPaciente = document.querySelector("#adicionar-paciente");
adicionarPaciente.addEventListener("click",function(event)
{
	event.preventDefault();
	var form = document.querySelector("#form-adiciona");

		//pegando os inputs
 		var paciente = obtemPacienteDoFormulario(form);




		var erros = validaPaciente(paciente);


		console.log(erros);

		if(erros.length > 0)
		{
			exibeMensagensErro(erros);
			//alert("paciente inválido");
			return;//se passar aqui sai da função vazio
		}

adicionaPacienteTabela(paciente);


 		form.reset();
		var ul = document.querySelector("#mensagens-erro");
		ul.innerHTML ="";//Apaga o push erro anterior, quandose aperta o botao
});

function adicionaPacienteTabela(paciente)
{
	//criando a tag tr dentro da variavel pacienteTr
	var pacienteTr = montaTr(paciente);

	//add paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
	alert("Paciente Adicionado");

}

function exibeMensagensErro(erros)
{
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML ="";//Apaga o push erro anterior, quandose aperta o botao
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});

}

  //para função nao oculta//
			//	titulo.addEventListener("click", mostraMensagem);

			//	function mostraMensagem(){
			//   console.log("Olá eu fui clicado!");
			//}


//pegando os inputs
function obtemPacienteDoFormulario(form)
{
	var paciente =
	{
		nome : form.nome.value,
		peso : form.peso.value,
		altura : form.altura.value,
		gordura : form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

//criando a estrutura tr
function montaTr(paciente)
{
	var pacienteTr = document.createElement("tr");
	//adicionando a classe paciente no block Tr
	pacienteTr.classList.add("paciente");

	//colocando td como filho do tr,
	//com td sendo criado por de dentro do paciente
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	 return pacienteTr;
}

function montaTd(dado,classe)
{
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente)
{
	var erros = [];
	if(paciente.nome.length == 0)
	{
		erros.push("Sem nome");
	}

	if(!validaPeso(paciente.peso))
	{
		erros.push("Peso inválido");
	}
	if (!validaAltura(paciente.altura))
	{
		erros.push("Altura inválida");
	}
	if(paciente.peso.length == 0)
	{
		erros.push("Sem peso");
	}
	if(paciente.altura.length == 0)
	{
		erros.push("Sem altura");
	}
	if(paciente.gordura.length == 0)
	{
		erros.push("Sem gordura");
	}

	return 	erros;
};
