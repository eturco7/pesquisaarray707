//O método de array some testa se pelo menos um elemento do array passa no teste implementado pela função fornecida.

const trearray = [1, 2, 3, -4, -5];

const algumNegat = trearray.some(elemento => elemento < 0);
console.log(algumNegat); 