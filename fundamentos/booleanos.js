let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// let sempre quando precisar alterar a variável

isAtivo = 1
console.log(!!isAtivo) //não-não de true = true

console.log('os verdadeiros....')
console.log(!!3)
console.log(!!-1)
//todos os numeros inteiros sao verdadeiros com excecao do zero

console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos..")
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar")
console.log(!!('' || null || 0 || 'epa')) //pelo menos um verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')
