const produtosComDesconto = produtos.map(produto => ({
    ...produto,
    precoComDesconto: produto.preco * 0.9
  }));
  console.log('Produtos com desconto:', produtosComDesconto);
  