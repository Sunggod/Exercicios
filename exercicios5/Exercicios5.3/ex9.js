const listasStrings = [['a', 'b'], ['c', 'd'], ['e', 'f']];
const listasConcatenadas = listasStrings.reduce((acc, curr) => acc.concat(curr), []);
console.log('Listas concatenadas:', listasConcatenadas);
