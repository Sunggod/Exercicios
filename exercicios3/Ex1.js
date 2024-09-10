const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Digite o primeiro número: "));
let b = parseFloat(prompt("Digite o segundo número: "));
let c = parseFloat(prompt("Digite o terceiro número: "));

let resultado;

if (a < b && b < c) {
    resultado = "Os números estão em ordem crescente.";
} else if (a > b && b > c) {
    resultado = "Os números estão em ordem decrescente.";
} else {
    resultado = "Os números estão desordenados.";
}

console.log(resultado);