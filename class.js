// Students: nama, umur, gender, dll
// let students = [
//     { name: 'Enzo', umur: 17, gender: 'L' },
//     { nama: 'Eggy', umur: 17, gender: 'L' },
//     { name: 'Faroh', umur: 17, gender: 'P' }
// ]

// for(let i=0; i<students.length; i++){
//     console.log(students[i].name)
// }

// Class
// Sebuah cetakan untuk membuat key yg seragam
class Student{
    name = ''
    age = 0
    gender = ''

    constructor(name, age, gender){
        this.name = name, 
        this.age = age, 
        this.gender = gender
    }
}

let student1 = new Student('Enzo', 17, 'L')
let student2 = new Student('Faroh', 17, 'P')
console.log(student1)
console.log(student1.name)
console.log(student2)
let students = [
    new Student('Enzo', 17, 'L'),
    new Student('Faroh', 17, 'P')
]
console.log(students)



// Study Case.
// Di sebuah supermarket, terdapat beberapa kategori produk. Mulai dari buah, elektronik dan pakaian. 
// Setiap kategori produk memiliki entitas yang berbeda-beda, seperti produk name, stock, dll.
// 1. Jabarkan apa saja entitas yg dimiliki untuk masing-masing kategori produk!
// - Buah
//   name   price   stock   expiredDate jenis
// - Elektronik
//   name   price   stock   guarantee   category    color   SN
// - Pakaian
//   name   price   stock               size    color
// 2. Buatkan class untuk mencetak entitas tersebut!

// Inheritance 
// Penurunan Property
class Products{
    name = ''
    price = 0
    stock = 0

    constructor(name, price, stock){
        this.name = name,
        this.price = price, 
        this.stock = stock
    }
}

class Buah extends Products{ // Buah: Child & Products: Parent
    expiredDate = ''
    jenis = ''

    constructor(name, price, stock, expiredDate, jenis){
        super(name, price, stock)
        this.expiredDate = expiredDate, 
        this.jenis = jenis
    }
}

class Electronic extends Products{
    guarantee = ''
    category = ''
    color = ''
    SN = ''

    constructor(name, price, stock, guarantee, category, color, SN){
        super(name, price, stock) 
        this.guarantee = guarantee, 
        this.category = category,
        this.color = color,
        this.SN = SN
    }
}

class Pakaian extends Products{
    size = ''
    color = ''

    constructor(name, price, stock, size, color){
        super(name, price, stock) 
        this.size = size, 
        this.color = color
    }
}



// Encapsulation
// - Public Property
// - Private Property

class Users{
    username = ''
    #email = ''

    constructor(username){
        this.username = username
        // this.#email = email 
    }

    get getEmail(){
        let modifiedEmail = `***${this.#email.slice(3, this.#email.length)}`
        return modifiedEmail
    }

    set setEmail(email){
        if(email.includes('@')){
            this.#email = email
        }else{
            console.log('Email Not Valid!')
        }
    }
}

// Getter & Setter
let user1 = new Users('ryandefryan')
user1.setEmail = 'ryangmail.com'
console.log(user1.getEmail)