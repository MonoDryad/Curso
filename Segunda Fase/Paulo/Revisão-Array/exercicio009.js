let arrayOrdenada = []

const insertionSort = (array) => {
    let s = 1
    let temporario
    for(let i = 0; i < array.length;){
        if(array[s] < array[i]){
            temporario = array[s]
            arrayOrdenada.push(temporario)
            arrayOrdenada.push(array[i])
        }
    }
    console.log(array, arrayOrdenada)
}
insertionSort([32,12,1123,355,15,0,10,20,30,90,40,50,70,11,15,13,44,35,599,39])