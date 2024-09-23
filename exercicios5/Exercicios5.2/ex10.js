let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana"];
let nomeBusca = prompt("Digite um nome para buscar:");
let mensagem = "NÃO ACHEI";
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === nomeBusca) {
        mensagem = "ACHEI";
        break;
    }
}
console.log(mensagem);