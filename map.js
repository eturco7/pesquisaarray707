//Map cria um novo array com os resultados da chamada de uma função para cada elemento do array.

const array = [1, 2, 3];

const dobro = array.map(elemento => elemento * 2);
console.log(dobro); // Saída: [2, 4, 6]