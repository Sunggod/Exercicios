const prompt = require('prompt-sync')();

let senha = prompt("Digite uma senha para verificar: ");

let comprimentoValido = senha.length >= 8;
console.log(comprimentoValido)
let temMaiuscula = /[A-Z]/.test(senha);
console.log(temMaiuscula)
let temMinuscula = /[a-z]/.test(senha);
console.log(temMinuscula)
let temNumero = /\d/.test(senha);
console.log(temNumero)
let temEspecial = /[@#$%^&+=]/.test(senha);
console.log(temEspecial)

let senhaForte =  comprimentoValido && temMaiuscula && temMinuscula && temNumero && temEspecial;


if (senhaForte) {
    console.log("A senha é forte!");
} else {
    console.log("A senha não atende aos critérios de segurança.");
}