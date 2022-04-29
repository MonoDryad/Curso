class Alimento
{
    #nome
    #peso
    #unidadeDeMedida
    constructor(nome,peso,unidade)
    {
        this.#nome = nome
        this.#peso = peso
        this.#unidadeDeMedida = unidade
    }

    set nome(nome)
    {
        this.#nome = nome
    }

    get nome()
    {
        return this.#nome
    }

    set peso(peso)
    {
        this.#peso = peso
    }

    get peso()
    {
        return this.#peso
    }

    set unidadeDeMedida(unidadeDeMedida)
    {
        this.#unidadeDeMedida = unidadeDeMedida
    }

    get unidadeDeMedida()
    {
        return this.#unidadeDeMedida
    }

    toString()
    {
        return `Alimento: ${this.#nome}, Peso: ${this.#peso}${this.#unidadeDeMedida}`
    }
}

let alimentos = []
let quantidadeDeAlimentos = 0

function adicionarAlimentos()
{
    let nome = document.getElementById('nomeAlimento').value
    let peso = document.getElementById('pesoAlimento').value
    let unidade = document.getElementById('unidadeAlimento').value
    alimentos.push(new Alimento(nome, peso, unidade))
    verAlimento()
}

function verAlimento()
{
    let br = document.createElement('br')
    let label = document.createElement('label')
    let labelRemove = document.createElement('label')

    br.setAttribute('class', `remover-${quantidadeDeAlimentos}-c`)

    labelRemove.setAttribute('onclick', `removerAlimento(${quantidadeDeAlimentos})`)
    labelRemove.setAttribute('style', `color: red; cursor: pointer`)
    labelRemove.setAttribute('class', `remover-${quantidadeDeAlimentos}-b`)
    labelRemove.innerHTML = '- Remover'

    label.setAttribute('id', `alimento-${quantidadeDeAlimentos}`)
    label.setAttribute('class', `remover-${quantidadeDeAlimentos}-a`)
    label.innerHTML = alimentos[quantidadeDeAlimentos].toString()
    
    document.getElementById('tabela').append(label, labelRemove, br)
    quantidadeDeAlimentos++
}

function removerAlimento(alimentoPosicao)
{
    console.log(alimentoPosicao)
    alimentos.splice(alimentoPosicao, 1)
    document.querySelector(`.remover-${alimentoPosicao}-a`).remove()
    document.querySelector(`.remover-${alimentoPosicao}-b`).remove()
    document.querySelector(`.remover-${alimentoPosicao}-c`).remove()
    quantidadeDeAlimentos--
}