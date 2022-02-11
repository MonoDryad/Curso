let everest = 8822
let subida = 4530
let dias = 0

while(everest > subida){
    subida += Number(prompt('Quantos metros você subiu hoje?'))
    dias ++
    alert(`Metros ${subida} falta ${everest - subida}`)
    if(dias > 7){
        alert(`Voltar pois faltara oxigenio.`)
        break
    }else if(subida >= everest){
        alert(`Você chegou em ${dias}!`)
    }
}