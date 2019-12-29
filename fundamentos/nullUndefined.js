let valor //nao inicialiada - undefined
console.log(valor)

//console.log(valor2) - nem sequer foi declarada

valor = null // ausencia de valor (não aponta pra nada), porem nesse ponto foi definida

console.log(valor)
//console.log(valor.toString()) erro - nao existe toString de null

const produto = {}
console.log(produto.preco) // undefined - preço nao esta definido como propriedade

console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(produto)
console.log(!!produto.preco)





