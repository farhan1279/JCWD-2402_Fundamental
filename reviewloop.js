// Buatlah sebuah program untuk menampilkan data berikut: 
let products = [
    { 
        id: 1,
        category: 'Buah & Sayur', 
        data: [
            {
                dataId: 1, 
                name: 'Pakcoy',
                price: 5500, 
                stock: 1000
            },
            {
                dataId: 2, 
                name: 'Mangga Manalagi', 
                price: 30000, 
                stock: 5000
            }
        ]
    },
    { 
        id: 2,
        category: 'Snack', 
        data: [
            {
                dataId: 1, 
                name: 'Cheetos',
                price: 10500, 
                stock: 100
            },
            {
                dataId: 2, 
                name: 'Chitato', 
                price: 12500, 
                stock: 5000
            }
        ]
    }
]



// Example Output: 
/*
    - Buah & Sayur:
    1. Pakcoy
    2. Mangga Manalagi
    - Snack:
    1. Cheetos
    2. Chitato
*/

let output = ``
products.forEach(value => {
    output += `${value.category} \n`
    value.data.forEach(val => {
        output += `${val.dataId}. ${val.name} \n`
    })
})
console.log(output)
