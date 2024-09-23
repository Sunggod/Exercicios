var prompt = require("prompt-sync")();

let cores = ["azul", "laranja", "vermelho"];
let resposta = Number(prompt("Digite um número de 1 a 3 para resgatar sua cor na array: "));
let adicionar = Number(prompt("Deseja adicionar uma cor na array? 1-Sim ou 2-Não: "));

if (adicionar === 2) {
    console.log("Entendido, vamos apenas exibir a cor desejada sem adicionar uma nova cor!");
} else if (adicionar === 1) {
    let novacor = prompt("Digite o nome da cor desejada para adicionar na array: ");
    cores.push(novacor);  
    console.log(`A nova cor "${novacor}" já foi adicionada.`);
}

switch (resposta) {
    case 1:
        console.log(`Na posição 1 da array está a cor ${cores[0]}`);
        break;
    case 2:
        console.log(`Na posição 2 da array está a cor ${cores[1]}`);
        break;
    case 3:
        console.log(`Na posição 3 da array está a cor ${cores[2]}`);
        break;
    default:
        console.log("Digite um valor válido.");
        break;
}
