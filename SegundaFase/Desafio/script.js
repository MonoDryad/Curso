class Principal{
    #jogador1
    #jogador2
    #jogadas = 0

    #dado1
    #dado2
    constructor(jogador1, jogador2){
        this.#jogador1 = jogador1
        this.#jogador2 = jogador2
        this.#dado1 = 0
        this.#dado2 = 0
    }

    toString(){
        return this.#jogador1 + ' vs ' + this.#jogador2
    }

    get jogador1(){
        return this.#jogador1
    }

    get jogador2(){
        return this.#jogador2
    }

    set jogador1(jogador){
        this.#jogador1 = jogador
    }

    set jogador2(jogador){
        this.#jogador2 = jogador
    }

    get dado1(){
        return this.#dado1
    }

    get dado2(){
        return this.#dado2
    }

    set dado1(dado){
        this.#dado1 = dado
    }

    set dado2(dado){
        this.#dado2 = dado
    }

    get jogadas(){
        return this.#jogadas
    }
    set jogadas(jogadas){
        this.#jogadas = jogadas
    }
}

class JogoDeDado extends Principal{
    #armazenado1 = ''
    #armazenado2 = ''

    constructor(jogador1, jogador2){
        super(jogador1, jogador2)
    }

    rodarDadosJ1(){
        super.jogadas++
        super.dado1 = Math.floor(Math.random() * 6)
        super.dado2 = Math.floor(Math.random() * 6)
        this.somarDados(1)
        this.#armazenado1 += 'Jogada ' + super.jogadas + ': ' + super.dado1 + ' + ' + super.dado2 + ': ' + this.somarDados() + '\n'
    }

    rodarDadosJ2(){
        super.jogadas++
        super.dado1 = Math.floor(Math.random() * (6 - 1) + 2)
        super.dado2 = Math.floor(Math.random() * (6 - 1) + 2)
        this.somarDados(2)
        this.#armazenado2 += 'Jogada ' + super.jogadas + ': ' + super.dado1 + ' + ' + super.dado2 + ': ' + this.somarDados() + '\n'
    }

    somarDados(jogador){
        if((super.dado1 + super.dado2) == 7){
            if(jogador == 1){
                super.jogador1 += ' - Vitorioso'
            }else if(jogador == 2){
                super.jogador2 += ' - Vitorioso'
            }
            
        }
        return super.dado1 + super.dado2
    }

    get dado1(){
        return super.dado1
    }

    get dado2(){
        return super.dado2
    }

    get armazenado1(){
        return this.#armazenado1
    }

    get armazenado2(){
        return this.#armazenado2
    }

    set armazenado1(armazenado1){
        this.#armazenado1 = armazenado1
    }

    set armazenado2(armazenado2){
        this.#armazenado2 = armazenado2
    }

    toStringJ1(){
        this.rodarDadosJ1()
        return 'Jogador ' + super.jogador1 + ': ' + super.dado1 + ' + ' + super.dado2 + ', soma: ' + this.somarDados(1)
    }

    toStringJ2(){
        this.rodarDadosJ2()
        return 'Jogador ' + super.jogador2 + ': ' + super.dado1 + ' + ' + super.dado2 + ', soma: ' + this.somarDados(2)
    }

    armazenamentoJ1(){
        return super.jogador1 + ': \n' + this.#armazenado1
    }

    armazenamentoJ2(){
        return super.jogador2 + ': \n' + this.#armazenado2
    }
}

let players = null
let rodada = 0
const playGame = () =>
{
    if(document.querySelector('#inscrever-nomejogador1').value.length >= 3){
        if(document.querySelector('#inscrever-nomejogador2').value.length >= 3){
            players = new JogoDeDado(document.querySelector('#inscrever-nomejogador1').value,document.querySelector('#inscrever-nomejogador2').value)
            document.querySelector('#nomeJogador1').innerHTML = players.jogador1
            document.querySelector('#nomeJogador2').innerHTML = players.jogador2
            document.querySelector('#resultadoAnteriores2').value = ''
            document.querySelector('#resultadoAnteriores1').value = ''
            document.querySelector('#buttonDado').removeAttribute('disabled')
        }else{
            alert('Insira o nome do jogador 2')
        }
    }else{
        alert('Insira o nome do jogador 1')
    }
}

const rodarDado = () =>
{
    rodada++
    if(rodada % 2 == 0){
        players.rodarDadosJ2()
        document.querySelector('#nomeJogador2').innerHTML = players.jogador2
        document.querySelector('#resultadoAnteriores2').value = players.armazenado2
        if(document.querySelector('#nomeJogador2').innerHTML.includes("Vitorioso")){
            document.querySelector('#buttonDado').setAttribute('disabled',true)
        }
    }else{
        players.rodarDadosJ1()
        document.querySelector('#nomeJogador1').innerHTML = players.jogador1
        document.querySelector('#resultadoAnteriores1').value = players.armazenado1
        if(document.querySelector('#nomeJogador1').innerHTML.includes("Vitorioso")){
            document.querySelector('#buttonDado').setAttribute('disabled',true)
        }
    }

}

const resetar = () =>
{
    window.location.reload
}