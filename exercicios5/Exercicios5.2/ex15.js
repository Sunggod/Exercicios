let matrizIdentidadeModificada = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];
for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 3; j++) {
        matrizIdentidadeModificada[i][j] = 0;
    }
}
console.log("Matriz identidade modificada:", matrizIdentidadeModificada);