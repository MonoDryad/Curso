function calculo() {
    let base = parseFloat(document.getElementById('base').value);
    let expoente = parseFloat(document.getElementById('expoente').value);
  
    let resultado = parseFloat((base **= expoente));

    let elementoResultadoA = document.getElementById("resultadoA");
    elementoResultadoA.innerHTML = resultado

}



