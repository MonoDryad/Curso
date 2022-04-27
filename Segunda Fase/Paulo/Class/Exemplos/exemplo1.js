class Produto{
    constructor(nome, quantidade, preco){
        this.nome = nome
        this.quantidade = quantidade
        this.preco = preco
    }

    calcularTotal(){
        this.total = this.quantidade * this.preco
    }

    toString(){
        return `Nome: ${this.nome}, preço: ${this.preco}, quantidade: ${this.quantidade}, total: ${this.total}`
    }
}

let produto = new Produto('Samsung A3231', 6, 9239.32)
console.log(produto)

produto.calcularTotal()

console.log(produto.toString())