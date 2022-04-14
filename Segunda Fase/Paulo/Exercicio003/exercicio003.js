let cadastrado = [
    {
        nome: `Nome`,
        quantidade: 4,
        valor: 12,
        total: 0
    },
    {
        nome: `Nome2`,
        quantidade: 4,
        valor: 14,
        total: 0
    },
    {
        nome: `Nome3`,
        quantidade: 4,
        valor: 16,
        total: 0
    }
]


// for(i = 0; i < cadastrado.length;i++){
//     console.log('Nome:', cadastrado[i].nome, cadastrado[i].quantidade * cadastrado[i].valor)
// }

console.log(cadastrado.map(c => c.total = c.quantidade * c.valor))

console.log(cadastrado)


