const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const numerosCrescente = numeros.sort((a, b) => {
    return a - b;
})
console.log(numerosCrescente);  // resolução letra A

const numerosDecrescente = numeros.sort((a, b) => {
    return b - a;
})
console.log(numerosDecrescente); // resolução lebra B

const numeroUnicode = numeros.sort();
console.log(numeroUnicode); // resolução letra C

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
const frutasOrdemAlfabetica = frutas.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    return 0;
})
console.log(frutasOrdemAlfabetica); // resolução letra D

const frutasOrdemAlfabeticaDecrescente = frutas.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return 1;
    }
    return 0;
})
console.log(frutasOrdemAlfabeticaDecrescente); // resolução letra E

const frutasOrdemAlfabeticaPorCaracter = frutas.sort((a, b) => {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
})
console.log(frutasOrdemAlfabeticaPorCaracter); // resolução letra F