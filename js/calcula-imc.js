var titulo = document.querySelector(".titulo");

titulo.textContent = "ALZ Nutricionista";

var listaDePacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < listaDePacientes.length ; i++) {
    
    var paciente = listaDePacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    var pesoValido = validaPeso(peso);

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    var alturaValida = validaAltura(altura);


    var tdimc = paciente.querySelector(".info-imc");
    
    if (!pesoValido) {
        console.log("Peso Inválido");
        tdimc.textContent = "Paciente inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaValida) {
        console.log("Altura inválida");
        tdimc.textContent = "Paciente inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (pesoValido && alturaValida == true) {
        var imc = calculaImc(peso, altura);
        tdimc.textContent = imc;
    }

}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}