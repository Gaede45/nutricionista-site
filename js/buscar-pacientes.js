var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    console.log("Buscando pacientes...")
 
    // Criando objeto para realizar a requisição
    var xhr = new XMLHttpRequest;

    // Orientando objeto com o método e o endereço a ser buscado
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    
    // Enviando os dados que foram requisitados
    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-AJAX");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
           }); 
        } else {
            console.log("erro ao buscar pacientes")
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});