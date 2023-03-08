let products = [
    {
        name: 'Apel', 
        price: 10000, 
        stock: 10
    },
    {
        name: 'Jeruk', 
        price: 15000, 
        stock: 15
    },
    {
        name: 'Semangka', 
        price: 15000, 
        stock: 15
    }
]

let output = '### PURWADHIKA MART ### \n'
for(let i=0; i<products.length; i++){
    output +=  `Name: ${products[i].name} - Price = ${products[i].price} (Stock: ${products[i].stock}) \n`
}

// for(let i=0; i < products.length; i++){
//     for(let key in products[i]){
//         console.log(key)
//         console.log(products[i][key])
//     }
// }