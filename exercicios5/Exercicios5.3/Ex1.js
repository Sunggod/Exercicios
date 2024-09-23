// 1. Filtrar produtos caros
const produtos = [
    { nome: 'Celular', preco: 1500, categoria: 'Eletrônicos' },
    { nome: 'Livro', preco: 50, categoria: 'Livros' },
    { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' }
  ];
  const produtosCaros = produtos.filter(produto => produto.preco > 100);
  console.log('Produtos caros:', produtosCaros);