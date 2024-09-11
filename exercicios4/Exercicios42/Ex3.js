var prompt = require ("prompt-sync")()

let num = Number(prompt("Digite o numero que deseja saber a taboada: "))
for (let i = 1; i <= 10; i++){
    let resposta = i * num 
    console.log(resposta)
}