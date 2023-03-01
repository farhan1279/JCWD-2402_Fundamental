// Buatlah syntax untuk mendapatkan digit ke-2 dari sebuah number (Wajib menggunakan method slice)
// Ex. Input    = 123
//     Output   = 2
//     Input    = 501
//     Output   = 0

let number = 123
// 1. Karena inputan berupa number, maka tidak bisa diambil digit ke-2 nya
//    Supaya bisa diambil digit keduanya, maka harus kita ubah dalam bentuk string (toString())
number = number.toString()
// 2. Karena sudah berbentuk string, bisa kita ambil digit keduanya menggunakan method slice
let result = number.slice(1, 2)
// 3. Tampilkan output berupa digit ke-2 nya
console.log(Number(result))

number = Number(number.toString().slice(1, 2)) // ### Cara lain



// Email: defryan@purwadhika.com, maks: Besok, jam 07:00
