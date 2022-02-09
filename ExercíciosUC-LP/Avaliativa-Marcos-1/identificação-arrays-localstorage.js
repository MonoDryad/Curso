// VARIAVEIS - Let, Const, Var
// FUNCOES - Function e Arrow Function
// CONDICIONAL - If e Switch
// REPETICAO - For, While
// LOCALSTORAGE - set e get
// JSON - pegar e inserir atributos

// -------

// Criar um projeto com 2 paginas, uma pagina com formulário inserindo os dados no LocalStorage e outra buscando esses dados e apresentado de forma organizada para o usuário.

// Devera realizar validações dos dados com CONDICIONAL e apresentar os dados com a estrutura de REPETICAO.

$('.divClassHiddenSlc').hide()

const allPlayers = JSON.parse(localStorage.getItem('allPlayers')) || []
const allStaffs = JSON.parse(localStorage.getItem('allStaffs')) || []
const allOrgs = JSON.parse(localStorage.getItem('allOrgs')) || []

let newPlayer = {
    nomeUsuario: null,
    nomeInvocador: null,
    rota: null,
    codigo: 0
}

let newStaff = {
    nomeUsuario: null,
    apelido: null,
    funcao: null,
    codigo: 0
}

let newOrg = {
    nomeOrg: null,
    tagOrg: null,
    jogadores: [],
    reservas: [],
    staff: [],
    codigo: 0
}

$('.selectTypeUser').change(function(){
    switch($('.selectTypeUser option:selected').val()){
        case 'Jogador':
            $('.divPlayerSelected').show()
            $('.divStaffSelected').hide()
            break
        case 'Staff':
            $('.divPlayerSelected').hide()
            $('.divStaffSelected').show()
            break
    }
})

$('.btnSubmitNewStaff').click(function(){
    newStaff = {
        nomeUsuario: $('.userName').val(),
        apelido: $('.apelidoStaff').val(),
        funcao: $('.selectRoleStaff option:selected').val(),
        codigo: allStaffs.length+1
    }

    allStaffs.push(newStaff)
    localStorage.setItem('allStaffs', JSON.stringify(allStaffs))
})

$('.btnSubmitNewPlayer').click(function(){
    newPlayer = {
        nomeUsuario: $('.userName').val(),
        invocador: $('.nomeInvocador').val(),
        funcao: $('.selectRolePlayer option:selected').val(),
        codigo: allPlayers.length+1
    }

    allPlayers.push(newPlayer)
    localStorage.setItem('allPlayers', JSON.stringify(allPlayers))
})

$('.btnSubmitNewOrg').click(function(){
    newOrg = {
        nomeOrg: $('.inpNameOrg').val(),
        tagOrg: $('.inpTagOrg').val(),
        jogadores: [],
        reservas: [],
        staff: [allStaffs.find(function(staff){return staff.nomeUsuario === $(`.inpTecnico`).val()}), allStaffs.find(function(staff){return staff.nomeUsuario === $(`.inpAnalista`).val()})],
        codigo: allOrgs.length+1
    }

    for(let i = 1; i < 6; i++){
        if(allPlayers.find(function(jogador){return jogador.nomeUsuario === $(`.jogador${i}`).val()})){
            newOrg.jogadores.push($(`.jogador${i}`).val())
        }else{
            console.log(`Jogador ${i} está incorreto!`)
            for(let i = 5;i <= 0; i--){
                newOrg.jogadores.pop()
            }
            return(false)
        }
    }

    let indexReserva = -1

    while(indexReserva != 0){
        for(let i = 1; i < 5; i++){
            if(allPlayers.find(function(jogador){return jogador.nomeUsuario === $(`.reservaJogador${i}`).val()})){
                newOrg.reservas.push($(`.reservaJogador${i}`).val())
            }else{
                if($(`.reservaJogador${i}`).val() == '' || $(`.reservaJogador${i}`).val() == null){
                    indexReserva = 0
                }else{
                    console.log(`Jogador reserva ${i} está incorreto!`)
                    for(let i = 5;i <= 0; i--){
                        newOrg.jogadores.pop()
                        newOrg.reservas.pop()
                    }
                    return(false)
                }
            }
        }
    }

    allOrgs.push(newOrg)
    localStorage.setItem('allOrgs', JSON.stringify(allOrgs))
})

// ^^ Página index.html
// -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // -- // --
// vv Página mdados.html


