let alcool = 0, gasolina = 0, diesel = 0;
let codigo;

do {
    codigo = parseInt(prompt("Informe o código do combustível (1.Álcool 2.Gasolina 3.Diesel 4.Fim):"));
    
    switch(codigo) {
        case 1:
            alcool++;
            console.log("Álcool");
            break;
        case 2:
            gasolina++;
            console.log("Gasolina");
            break;
        case 3:
            diesel++;
            console.log("Diesel");
            break;
        case 4:
            break;
        default:
            console.log("Código inválido");
    }
} while (codigo !== 4);

console.log("MUITO OBRIGADO");
console.log("Álcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);