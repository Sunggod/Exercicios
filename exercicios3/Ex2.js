const prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Digite o primeiro lado: "));
let lado2 = parseFloat(prompt("Digite o segundo lado: "));
let lado3 = parseFloat(prompt("Digite o terceiro lado: "));
let lado4 = parseFloat(prompt("Digite o quarto lado: "));

let resultado;

if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
    resultado = "É um quadrado.";
} else if ((lado1 === lado3 && lado2 === lado4) || (lado1 === lado2 && lado3 === lado4)) {
    if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
        resultado = "É um losango.";
    } else {
        resultado = "É um retângulo.";
    }
} else {
    resultado = "É outro tipo de quadrilátero.";
}

console.log(resultado);