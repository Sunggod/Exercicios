var prompt = require("prompt-sync")();

let ano;
do{
    ano = parseInt(prompt("Digite um ano (0 para sair): "), 10);
    if (ano !== 0){
        if((ano >= 1930 && (ano - 1930) % 4 === 0) && (ano !== 1942 && ano !== 1946)){
            console.log(`${ano} é um ano de copa do mundo`)
            
        }else{
            console.log(`${ano} não é um ano de copa do mundo`)

        }
    }
}while(ano !== 0);