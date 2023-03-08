// Object
// Key & value -> Property

// CRUD (Create, Read, Update & Delete)
// Create 
let product = {
    name: 'Apel',
    price: 10000,
    getName1(){ // Method (Function yg disimpan kedalam object)
        console.log('This is Method getName1')
        console.log(this.name)
    },
    getName2: () => {
        console.log('This is Method getName2')
        console.log(this.name)
    }
}

// Read
// console.log(product.name)
// console.log(product.price)
console.log(product['name'])
console.log(product['price'])

// Read Function
// product.getName1()
// product.getName2()

// Update
product.name = 'Semangka'
// console.log(product)

// Delete
product.price = 0
// console.log(product) 
delete product.price 
// console.log(product)



// Optional Chaining
// Digunakan untuk mengakses key di dalam object secara aman
let user = {
}

console.log(user.username)
console.log(user.address?.province)

// For in Loop Object
let users = {
    name: 'Frengky', 
    username: 'frengkynihbos',
    password: 'abc123'
}

for(let bebas in users){
    console.log(bebas) // Mengambil key nya saja
    console.log(users[bebas]) // Mengambil value nya
}
