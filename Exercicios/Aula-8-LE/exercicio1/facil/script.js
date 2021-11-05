let select = document.querySelector('select')
var pre = 0

select.addEventListener('change', setProduto)

function setProduto(){
    let opcao = select.value

    console.log(opcao)

    if(opcao === 'Nenhum'){
        paragrafo.textContent = 'Escolha uma opção!'
        nome.textContent = 'Nome:'
        descrição.textContent = 'Descrição:'
        cdo.textContent = 'Código de Origem:'
        pre = 8
    }else if(opcao === 'Shampoo'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' de Cavalo'
        descrição.textContent = 'Descrição: Shampoo perfeito para você'
        cdo.textContent = 'Código de Origem: ' + '2'
        pre = 2
    }else if(opcao === 'Acessorios'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' de Cachorro'
        descrição.textContent = 'Descrição: Acessório para cachorro!'
        cdo.textContent = 'Código de Origem: ' + '0'
        pre = 0
    }else if(opcao === 'Maquiagem'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' para Ovelhas'
        descrição.textContent = 'Descrição: Ovelhas maquiadas (bonecos)'
        cdo.textContent = 'Código de Origem: ' + '1'
        pre = 1
    }else if(opcao === 'Relogios'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' colorido'
        descrição.textContent = 'Descrição: Relógio coloridinho para seu filho!'
        cdo.textContent = 'Código de Origem: ' + '7'
        pre = 7
    }else if(opcao === 'Colar'){
        paragrafo.textContent = 'Você selecionou a opção: ' + opcao
        nome.textContent = 'Nome: ' + opcao + ' de Cavalo'
        descrição.textContent = 'Descrição: Colar perfeito para você'
        cdo.textContent = 'Código de Origem: ' + '4'
        pre = 4
    }
}

function verificar(){
    console.log(pre)
    switch(pre){
        case 1:
            regiao.textContent = 'Região: Sul'
        break;
        case 2:
            regiao.textContent = 'Região: Norte'
        break;
        case 3:
            regiao.textContent = 'Região: Leste'
        break;
        case 4:
            regiao.textContent = 'Região: Oeste'
        break;
        case 5:
            regiao.textContent = 'Região: Nordeste'
        break;
        case 6:
            regiao.textContent = 'Região: Sudeste'
        break;
        case 7:
            regiao.textContent = 'Região: Centro-Oeste'
        break;
        case 0:
            regiao.textContent = 'Região: Fora do País'
        break;
        default:
            regiao.textContent = 'Não selecionado'
    }
}