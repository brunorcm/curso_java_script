// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2, 9, 4, 5, 6, 7)
imprimirSoma()

// funcao com retorno

function soma(a, b = 1) { // valor padrao de B quando o mesmo nao for passado para a função

    return a + b;

}

soma(2,3)
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())





