function verifyProduct(productBarcode) {
  switch (productBarcode) {
    case 192168015:
        return("Chuteira");
    case 192168001:
        return("Camisa Futebol");
    case 192168101:
        return("Bola Basquete");
    default:
        return("Produto não encontrado")
    }
}

console.log(verifyProduct(192168015))