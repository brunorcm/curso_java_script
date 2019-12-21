const peso1 = 1.1
const peso2 = Number('2.02')

console.log(peso1, peso2)

// verifica se é number
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.646
const avaliacao2 = 6.345

const total  = avaliacao1 * peso1 
 + avaliacao2 * peso2

 const media = total / (peso1 + peso2)

 // casas decimais toFixed
 console.log(media.toFixed(2))

 console.log(media.toString())

 // transforma em valor binário
 console.log(media.toString(2))

 console.log(typeof media)
 
console.log(typeof Number)