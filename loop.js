// Loop Statement (Perulangan)
// Case. Terkadang kita ingin menjalankan sebuah program secara berulang-ulang

// - Looping While
/*
    while(condition){
        Block of code
    }
*/
let start = 1 // 1 -> 2 -> 3 -> 4
while(start <= 3){ // 1 <= 3? true; -> 2 <= 3? true; 3 <= 3? true; 4 <= 3? false!
    console.log('Hello, World!') // 1x -> 2x -> 3x
    start++
}

let number = 0; // 0 -> 1
while(number < 1){ // 0 < 1? true; 1 < 1? false
    console.log('Pwd!') // 1x
    number++
}

// let number1 = 0; 
// while(number1 < 1){ 
//     console.log('Pwd!') 
//     number1--
// }



// - Looping Do While
/*
    do{
        Block of code
    }while(condition)
*/
let angka = 1 // 1 -> 2
do{
    console.log(angka) // 1 -> 2
    angka++
}while(angka<=5) //  2 <= 5? true; ...; false

let a = 0 // 0 -> 1
do{
    console.log('BSD') // 1x
    a++
}while(a <= 0) // 1 <= 0? false!


let b = 1 // 1 -> 2
do{
    console.log('JKT48') // 1x
    b++
}while(b <= 0) // 2 <= 0? false!



// - Looping For
/*
    for(initial value; condition; exit way){
        Block of code
    }
*/
let strt = 1
while(strt <= 5){
    console.log(strt)
    strt++
}

for(let s=1; s <= 5; s++){
    console.log(s)
}

for(let i=0; i <= 3; i++){
    console.log(i)
}
