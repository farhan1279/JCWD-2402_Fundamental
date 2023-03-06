// Logical Operator
// AND &&
// Apabila salah satu nilai bernilai false, maka hasil akhir akan false
// Apabila semua nilai bernilai true, maka hasil akhir akan true
console.log(10 < 100 && 10 > 100) // true && false -> false
console.log(100 === 100 && 10 == '10') // true && true -> true
console.log(10 === 10 && 10 <= 10 && 10 >= 10) // true && true && true -> true

// OR ||
// Apabila salah satu bernilai true, maka hasil akhir akan true
// Apabila semua bernilai false, maka hasil akhir akan false
console.log(10 < 10 || 1 >= 1) // false || true -> true
console.log('1' === '10' || 1 == 1) // false || true -> true

// NOT !
// Kebalikan
console.log(!10>=10) // !true -> false
console.log(!1<1) // !false -> true
console.log(!('a' === 'a' || 3 > 1)) // true || true -> !true -> false
console.log(!('b' !== 'b' && 'c' === 'c')) // false && true -> !false -> true