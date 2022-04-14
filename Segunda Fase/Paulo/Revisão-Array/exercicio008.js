let produtos = []
for(i = 1; i <= 10;i++){
    produtos.push({nome: 'produto' + i, preco: i * 3.25})
}
console.log(produtos)
let precos = produtos.map((a) => a.preco)
console.log("Preços: ",precos)
console.log("Total: R$" + precos.reduce((a,b) => a + b))