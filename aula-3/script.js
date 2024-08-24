let numeroUm;
let numeroDois;

function atualizarValores() {
    numeroUm = parseFloat(document.getElementById("numeroUm").value) || 0;
    numeroDois = parseFloat(document.getElementById("numeroDois").value) || 0;
}

//Atividade 1
function soma() {
    atualizarValores();
    document.getElementById("resultadoConta").value = numeroUm + numeroDois;
}

function subtrair() {
    atualizarValores();
    document.getElementById("resultadoConta").value = numeroUm - numeroDois;
}

function multiplicar() {
    atualizarValores();
    document.getElementById("resultadoConta").value = numeroUm * numeroDois;
}

function divisao() {
    atualizarValores();
    if (numeroDois != 0) {
        document.getElementById("resultadoConta").value = numeroUm / numeroDois;
    } else {
        document.getElementById("resultadoConta").value = "Impossivel dividir por zero";
    }
    
}


//Atividade 2 

function primo() {
    let numeroPrimo = parseInt(document.getElementById("numeroPrimo").value);
    if (numeroPrimo % 2 != 0) {
        document.getElementById("resultadoPrimo").value = "O número é Primo!";
    } else {
        document.getElementById("resultadoPrimo").value = "O número não é Primo!";
    }
}

//Atividade 3 

function caractere() {
    let texto = document.getElementById("stringCaractere").value;
    let caracteresEspecias = "@#$%&"
    let contador = 0;

    for (let index = 0; index < texto.length; index++) {
        if (caracteresEspecias.includes(texto[index])) {
            contador++
        }
    }
    
    document.getElementById("resultadoCaractere").value = `Total de caracteres = ${contador}`;
}

//Atividade 4
function media() {
    let nota1 = parseInt(document.getElementById("nota1").value)
    let nota2 = parseInt(document.getElementById("nota2").value)
    let nota3 = parseInt(document.getElementById("nota3").value)
    let nota4 = parseInt(document.getElementById("nota4").value)

    if (nota1 >= 11 || nota2 >= 11 || nota3 >= 11 || nota4 >= 11) {
        document.getElementById("resultadoNota").value = "Não existe nota maior que 10"
    } else {
        let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
        if (mediaFinal <= 3) {
            document.getElementById("resultadoNota").value = `Reprovado! Média = ${mediaFinal}`
        } else if (mediaFinal <= 6) {
            document.getElementById("resultadoNota").value = `Recuperação! Média = ${mediaFinal}`
        } else {
            document.getElementById("resultadoNota").value = `Aprovado!! Média = ${mediaFinal}`
        }
    }

    
}

//Atividade 5 
var numeroEscolhido = parseInt((Math.random() * (100 - 1 + 1)));
console.log(numeroEscolhido);

function chutar() {
    let chute = parseInt(document.getElementById("numeroAleatorio").value)
    if (chute == numeroEscolhido) {
        document.getElementById("resultadoAleatorio").value = `Você acertou !! = num ${numeroEscolhido}`
    } else if (chute < numeroEscolhido) {
        document.getElementById("resultadoAleatorio").value = "O número é maior !!"
    } else {
        document.getElementById("resultadoAleatorio").value = "O número é menor !!"
    }
}

function novoNumero() {
    var numeroEscolhido = parseInt((Math.random() * (100 - 1 + 1)));
    console.log(numeroEscolhido);
}