let campeonatos = [
    {nome: "Gaia Cup", preco: 0.00, isGood: true},
    {nome: "Crime League", preco: 60.00, isGood: false},
    {nome: "Empoliga", preco: 5.15, isGood: true},
    {nome: "Liga GG", preco: 5.35, isGood: true},
    {nome: "Wolfie", preco: 0.00, isGood: false},
    {nome: "Liga Esplendente", preco: 20.00, isGood: false},
    {nome: "LCE Masters", preco: 50.00, isGood: false},
]
console.clear()
console.log("Campeonatos: ", campeonatos)
console.log("Confiáveis: ", campeonatos.filter(b => b.isGood && b.preco <= 5.25))