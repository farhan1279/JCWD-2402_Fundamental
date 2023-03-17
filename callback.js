// Callback
// Function yang dijadikan argument oleh function lain

// Case. Buatlah function untuk melakukan perhitungan matematis, kemudian
//       tampilkan hasil perhitungannya di function Output!

// Without Callback
// function Penjumlahan(num1, num2){
//     return num1 + num2 // 15
// }

// function Output(result){
//     console.log(result)
// }

// let resultPenjumlahan = Penjumlahan(5, 10) // 15
// Output(resultPenjumlahan)

// With Callback
// 1. Indirect Callback
function Penjumlahan(num1, num2, cb){
    return cb(num1 + num2) // return Output(num1 + num2)
}

function Output(result){
    console.log(result)
}

Penjumlahan(5, 10, Output)

// 2. Direct Callback
function Penjumlahan(num1, num2, cb){
    return cb(num1 + num2) // return Output(num1 + num2)
}

Penjumlahan(5, 10, function Output(result){
    console.log(result)
})

const Penjumlahan1 = (num1, num2, cb) => {
    return cb(num1 + num2)
}

Penjumlahan1(5, 10, (result) => {
    console.log(result)
})