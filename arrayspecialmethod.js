// Array Special Method
// .forEach ---> Tidak menghasilkan array baru
let arrStudents = ['Enzo', 'Ruth', 'Egi']
let newArr = arrStudents.forEach((value, index) => { // Param1: Value, Param2: Index
    return value
})

// .map ---> Menghasilkan baru / Return array baru
// Biasa digunakan untuk menampilkan data di page Reactjs
let newArr1 = arrStudents.map((value, index) => {
    return value 
})
console.log(newArr)
console.log(newArr1)

// Case. Ambil value bernilai genap dari dalam array
let numbers = [1, 2, 3, 4, 5]
for(let i=0; i<numbers.length; i++){

}
let newArrEven = []
numbers.forEach((value) =>{
    if(value % 2 === 0){
        newArrEven.push(value)
    }
})

// .filter
// Mirip seperti map, menghasilkan arrray baru
// Hanya saja kita dapat melakukan filtering
let arrNumbers = [1, 2, 3, 4, 5]
let newArrNumber = arrNumbers.filter((value, index) => {
    return value % 2 === 0 
})
console.log(newArrNumber)











// Tampilkan data berikut dengan menggunakan method .forEach dan juga .map
let data = [
    { name: { fullName: 'Ahmad', lastName: 'Ansorudin' }, hobby: 'Codewars' },
    { name: { fullName: 'Tito' }, hobby: 'Basket' },
    { name: { fullName: 'Vero', lastName: 'Rochan' }, hobby: 'Futsal' },
]

let output = ``
data.forEach(value => {
    output += `Name: ${value.name.fullName} ${value.name.lastName? value.name.lastName : '\b'}, Hobby: ${value.hobby} \n`
})
console.log(output)
