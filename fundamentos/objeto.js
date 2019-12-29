const prod1 = {}
prod1.nome = 'Celular super'
prod1.preco = 4888.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

prod2['desconto legal'] = 0.30
console.log(prod2)

'{"nome": "Camisa polo", "preco": "200"}' //json eh diferente
// de objeto - json éh formato textual

