//O método de array map cria um novo array com os resultados da chamada de uma função para cada elemento do array.

const foarray = [1, 2, 3];

const dobro = foarray.map(elemento => elemento * 2);
console.log(dobro); // Saída: [2, 4, 6]