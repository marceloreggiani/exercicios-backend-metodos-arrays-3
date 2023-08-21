const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, atual, index, array) => { // posso tirar os elementos que não são usados como index e array.
    return atual.length > acumulador.length ? atual : acumulador; // ternario
});
console.log(maiorString);

