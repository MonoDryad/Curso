class Livro
{
    #titulo
    #autor
    #editora
    #ano
    constructor(ano, titulo, autor, editora)
    {
        this.#ano = ano
        this.#editora = editora
        this.#autor = autor
        this.#titulo = titulo
    }

    get titulo()
    {
        return this.#titulo
    }
    
    set titulo(titulo)
    {
        this.#titulo = titulo
    }

    get ano()
    {
        return this.#ano
    }

    set ano(ano)
    {
        this.#ano = ano
    }

    get autor()
    {
        return this.#autor
    }

    set autor(autor)
    {
        this.#autor = autor
    }

    get editora()
    {
        return this.#editora
    }

    set editora(editora)
    {
        this.#editora = editora
    }

    toString(){
        return `${this.#titulo} é um livro do autor ${this.#autor}, publicado pela ${this.#editora} em ${this.#ano}.`
    }
}

let meuLivro = new Livro(1999, 'Star Trek: A Viajem', 'Northn', 'Paramount')
console.log(meuLivro.toString())