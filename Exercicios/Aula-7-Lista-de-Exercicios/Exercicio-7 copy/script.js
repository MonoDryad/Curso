// 7 – Detalhes de um produto
// Crie uma página na qual você possa selecionar um produto utilizando a tag select. A cada produto
// selecionado informe ao usuário informações detalhadas do produto: nome, descrição, preço, quantidade em
// estoque.

let select = document.querySelector('select')
var paragrafo = document.querySelector('p')
var paragrafo2 = document.querySelector('nome')

select.addEventListener('change', setProduto)

function setProduto(){
    let opcao = select.value
    console.log(opcao)

    if(opcao === 'Nenhum'){
        paragrafo.textContent = 'Escolha uma opção!'
        nome.textContent = 'Nome:'
        descrição.textContent = 'Descrição:'
        preço.textContent = 'Preço:'
        estoque.textContent = 'Estoque:'
    }else if(opcao === 'Shampoo'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' de Cavalo'
        descrição.textContent = 'Descrição: Shampoo perfeito para você'
        preço.textContent = 'Preço: R$27,00'
        estoque.textContent = 'Estoque: 102'
    }else if(opcao === 'Acessorios'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' de Cachorro'
        descrição.textContent = 'Descrição: Acessório para cachorro!'
        preço.textContent = 'Preço: R$52,00'
        estoque.textContent = 'Estoque: 3'
    }else if(opcao === 'Maquiagem'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' para Ovelhas'
        descrição.textContent = 'Descrição: Ovelhas maquiadas (bonecos)'
        preço.textContent = 'Preço: R$84,99'
        estoque.textContent = 'Estoque: 0'
    }else if(opcao === 'Relogios'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' colorido'
        descrição.textContent = 'Descrição: Relógio coloridinho para seu filho!'
        preço.textContent = 'Preço: R$8,00'
        estoque.textContent = 'Estoque: 674'
    }else if(opcao === 'Colar'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' de Cavalo'
        descrição.textContent = 'Descrição: Colar perfeito para você'
        preço.textContent = 'Preço: R$34,00'
        estoque.textContent = 'Estoque: 3'
    }
}

