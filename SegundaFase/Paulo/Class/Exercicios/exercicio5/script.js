class Conta{
    #numeroAgencia
    #numeroConta
    #saldo
    constructor(numeroAgencia, numeroConta, saldo){
        this.#numeroAgencia = numeroAgencia
        this.#numeroConta = numeroConta
        this.#saldo = saldo
    }

    get numeroConta(){
        return this.#numeroConta
    }

    set numeroConta(numeroConta){
        this.#numeroConta = numeroConta
    }


    get numeroAgencia(){
        return this.#numeroAgencia
    }

    set numeroAgencia(numeroAgencia){
        this.#numeroAgencia = numeroAgencia
    }


    depositar(valor){        
        if(valor > 0){
            this.#saldo = this.#saldo + valor
        }
    }

    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo = this.#saldo - valor
        }
    }
}

let minhaConta

function criarConta() 
{
    let agencia = document.getElementById('newUserAgency').value
    let conta = document.getElementById('newAccountNumber').value
    minhaConta = new Conta(agencia, conta, 0)
    document.getElementById('currentSaldo').value = minhaConta.saldo
    console.log(minhaConta, conta, agencia)
}

function sacarsaldo()
{
    minhaConta.sacar(parseFloat(document.getElementById('sacarSaldo').value))
    document.getElementById('currentSaldo').value = minhaConta.saldo
}

function depositarsaldo()
{
    minhaConta.depositar(parseFloat(document.getElementById('depositarSaldo').value))
    document.getElementById('currentSaldo').value = minhaConta.saldo
}