let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

while (num2 === 0) {
    console.log("VALOR INVÁLIDO");
    num2 = parseFloat(prompt("O segundo número não pode ser zero. Digite novamente:"));
}

console.log("O resultado da divisão é: " + (num1 / num2));