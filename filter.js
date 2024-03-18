//O método filter cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.

const myarray = [1, 2, 3, 4, 5];

const paresss = myarray.filter(elemento => elemento % 2 === 0);
console.log(paresss); // Saída: [2, 4]