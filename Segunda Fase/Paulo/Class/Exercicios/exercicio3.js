class Aluno{
    constructor(nome, nota1, nota2, nota3){
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
    }

    get media(){
        return this.calcularMedia()
    }

    calcularMedia(){
        return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2)
    }
}

let aluno = new Aluno('Rai', 10, 10, 9.5)
console.log(aluno.media)
console.log(aluno.calcularMedia())
console.log(aluno)