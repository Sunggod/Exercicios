const { convertToObject } = require("typescript");

let array = [
    { name: "vini", idade: 200, id: 1 },
    { name: "ana", idade: 25, id: 2 },
    { name: "joão", idade: 30, id: 3 },
    { name: "maria", idade: 28, id: 4 }
];

// let idToFind = 2;
// let resultado = array.find(item => item.id === idToFind);

// console.log(resultado); // { name: "ana", idade: 25, id: 2 }
let resultado = array.find(pessoa => pessoa.id === 3)
JSON.stringify(resultado)
console.log(resultado)