const ingredientes = ["Arroz", "Feijão", "Carne", "Frango", "Alface","Cebola","Tomate"]
const pratos = ["Bife acebolado", "Frango a milanesa", "X-tudo"]


function foodsAvaliable() {
    console.log('')
    console.log('Ingredientes:')
    for (let dsIndex = 0; dsIndex < ingredientes.length; dsIndex++) {
        console.log(ingredientes[dsIndex] + ', ')
    }
}

function dishesAvaliable() {
    console.log('')
    console.log('Pratos:')
    for (let dsIndex = 0; dsIndex < pratos.length; dsIndex++) {
        console.log(pratos[dsIndex] + ', ')
    }
}

function userOrder(pratoRequisitado) {
    console.log('')
    let iProduto1 = 0
    let iProduto2 = 0
    let iProduto3 = 0
    switch(pratoRequisitado){
        case 0:
            console.log('Pedido: ' + pratos[pratoRequisitado])
            iProduto1 = 2
            iProduto2 = 5
            for (let iIng = 0; iIng < ingredientes.length; iIng++) {
                if(iIng == iProduto1){
                    console.log('Ingredientes: ' + ingredientes[iIng])
                }
                if(iIng == iProduto2){
                    console.log(ingredientes[iIng])
                }
        }
        break
        case 1:
            console.log('Pedido: ' + pratos[pratoRequisitado])
            iProduto1 = 3
            iProduto2 = 4
            for (let iIng = 0; iIng < ingredientes.length; iIng++) {
                if(iIng == iProduto1){
                    console.log('Ingredientes: ' + ingredientes[iIng])
                if(iIng == iProduto2){
                    console.log(ingredientes[iIng])
                }
            }
        }
        break
        case 2:
            console.log('Pedido: ' + pratos[pratoRequisitado])
            iProduto1 = 5
            iProduto2 = 4
            for (let iIng = 0; iIng < ingredientes.length; iIng++) {
                if(iIng == iProduto1){
                    console.log('Ingredientes: ' + ingredientes[iIng])
                if(iIng == iProduto2){
                    console.log(ingredientes[iIng])
                }
            }
        }
        break
    }
}

foodsAvaliable()
dishesAvaliable()
userOrder(2)