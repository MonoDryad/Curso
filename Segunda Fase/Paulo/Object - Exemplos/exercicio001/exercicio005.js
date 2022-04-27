let calculadora = {
    $x: 0,
    $y: 0,
    $resultado: 0,
    get valorX(){  
        return this.$x
    },

    set valorX(novoX){
        this.$x = novoX
    },

    get valorY(){  
        return this.$x
    },

    set valorY(novoY){
        this.$y = novoY
    },

    get soma(){
        return this.$x + this.$y
    },

    get mult(){
        return this.$x * this.$y
    },

    get sub(){
        return this.$resultado = this.$x - this.$y
    }
}

console.log(calculadora.valorX=2, calculadora.valorY=5, calculadora.soma, calculadora.mult, calculadora.sub)