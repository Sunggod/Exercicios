const contagemCategorias = produtos.reduce((contagem, produto) => {
    contagem[produto.categoria] = (contagem[produto.categoria] || 0) + 1;
    return contagem;
  }, {});
  console.log('Contagem de categorias:', contagemCategorias);