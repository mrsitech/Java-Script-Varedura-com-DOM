var botaoAdicionar = document.querySelector("#buscar-pacientes");

//Add pacientes externos metodo AJAX: JSon.
botaoAdicionar.addEventListener("click", function()
{
  alert("buscando pacientes. ...");

  var xhr = new XMLHttpRequest();
  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes/111111");
  xhr.addEventListener("load",function(){
    var erroAjax = document.querySelector("#erro-ajax");
    if(xhr.status == 200)
    {
      erroAjax.classList.add("invisivel");

      var resposta = xhr.responseText;

      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente)
      {
        adicionaPacienteTabela(paciente);
      });

    }else {
      alert(xhr.status);
      alert(xhr.responseText + "Fale com seu administrador WEB.");

      erroAjax.classList.remove("invisivel");
    }



  })
  xhr.send();
});
