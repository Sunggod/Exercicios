const pessoas = [
    { nome: 'Ana', idade: 25, profissao: 'Engenheira' },
    { nome: 'João', idade: 30, profissao: 'Professor' },
    { nome: 'Maria', idade: 35, profissao: 'Médica' }
  ];
  const mediaIdade = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0) / pessoas.length;
  console.log('Média de idade:', mediaIdade);