const nomes = ['Ana', 'João', 'Pedro'];
const objetoNomes = nomes.reduce((obj, nome) => {
  obj[nome] = nome.length;
  return obj;
}, {});
console.log('Objeto de nomes:', objetoNomes);