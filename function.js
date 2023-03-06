// // Function / Fungsi
// // Isolated Code
// // Wadah untuk menampung code program kita
// // Reusable

// let num1 = 5
// let num2 = 10
// let result = num1 + num2 
// // ...
// // ...
// // ...
// let result1 = num1 + num2

// // Build
// function Penjumlahan(){
//     let num1 = 5
//     let num2 = 10
//     let result = num1 + num2 
//     console.log(result)
// }

// // Call
// Penjumlahan()
// Penjumlahan()
// Penjumlahan()



// // Function Declaration -> Bisa dipanggil terlebih dahulu sebelum di build -> Hoisting
// Pengurangan()
// function Pengurangan(){
//     let num1 = 5
//     let num2 = 10
//     let result = num1 - num2 
//     console.log(result)
// }

// // Function Expression -> Sebuah function yg disimpan kedalam variable
// //                     -> Tidak bisa dipanggil terlebih dahulu sebelum di build
// let pengurangan = function(){
//     console.log('Ini Function Expression Pengurangan')
// }
// pengurangan()

// // Arrow Function
// let pembagian = () => {
//     console.log('Ini Arrow Function Pembagian')
// }












// function Penjumlahan(){
//     let num1 = 5
//     let num2 = 10
//     let result = num1 + num2 
//     console.log(result)
// }
// Penjumlahan()
// // ...
// // ...
// // ...
// Penjumlahan()

// Function with Parameter
function PenjumlahanNew(num1, num2){ // num1, num2 -> Param/Parameter
    var resultsss = num1 + num2 
    console.log('Penjumlahan New:')
}
PenjumlahanNew(5, 10) // 5, 10 -> Argument
// ...
// ...
// ...
PenjumlahanNew(3)

// Function with Return
// Function yg mengembalikan nilai
function Pembagian1(num1, num2){
    let result = num1 / num2 
}

function Pembagian2(num1, num2){
    let result = num1 / num2 
    return result 
}

function Pembagian3(num1, num2){
    let result = num1 / num2 
    return result 
}

console.log(Pembagian1(10, 5))
Pembagian2(10, 5) + Pembagian3(9, 3)



// Function with Default Parameter
function Perkalian(num1, num2 = 1){
    return num1 * num2
}

console.log(Perkalian(10, 5))

// Rest Parameter
function MyFunct(a, b, ...manyMore){
    console.log(a)
    console.log(b)
    console.log(manyMore)
}

MyFunct(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// Recursive Function
function CountDown(number){
    console.log(number) // 3 -> 2

    let nextNumber = number - 1 // 3 - 1 = 2 -> 2 - 1 = 1  

    if(nextNumber > 0) CountDown(nextNumber) // nextNumber = 2
}

CountDown(3)
