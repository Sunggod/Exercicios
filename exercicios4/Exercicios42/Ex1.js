var prompt = require ("prompt-sync")()
let num   = Number(prompt("Digite um numero e descubra seu fatorial: "))
let resp = 1
if(num < 0){
    console.log("O fatorial não ta disponivel para números negatívos")
}else{
    for (let i = num; i >= 1; i--){
        resp *= i;
    }
    console.log(`O fatorial de ${num} é: ${resp}`)
}
