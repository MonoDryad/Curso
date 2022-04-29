class Loja
{
    #nome
    constructor(nome)
    {
        this.#nome = nome
    }
    
    get nome()
    {
        return this.#nome
    }
    
    set nome(nome)
    {
        this.#nome = nome
    }
}
let loja = new Loja('Americanas')
loja.nome = 'wefwefw'
console.log(loja.nome)