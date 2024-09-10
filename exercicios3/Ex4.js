const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media > 85) {
    media += 5;
} else if (media >= 70 && media <= 85) {
    media += 3;
}

let status = media >= 60 ? "Aprovado" : "Reprovado";

console.log(`Média final: ${media.toFixed(2)}`);
console.log(`Status: ${status}`);