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

$('.btnSearchOrg').click(function(){
    let teamResults = `Times: \n`
    let teamSuccessFullyFinded
    if(allOrgs.find(function(existentOrgs){return existentOrgs.nomeOrg == $(`.OrgName`).val() || existentOrgs.codigo == $(`.OrgCode`).val()})){
        teamSuccessFullyFinded = allOrgs.find(function(existentOrgs){return existentOrgs.nomeOrg == $(`.OrgName`).val() || existentOrgs.codigo == $(`.OrgCode`).val()})
        teamResults += `Nome da Organização: ${teamSuccessFullyFinded.nomeOrg}` + `\n` + `Tag da Organização: ${teamSuccessFullyFinded.tagOrg}\n`
        teamResults += `Técnico: ${teamSuccessFullyFinded.staff[0].apelido}\nAnalista: ${teamSuccessFullyFinded.staff[1].apelido}\n`
        for(let i = 0; i < 5;i++){
            let jogadores = allPlayers.find(function(jogadores){return jogadores.nomeUsuario == teamSuccessFullyFinded.jogadores[i]})
            teamResults += `Jogador ${i+1}: ${teamSuccessFullyFinded.jogadores[i]} - Invocador: ${jogadores.invocador} - Rota: ${jogadores.funcao}\n`
        }
        for(let i = 0; i < 4;i++){
            if(teamSuccessFullyFinded.reservas[i] == null){
                teamResults += `Jogador Reserva ${i+1}: Sem reserva\n`
            }else{
                let jogadoresReserva = allPlayers.find(function(jogadoresReserva){return jogadoresReserva.nomeUsuario == teamSuccessFullyFinded.reservas[i]})
                teamResults += `Jogador Reserva ${i+1}: ${teamSuccessFullyFinded.reservas[i]} - Invocador: ${jogadoresReserva.invocador} - Rota: ${jogadoresReserva.funcao}\n`
            }
        }
        teamResults += "Código: " + teamSuccessFullyFinded.codigo
    }else{
        teamResults += `Time não encontrado`    
    }
    $('.areaSearchResultOrgs').val(teamResults)
})

$('.btnSearchPlayer').click(function(){
    let playerResults = `Jogador:\n`
    let playerSuccessFullyFinded
        if(allPlayers.find(function(procurarJogador){return procurarJogador.nomeUsuario == $('.userNamePlayer').val() || procurarJogador.invocador == $('.summonersName').val()})){
            playerSuccessFullyFinded = allPlayers.find(function(procurarJogador){return procurarJogador.nomeUsuario == $('.userNamePlayer').val() || procurarJogador.invocador == $('.summonersName').val()})
            playerResults += `Nome do Usuário: ${playerSuccessFullyFinded.nomeUsuario}\nNome do Invocador: ${playerSuccessFullyFinded.invocador}\nRota: ${playerSuccessFullyFinded.funcao}\nCodigo: ${playerSuccessFullyFinded.codigo}`
        }else{
            playerResults += `Jogador não encontrado.`
        }
        $('.areaSearchResultPlayers').val(playerResults)
})

$('.btnSearchExistentsPlayers').click(function(){
    let allPlayersResult = `Jogador(es):\n`
        if(allPlayers.length != 0){
            for(let i = 0;i < allPlayers.length;i++){
                allPlayersResult += `Jogador ${i+1}: ${allPlayers[i].nomeUsuario} - Invocador: ${allPlayers[i].invocador}\n`
            }
        }else{
            allPlayersResult += `Nenhum jogador registrado`
        }
        $('.areaSearchResultPlayers').val(allPlayersResult)
})

$('.btnSearchStaff').click(function(){
    let StaffResult = `Funcionário(s):\n`
    let staffSuccessFullyFinded
        if(allStaffs.find(function(procurarStaff){return procurarStaff.nomeUsuario == $('.userNameStaff').val()})){
            staffSuccessFullyFinded = allStaffs.find(function(procurarStaff){return procurarStaff.nomeUsuario == $('.userNameStaff').val()})
            StaffResult += `Nome do Usuário: ${staffSuccessFullyFinded.nomeUsuario}\nApelido: ${staffSuccessFullyFinded.apelido}\nFunção: ${staffSuccessFullyFinded.funcao}\nCodigo: ${staffSuccessFullyFinded.codigo}`
        }else{
            StaffResult += `Funcionário não encontrado.`
        }
        $('.areaSearchResultStaffs').val(StaffResult)
})

$('.btnSearchExistentsStaffs').click(function(){
    let allStaffResult = `Funcionário(s):\n`
        if(allStaffs.length != 0){
            for(let i = 0;i < allStaffs.length;i++){
                allStaffResult += `Staff ${i+1}: ${allStaffs[i].nomeUsuario} - Apelido: ${allStaffs[i].apelido} - Função: ${allStaffs[i].funcao}\n`
            }
        }else{
            allStaffResult += `Nenhum funcionário registrado.`
        }
        $('.areaSearchResultStaffs').val(allStaffResult)
})