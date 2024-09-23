const produtosParaAgrupar = [
    { nome: 'Caneta', preco: 3 },
    { nome: 'Notebook', preco: 1500 },
    { nome: 'Livro', preco: 40 },
    { nome: 'Smartphone', preco: 900 }
  ];
  const produtosAgrupados = produtosParaAgrupar.reduce((grupos, produto) => {
    if (produto.preco > 50) {
      grupos.maisDe50.push(produto);
    } else {
      grupos.menosOuIgualA50.push(produto);
    }
    return grupos;
  }, { maisDe50: [], menosOuIgualA50: [] });
  console.log('Produtos agrupados por preço:', produtosAgrupados);