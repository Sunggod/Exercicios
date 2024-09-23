const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'João', nota: 6 },
    { nome: 'Maria', nota: 9 }
  ];
  const alunosAprovados = alunos.filter(aluno => aluno.nota > 7);
  console.log('Alunos aprovados:', alunosAprovados);