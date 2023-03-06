// Array
// [..., ..., ...,]

// Students: Enzo, Faroh, Egy, Naufal, ...
var student1 = 'Enzo'
var student2 = 'Faroh'
var student3 = 'Egy'
// ...
// ...
// ...

let arrStudents = ['Enzo', 'Faroh', 'Naufal'] // 0, 1, 2

// CRUD (Create, Read, Update, Delete)
// Read
console.log(arrStudents)
console.log(arrStudents[0])
console.log(arrStudents[1])

// Update
arrStudents[0] = 'Abi'
console.log(arrStudents)

// Delete 
delete arrStudents[0]
console.log(arrStudents)



let random = [123, 'Pwd', true, null, undefined, [1, 2, 3, 'a', 'b', 'c']]
console.log(random[5][5])


// Method
// Push: Untuk menambahkan data di index paling akhir
let campusPwd = ['Bsd', 'Jkt', 'Btm']
campusPwd.push('Bdg')
console.log(campusPwd)

// Unshift: Untuk menambahkan data di index paling awal
campusPwd.unshift('Jgj')
console.log(campusPwd)

// Pop: Untuk menghapus data di index paling akhir
let numbers = [1, 2, 3, 4, 5]
numbers.pop()
console.log(numbers)

// Shift: Untuk menghapus data di index paling awal
let hewan = ['Kucing', 'Anjing', 'Gajah']
hewan.shift()
console.log(hewan)

// Splice: Untuk menghapus data
//       : Untuk menambah data
//       : Untuk mengupdate data
// arr.splice(index, totalToDelete, dataToInsert)
let food = ['Ayam Goreng', 'Burger', 'Rendang']
// food.splice(1, 1)
// console.log(food)
food.splice(0, 2, 'Pizza', 'Pasta')
console.log(food)

// Insert Data using splice x Insert Data Manual
let sayur = ['Wortel', 'Buncis', 'Sawi']
// sayur[10] = 'Kangkung'   
sayur.splice(100, 0, 'Kacang')
console.log(sayur)