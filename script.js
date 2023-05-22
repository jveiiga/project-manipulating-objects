const itemArray = [
    {
        "id": 1,
        "product": "Pão",
        "price": 5.80,
        "quantity": 3,
        "section": "Padaria"
    },
    {
        "id": 2,
        "product": "Leite",
        "price": 3.00,
        "quantity": 1,
        "section": "Derivados de Leite"
    },
    {
        "id": 3,
        "product": "Carne",
        "price": 10.00,
        "quantity": 2,
        "section": "Carne"
    },
    {
        "id": 4,
        "product": "Tomate",
        "price": 4.00,
        "quantity": 5,
        "section": "Hortifruti"
    },
]
console.log(itemArray)

console.log("Alterando com Map o valor das propriedades price dos ids com valor maior que 2.")
const alterandoValorPropriedade = (itemArray) => {

    const result = itemArray.map((produto) => {

        let { id, price } = produto
        if  ( id > 2 ) {
            price = 2.00
        }
        return {...produto, price}
    })
    return result
}
console.log(alterandoValorPropriedade(itemArray))

console.log("Filtrando com Filter, apenas produtos com id menor ou igual a 2 são retornados.")
const filtrandoPorValor = (itemArray) => {

    const result = itemArray.filter((produto) => {

        let { id } = produto
        if  ( id <= 2 ) {
            return {...produto, id}
        }
    })
    return result
}
console.log(filtrandoPorValor(itemArray))

console.log("Filtrando com Find, apenas o produto leite é retornado.")
const buscandoValor = (itemArray) => {

    const result = itemArray.find(({product}) => {
        if(product === "Leite") {
            return product
        }
    })
    return result
}
console.log(buscandoValor(itemArray))

console.log("Somando com reduce, a soma de todos produtos é retornado.")
const somaTotalProdutos = (itemArray) => {
    const result = itemArray.reduce((acc, {quantity, price}) => {
      
        let totalList = acc+(price*quantity)
        
        return totalList

    }, 0)

    return result
}
console.log(somaTotalProdutos(itemArray))



