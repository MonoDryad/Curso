let produtos = [
    {nome: "ProdutoA", preco: 20.00, validade: true},
    {nome: "ProdutoB", preco: 70.00, validade: false},
    {nome: "ProdutoC", preco: 90.00, validade: false},
    {nome: "ProdutoD", preco: 50.00, validade: false},
    {nome: "ProdutoE", preco: 30.00, validade: true},
    {nome: "ProdutoF", preco: 40.00, validade: true},
    {nome: "ProdutoG", preco: 15.00, validade: false},
    {nome: "ProdutoH", preco: 23.00, validade: false},
    {nome: "ProdutoI", preco: 25.00, validade: true},
    {nome: "ProdutoJ", preco: 120.00, validade: false},
    {nome: "ProdutoK", preco: 1500.00, validade: false},
    {nome: "ProdutoL", preco: 1000.00, validade: false},
    {nome: "ProdutoM", preco: 300.00, validade: true},
    {nome: "ProdutoN", preco: 75.00, validade: true},
    {nome: "ProdutoO", preco: 10.00, validade: true},
    {nome: "ProdutoP", preco: 5.00, validade: false},
    {nome: "ProdutoQ", preco: 500.00, validade: false},
    {nome: "ProdutoR", preco: 100.00, validade: false},
    {nome: "ProdutoS", preco: 34.00, validade: true},
    {nome: "ProdutoT", preco: 27.00, validade: false},
    {nome: "ProdutoU", preco: 29.99, validade: true},
    {nome: "ProdutoV", preco: 34.44, validade: false},
    {nome: "ProdutoW", preco: 60.90, validade: false},
    {nome: "ProdutoX", preco: 50.99, validade: true},
    {nome: "ProdutoY", preco: 12.34, validade: false},
    {nome: "ProdutoZ", preco: 14.44, validade: false},
    {nome: "ProdutoAA", preco: 70.50, validade: false},
    {nome: "ProdutoAB", preco: 40.50, validade: true},
    {nome: "ProdutoAC", preco: 50.99, validade: false},
    {nome: "ProdutoAD", preco: 30.99, validade: true},
    {nome: "ProdutoAE", preco: 40.99, validade: false},
]
for(i = 0; i < produtos.length;i++){
    console.log("Nome: ", produtos[i].nome, " Preço: R$", produtos[i].preco)
}

console.log("Dentro da Validade: ", produtos.filter(p => p.validade))
console.log("Entre R$50,00 A R$100,00: ", produtos.filter(p => p.preco >= 50 && p.preco <= 100))