for(let i = 0;i < 20;i++){
    
    let nota1 = Math.random() * 10
    let nota2 = Math.random() * 10 
    let nota3 = Math.random() * 10
    let media = (nota1 + nota2 + nota3) / 3

    console.log('Aluno', (i + 1), 'Nota 1:', nota1.toFixed(2), 'Nota 2:', nota2.toFixed(2), 'Nota 3:', nota3.toFixed(2), 'Média:', media.toFixed(2))
}