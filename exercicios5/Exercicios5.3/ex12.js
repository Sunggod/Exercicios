let matrizIdentidade = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];
console.log("Matriz identidade:", matrizIdentidade);
const matrizComNegativos = [[1, -2], [-3, 4], [5, -6]];
const somaPositivos = matrizComNegativos.reduce((soma, linha) => 
  soma + linha.reduce((linhaSoma, valor) => linhaSoma + (valor > 0 ? valor : 0), 0), 0
);
console.log('Soma de valores positivos:', somaPositivos);