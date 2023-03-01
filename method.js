// Method
// Built in function di Javascript -> Nge-modify setiap data yang kita miliki

// 1. String Built-in Method
// - .length
let text = 'abc'
console.log(text.length)

// - slice 
let newText = 'Purwadhika School'
let sliceResult = newText.slice(0, 3) // Mengambil karakter dari index ke-0 sampai index ke-3 (index-3 not include)
console.log(sliceResult)
let newSliceResult = newText.slice(10, 100)
console.log(newSliceResult)

// - substring
console.log(newText.substring(10, 3))

// *Notes: Apabila parameter pertama lebih dari parameter kedua, maka substring akan secara otomatis
//         melakukan switch parameternya

// - Replace
let longText = 'Purwadhika BSD'
console.log(longText.replace('u', 1))
longText.replace(/a/g, 3)
console.log(longText)

// - toUpperCase & toLowerCase
console.log(longText.toUpperCase())
console.log(longText.toLowerCase())

// - concate 
let txt1 = 'Hello'
let txt2 = 'World'
console.log(txt1.concat(txt2))

// - indexOf: Untuk mengetahui posisi index suatu karakter
console.log(longText.indexOf('a'))
console.log(longText.indexOf('B'))
console.log(longText.indexOf('b'))
console.log(longText.indexOf('a', 5))



// 2. Number Built-in Method
// - toString
let number = 72
console.log(number.toString())

// - Math.round: Pembulatan sesuai aturan mtk, Math.ceil: Pembulatan keatas, Math.floor: Pembulatan kebawah
console.log(Math.round(9.48))
console.log(Math.ceil(20.1))
console.log(Math.floor(20.9))
console.log(Math.pow(2, 3)) // Angka 2 dipangkat dengan 3
