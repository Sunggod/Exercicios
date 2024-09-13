
var prompt = require ('prompt-sync')();
const nota1 =  Number(prompt('Digite a primeira nota do aluno: '))
const nota2 =  Number(prompt('Digite a segunda nota do aluno: '))
const media = (nota1 + nota2)/2
console.log(`A media do aluno é ${media}`)
let pergunta = prompt('Você deseja calcular a media de outro aluno? Digite 1 - Sim || Digite 2 - Não ')
do{ 
    if (pergunta == 1 || pergunta == "Sim"){
        const nota1 =  Number(prompt('Digite a primeira nota do aluno: '))
        const nota2 =  Number(prompt('Digite a segunda nota do aluno: '))
        const media = (nota1 + nota2)/2
        console.log(`A media do aluno é ${media}`)
        pergunta = prompt('Você deseja calcular a media de outro aluno? Digite 1 - Sim || Digite 2 - Não ')
    }       
}while(pergunta == 1);