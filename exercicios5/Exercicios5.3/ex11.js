const filtrarPorCategoria = (categoria) => produtos.filter(produto => produto.categoria === categoria);
console.log('Produtos eletrônicos:', filtrarPorCategoria('Eletrônicos'));
