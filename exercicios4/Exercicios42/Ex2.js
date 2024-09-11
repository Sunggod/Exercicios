var prompt = require ("prompt-sync")()
let t = Number(prompt("Digite o numero de linhas do triangulo"))

for (let i =  1; i <= t; i++){
    let linha = '';
    for (let j = 1; j <= i; j++){
        linha += '*';

    }
    console.log(linha);
}