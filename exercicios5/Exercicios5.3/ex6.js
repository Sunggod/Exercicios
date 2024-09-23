const somaPrecos = produtos.reduce((soma, produto) => soma + produto.preco, 0);
console.log('Soma total de preços:', somaPrecos);
