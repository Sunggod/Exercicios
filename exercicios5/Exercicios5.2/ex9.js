let n = 5;
let vetorParImpar = [];
for (let i = 0; i < n; i++) {
    vetorParImpar[i] = i % 2 === 0 ? "Par" : "Ímpar";
}
console.log("Vetor Par/Ímpar:", vetorParImpar);