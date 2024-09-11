var prompt = require("prompt-sync")();
let palavra = prompt("Digite uma palavra: ");
let letra = prompt("Digite uma letra: ");
let contagem = 0;

palavra = palavra.toLowerCase();
letra = letra.toLowerCase();

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
        contagem++;
    }
}

console.log(`A letra '${letra}' aparece ${contagem} vezes na palavra '${palavra}'.`);
