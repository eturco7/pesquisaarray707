//Reduce aplica uma função contra um acumulador e cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.

const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(soma); // Saída: 15