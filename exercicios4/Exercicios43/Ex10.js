let soma = 0;

for (let i = 0; i < 10; i++) {
    let valor = parseFloat(prompt(`Digite o ${i+1}º valor:`));
    soma += valor;
}

let media = soma / 10;
console.log("A média aritmética é: " + media.toFixed(2));