const pessoasParaTransformar = [
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 35 }
  ];
  const pessoasFormatadas = pessoasParaTransformar.map(pessoa => `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
  console.log('Pessoas formatadas:', pessoasFormatadas);
  