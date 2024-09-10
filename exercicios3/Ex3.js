const prompt = require('prompt-sync')();

let vendasMes1 = parseFloat(prompt("Digite as vendas do primeiro mês: "));
let vendasMes2 = parseFloat(prompt("Digite as vendas do segundo mês: "));
let vendasMes3 = parseFloat(prompt("Digite as vendas do terceiro mês: "));

let totalVendas = vendasMes1 + vendasMes2 + vendasMes3;
let comissaoTotal;

if (totalVendas < 5000) {
    comissaoTotal = 0;
} else if (totalVendas >= 5000 && totalVendas <= 10000) {
    comissaoTotal = totalVendas * 0.05;
} else {
    comissaoTotal = totalVendas * 0.10;
}

console.log(`Total de vendas: R$ ${totalVendas.toFixed(2)}`);
console.log(`Comissão total: R$ ${comissaoTotal.toFixed(2)}`);  