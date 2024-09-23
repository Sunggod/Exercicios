let vetorBusca = [10, 20, 30, 40, 50];
let elementoBusca = 30;
let encontrado = false;
for (let i = 0; i < vetorBusca.length; i++) {
    if (vetorBusca[i] === elementoBusca) {
        encontrado = true;
        break;
    }
}
console.log("Elemento encontrado:", encontrado);