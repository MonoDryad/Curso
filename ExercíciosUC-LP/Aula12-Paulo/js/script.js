let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

const list = function()
{
    tarefas = JSON.parse(localStorage.getItem('tarefas'))

    let paragrafoTarefas = document.getElementById('pIdTarefas')
    paragrafoTarefas.innerHTML = ""

    tarefas.forEach(conteudoTarefas => 
    {
        paragrafoTarefas.innerHTML += conteudoTarefas[0] + " - " + conteudoTarefas[1] + "<br>"
    })
}



const add = function()
{
    let data = document.getElementById('data')
    let tarefa = document.getElementById('iDtarefa')

    tarefas.push([data.value, tarefa.value])

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    
    data.value = ""
    tarefa.value = ""
}