// 6 - Cálculo do salário
// Crie uma página para calcular o salário de um funcionário. O programa deve ter uma entrada de dados para
// Valor da Hora e Quantidade.
// Calcule o salário bruto do funcionário a partir do valor da hora vezes a quantidade.
// Com base na tabela do IRRF abaixo, calcule o salário líquido do funcionário.
// Mostre ao usuário o salário líquido, salário bruto e o valor descontando no IRRF.
// Tabela do Imposto de Renda (atual)
//  Até 1.903,98 — alíquota de 0% (isento)
//  De R$ 1.903,99 até R$ 2.826,65 — alíquota de 7,5%
//  De R$ 2.826,66 até R$ 3,751,05 — alíquota de 15%
//  De R$ 3.751,06 até R$ 4.664,68 — alíquota de 22,5%
//  Acima de R$ 4.664,68 — alíquota de 27,5%


function verificar(){
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let calculoa = valorx * valory

    if(calculoa >= 1903.98){4
        alert('1903.98')
        document.getElementById('fim').value = calculoa
        if(calculoa >= 1903.99){
            alert('1903.99')
            document.getElementById('fim').value = calculoa
            if(calculoa >= 2826.66){
                alert('2826.66')
                document.getElementById('fim').value = calculoa
                if(calculoa >= 3751.06){
                    alert('3751.06')
                    document.getElementById('fim').value = calculoa
                }else{
                    document.getElementById('fim').value = calculoa
                }
            }else{
                document.getElementById('fim').value = calculoa
            }
        }else{
            document.getElementById('fim').value = calculoa  
            }
    }else{
    document.getElementById('fim').value = calculoa
    }
}