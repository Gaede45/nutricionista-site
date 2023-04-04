var campoFiltrar = document.querySelector("#filtra-tabela");

campoFiltrar.addEventListener("input", function(){
    
    var listaPacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){

        for (var i = 0; i < listaPacientes.length; i++) {

            var paciente = listaPacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }

        } 
        
    } else {

        for (var i = 0; i < listaPacientes.length; i++) {
            var paciente = listaPacientes[i];
            paciente.classList.remove("invisivel");
        }

    }

});