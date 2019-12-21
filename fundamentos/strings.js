const escola = 'Cod3r'

//ok
console.log(escola.charAt(4))
// não gera erro
console.log(escola.charAt(5))
// retorna o valor do caracter na tabela ASCII
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('r'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //nao inclui o indice 3

console.log('EScola '.concat(escola).concat("!"))

console.log('EScola ' + 3 + 2 + "!")

console.log(escola.replace(3, 'e'))

console.log(escola.replace(/\d/, 'e')) //troca todos os digitos pela letra e

console.log(escola.replace(/\w/g, 'e')) //troca todos os caracteres pela letra e

console.log('Ana, Maria, Pedro'.split(','))

console.log('3' + 2) //a string ganha!



