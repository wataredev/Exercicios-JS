
function calcularTabuada() {
    let pegarNumero = parseInt(document.getElementById("escolhaTabuada").value);
    let resultado = "";
    for (let i = 0; i <= 10; i++) {
        if (i == 3) {
            continue;
        }
        let calculo = pegarNumero * i;
        resultado += pegarNumero + " x " + i + " = " + calculo + "\n";
    }
    document.getElementById("tabuada").value = resultado;
}

let numerosLista = [1, 2, 3, 4];

function calcularNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(calcularNumeros(numerosLista));