let classi = 0
let botao = document.getElementById("botaoverificar")

const procurar = function (){
    let idproduto = document.getElementById('idproduto').value
    console.log(idproduto)
    switch(idproduto){
        case '1':
            nome.textContent = 'Nome: Chuteira Nike Superfly 8 Academy KM Infantil'
            descriçao.textContent = 'Descrição: Incorpore o ritmo implacável de Kylian Mbappé com a Nike Jr. Mercurial Superfly 8 Academy KM MG. As chamas em toda a parte de cima dão um look rápido aos seus pés e a boca elástica cria um ajuste perfeito que se move com você ao deixar os zagueiros para trás.'
            preço.textContent = 'R$ 479,99'
            classi = 3
            botao.disabled = false
            botao.style.opacity = 1
            break
        case '2':
            nome.textContent = 'Nome: Escova de Dente Redonda'
            descriçao.textContent = 'Descrição: Uma escova de dente recomendada por todos os maiores dentistas do mundo.'
            preço.textContent = 'R$ 23,99'
            classi = 4
            botao.disabled = false
            botao.style.opacity = 1
            break
        case '3':
            nome.textContent = 'Nome: Peito de Frango'
            descriçao.textContent = 'Descrição: Peito de frango, o melhor que tem.'
            preço.textContent = 'R$ 31,99'
            classi = 2
            botao.disabled = false
            botao.style.opacity = 1
            break
        case '4':
            nome.textContent = 'Nome: Macarrão Parafuso'
            descriçao.textContent = 'Descrição: Macarrão em formato de parafuso, 2kg por pacote.'
            preço.textContent = 'R$ 19,99'
            classi = 1
            botao.disabled = false
            botao.style.opacity = 1
            break
        case '5':
            nome.textContent = 'Nome: Café Preto Extra Forte'
            descriçao.textContent = 'Descrição: Café preto extra forte.'
            preço.textContent = 'R$ 22,99'
            classi = 1
            botao.disabled = false
            botao.style.opacity = 1
            break
        case '6':
            nome.textContent = 'Nome: Coca-Cola 1L'
            descriçao.textContent = 'Refrigerante gostoso e super saúdavel!.'
            preço.textContent = 'R$ 31,99'
            classi = 2
            botao.disabled = false
            botao.style.opacity = 1
            break
        case '7':
            nome.textContent = 'Nome: Álcool'
            descriçao.textContent = 'Descrição: Álcool hospitalar 70%.'
            preço.textContent = 'R$ 12,99'
            classi = 5
            botao.disabled = false
            botao.style.opacity = 1
            break
        case '8':
            nome.textContent = 'Nome: Sabão em pó'
            descriçao.textContent = 'Descrição: Sabão em pó.'
            preço.textContent = 'R$ 19,49'
            classi = 5
            botao.disabled = false
            botao.style.opacity = 1
            break
        case '9':
            nome.textContent = 'Nome: Aspirador de pó'
            descriçao.textContent = 'Descrição: Aspirador de pó eficiente no uso de energia.'
            preço.textContent = 'R$ 479,99'
            classi = 5
            botao.disabled = false
            botao.style.opacity = 1
            break
        case '10':
            nome.textContent = 'Nome: Camisa Regional'
            descriçao.textContent = 'Descrição: Camisa com a escrita "Regional".'
            preço.textContent = 'R$ 109,19'
            classi = 3
            botao.disabled = false
            botao.style.opacity = 1
            break
        default:
            nome.textContent = 'Produto não encontrado!'
            descriçao.textContent = ''
            preço.textContent = ''
            classif.textContent = ''
            classi = 0
            botao.disabled = true
            botao.style.opacity = 0.6
    }
}

const verificar = function (){
    switch(classi){
        case 1:
            classif.textContent = 'Classificação: Alimento não-perecível'
            break
        case 2:
            classif.textContent = 'Classificação: Alimento perecível'
            break
        case 3:
            classif.textContent = 'Classificação: Vestuário'
            break
        case 4:
            classif.textContent = 'Classificação: Higiene pessoal'
            break
        case 5:
            classif.textContent = 'Classificação: Limpeza e utensílios domésticos'
            break
        default:
            classif.textContent = 'Produto não encontrado!'
    }
}