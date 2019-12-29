// armazenando uma função em uma variável
const imprimirSoma = function(a, b) { //função anonima = função sem nome
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {  // o arrow substitui o nome 'function'
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(4, 2))

const imprimir2 = a => console.log(a)
imprimir2('massaaa')