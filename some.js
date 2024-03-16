//Some testa se pelo menos um elemento do array passa no teste implementado pela função fornecida.

const array = [1, 2, 3, -4, -5];

const algumNegativo = array.some(elemento => elemento < 0);
console.log(algumNegativo); 