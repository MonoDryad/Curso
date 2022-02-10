const contasRegistradas = JSON.parse(localStorage.getItem('contasRegistradas')) || []

let contaConectada


const entrar = function()
{
    if(contasRegistradas.find(encontrarConta))
    {
        contaConectada = contasRegistradas.find(encontrarConta)

        if(contaConectada.senhaRegistrada == document.getElementById('inpIdSenha').value)
        {
            alert('Você está dentro!')
        }
        else
        {
            alert('Email ou Senha incorreta!')
            contaConectada = null
        }
    }
    else
    {
        alert('Email ou Senha incorreto!')
    }
}

function encontrarConta(contasNoSistema)
{
    return contasNoSistema.emailRegistrado == document.getElementById('inpIdEmail').value
}

const registro = function()
{
    let emailRegistrado = document.getElementById('inpIdEmailRegistro').value
    let senhaRegistrada = document.getElementById('inpIdSenhaRegistro').value

    contasRegistradas.push({emailRegistrado, senhaRegistrada})
    localStorage.setItem('contasRegistradas', JSON.stringify(contasRegistradas))
}

function entrarNoCadastro()
{
    document.getElementById('div-container-form-registro').style.display = 'block'
    document.getElementById('div-container-form-login').style.display = 'none'
}

function sairDoCadastro()
{
    document.getElementById('div-container-form-registro').style.display = 'none'
    document.getElementById('div-container-form-login').style.display = 'block'
}