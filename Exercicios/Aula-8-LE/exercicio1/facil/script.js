let select = document.querySelector('select')
var paragrafo = document.querySelector('p')

select.addEventListener('change', setProduto)

function setProduto(){
    let opcao = select.value
    console.log(opcao)

    if(opcao === 'coca'){
            reg.textContext = 'Código de Origem: ' + '1'
            desc.textContext = 'Descrição: Produto que vai fuder a sua vida!'
        }else if(opcao === 'sprite'){
            reg.textContext = 'Código de Origem: ' + '5'
            desc.textContext = 'Descrição: Produto que vai fuder a sua vida mais ainda!'
        }else if(opcao === 'redbull'){
            reg.textContext = 'Código de Origem: ' + '7'
            desc.textContext = 'Descrição: Produto que vai fuder a sua vida mais ainda!'
        }else if(opcao === 'monster'){
            reg.textContext = 'Código de Origem: ' + '0'
            desc.textContext = 'Descrição: Produto que vai fuder a sua vida mais ainda!'
        }
    }
