var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
  console.log(event.target);
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function(){
    event.target.parentNode.remove();//parentNode seleciona o pai.
  },1000);//Só retira depois do fadeOut agir



});



//  pacientes.forEach(function(paciente)
//{
//  paciente.addEventListener("dblclick",function()
//  {
//    console.log("double click");
//    this.remove();
//  });

//});
