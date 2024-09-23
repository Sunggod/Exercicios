const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoa) => 
    pessoa.idade > maisVelha.idade ? pessoa : maisVelha
  );
  console.log('Pessoa mais velha:', pessoaMaisVelha);