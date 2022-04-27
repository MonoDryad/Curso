let formula = {
    vm: 0,
    as: 435,
    at: 6,

    get calculo(){
        return this.vm = this.as / this.at
    }
}

console.log(formula.calculo)
console.log(formula.vm)