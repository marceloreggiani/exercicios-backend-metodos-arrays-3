const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const mariorNumero = numeros.reduce((acumulador, atual) => {
    return Math.max(acumulador, atual);
})
console.log(mariorNumero);