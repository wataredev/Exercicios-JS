for (let index = 10; index >= 0; index--) {
    console.log(index);
}
console.log("Feliz ano novo!!!!");
console.log("");
console.log("");

let numeroEscolhido = prompt("Digite o numero para fazer a tabuada");

for (let i = 1; i <= 10; i++) {
    let calculo = i * numeroEscolhido;
    console.log(i + " x " + numeroEscolhido + " = " + calculo);
}

console.log("");
console.log("");

let numeroContagem = 1;

while (numeroContagem != 21) {
    if (numeroContagem %2 != 0) {
        console.log(numeroContagem)
    }
    numeroContagem++
}

console.log("");
console.log("");

let numerosPares = 1;

while (numerosPares != 21) {
    let dividir = numerosPares;
    if (dividir %2 == 0) {
        var somaTotal = dividir + dividir; 
    }
    numerosPares++
}
console.log(somaTotal);

console.log("");
console.log("");

let palavra = "paralelepipedo";
let palavraSemVogais = palavra.replace(/[aeiou]/gi, "");
console.log(palavraSemVogais);

console.log("");
console.log("");

