let matriz2x3 = [
    [1, 5, 3],
    [4, 2, 6]
];
let maiorValor = matriz2x3[0][0];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        if (matriz2x3[i][j] > maiorValor) {
            maiorValor = matriz2x3[i][j];
        }
    }
}
console.log("Maior valor:", maiorValor);