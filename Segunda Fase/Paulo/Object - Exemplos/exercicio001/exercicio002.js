let produto01 = {
    nome: 'Arroz',
    valor: 24.99
}

let produto02 = {
    nome: 'Feijão',
    valor: 18.99
}

let compras = [produto01.valor, produto02.valor]

console.log('Total das compras: R$', compras[0] + compras[1])