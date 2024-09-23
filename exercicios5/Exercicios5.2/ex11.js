let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let somaMatriz = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        somaMatriz += matriz[i][j];
    }
}
console.log("Soma da matriz:", somaMatriz);