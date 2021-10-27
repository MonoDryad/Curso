function adicionar() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let idade = document.getElementById("idade").value
    let endereço = document.getElementById("endereço").value
    let cpf = document.getElementById("cpf").value
localStorage.setItem("Nome", nome)
localStorage.setItem("Sobrenome", sobrenome)
localStorage.setItem("Idade", idade)
localStorage.setItem("Endereço", endereço)
localStorage.setItem("Cpf", cpf)

alert(localStorage.getItem('idade'));
}

function exibir(){
    let nomeget = localStorage.getItem("Nome")
    let sobrenomeget = localStorage.getItem("Sobrenome")
    let idadeget = localStorage.getItem("Idade")
    let endereçoget = localStorage.getItem("Endereço")
    let cpfget = localStorage.getItem("Cpf")

    document.getElementById('label').innerHTML = "Nome: " + nomeget + " Sobrenome: " + sobrenomeget
}