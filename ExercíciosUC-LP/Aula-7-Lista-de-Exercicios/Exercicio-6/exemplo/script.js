const calcularSalario = function(){
    let valorHora = 40 // document.getElementById('valorhora').value
    let qtde = 160 // document.getElementById('valorqtde').value
    let sb = valorHora * qtde

    let irrf = 0
    if(sb >= 1903.99 && sb <= 2826.65){
        irrf = sb * 0.075
    } else if(sb >= 2826.66 && sb <= 3751.05){
        irrf = sb * 0.15
    } else if(sb >= 3751.06 && sb <= 4664.68){
        irrf = sb * 0.225
    } else{
        irrf = sb * 0.275
    }

    let s1 = sb - irrf
    return 'Valor Hora ' + valorHora + ' Qtde ' + qtde + ' Salário Bruto ' + sb + " IRRF: " + irrf + " Salário Liquido " + s1
}

console.log(calcularSalario())