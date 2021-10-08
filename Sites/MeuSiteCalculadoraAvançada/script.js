function expoente(){
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = valorx ** valory
    document.getElementById('resultado').value = resultado    
}

function soma(){
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = valorx + valory
    document.getElementById('resultado').value = resultado    
}

function diminuir(){
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = valorx - valory
    document.getElementById('resultado').value = resultado    
}

function dividir(){
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = valorx / valory
    document.getElementById('resultado').value = resultado    
}

function raiz(){
    let valorx = document.getElementById('valorx').value

    let resultado = Math.sqrt(valorx)
    document.getElementById('resultado').value = resultado    
}

function multiplicar(){
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = valorx * valory
    document.getElementById('resultado').value = resultado    
}

function resto(){
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = valorx % valory
    document.getElementById('resultado').value = resultado    
}