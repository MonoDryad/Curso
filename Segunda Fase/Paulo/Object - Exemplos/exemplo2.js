let serialNumbers = {
    $n: 0,
    get next() {
        return this.$n = this.$n + 1
    },
    set next(value) {
        this.$n = value
    }
}

console.log(serialNumbers.next)
console.log(serialNumbers.next)
console.log(serialNumbers.next = 5)
console.log(serialNumbers.next)