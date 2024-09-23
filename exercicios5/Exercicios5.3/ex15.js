const matrizParaFiltrar = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ];
  const matrizFiltradaETransformada = matrizParaFiltrar.map(linha => 
    linha.filter(numero => numero % 2 === 0).map(numero => numero * 3)
  );
  console.log('Matriz filtrada e transformada:', matrizFiltradaETransformada);