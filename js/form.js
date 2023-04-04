var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Adicionando função ao clicar no botão
botaoAdicionar.addEventListener("click", adicionarPaciente);


function adicionarPaciente(event) {
    event.preventDefault();


    // Removendo mensagem de erro 
    // removeMensagemDeErro(document.querySelector("#mensagem-erro")); >> Outra Alternativa
    document.querySelector("#mensagem-erro").innerHTML = "";


    var form = document.querySelector("#form-adiciona");

    // Extraindo informações do paciente no formulário
    var paciente = obtemInfosPacienteDoFormulario(form);


    // Cria a tr e td do paciente
    var pacienteTr = montaTr(paciente);


    // Validando campos do Formulário
    var erro = validaPaciente(paciente);
    
    if(erro.length > 0){
        exibeMensagemDeErro(erro);

        return;
    }

    // Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


    // Limpando os campos do formulário
    form.reset();

}

function obtemInfosPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    } // Criando objeto 

    return paciente
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.trim().length == 0 || paciente.peso.trim().length == 0 || paciente.altura.trim().length == 0 || paciente.gordura.trim().length == 0) {
        erros.push("*Campo em branco");
        console.log("branco")
    }

    if(!validaPeso(paciente.peso)){
        erros.push("*Peso inválido");
        console.log("peso")
    } 

    if(!validaAltura(paciente.altura)){
        erros.push("*Altura inválida");
        console.log("altura")
    }

    return erros;
}


function exibeMensagemDeErro(erro){
    var ul = document.querySelector("#mensagem-erro");

    erro.forEach(function(erroElemento){
        var li = document.createElement("li");
        li.textContent = erroElemento;
        li.classList.add('elemento-filho');
        ul.appendChild(li); 
    });
        
}

function removeMensagemDeErro(ul){
    while((ul.querySelectorAll(".elemento-filho")).length > 0) {
        var li = ul.querySelector(".elemento-filho");
        ul.removeChild(li);
    }
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}
    