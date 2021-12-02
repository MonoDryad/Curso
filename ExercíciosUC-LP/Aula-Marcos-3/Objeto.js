const Rai = 
{
    nome: "Rai Raul",
    idade: 17,
    tamanho: 1.76
}

const VideoGame =
{
    nome: "Minecraft",
    genero:"Aventura",
    plataforma: ["Windows", "Mac", "Xbox360", "Playstation 3", "XboxOne", "Playstation 4", "Xbox Series x", "Playstation 5"],
    engine: "Java",
    anoDoLancamento: 2011,
    atualizacaoAtual: 1.18,
    valor:
    {
        real: 152.59,
        dolar: 26.96,
        pesoArgentino: 2722.28
    },
    modificavel: true,
    desenvolvimentoAtivo: true,
}

console.log(Rai.idade)
console.log(Rai["idade"])
console.log(VideoGame["plataforma"])
console.log(VideoGame.valor.real)

