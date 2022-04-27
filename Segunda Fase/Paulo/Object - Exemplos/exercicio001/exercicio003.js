let funcionario01 = {
    nome: 'Paulo',
    sobrenome: 'Battistella'
}

let funcionario02 = {
    nome: 'Pas',
    sobrenome: 'la'
}

console.log(funcionario01, funcionario02)

delete funcionario02.sobrenome
delete funcionario01.sobrenome

console.log(funcionario01, funcionario02)