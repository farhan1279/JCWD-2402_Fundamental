// Conditional Statement
// Digunakan untuk pemilihan kondisi

// - If
/*
    if(condition){ // Apabila condition terpenuhi, maka block of code akan di jalankan
        // Block of code
    }
*/

let age = 17
if(age > 17){ // false
    console.log('Register Success!')
}

let text = 'askaskajskajkakjkfakjdajkdkaj'
if(text.length > 10){ // true
    console.log('Character too Long')
}

// - If - else
/*
    if(condition){ // Apabila condition terpenuhi, maka akan menjalankan block of code 1. Apabila tidak, akan menjalankan block of code 2
        Block of code 1
    }else{
        Block of code 2
    }
*/
let age1 = 0
if(age1 > 17){ // true
    console.log('Register Success!')
}else{
    console.log('Register Failed!')
}

// - If - else if - else
/*
    if(condition){
        Block of code 1
    }else if(condition){
        Block of code 2
    }else{
        Block of code 3
    }
*/
let nilaiModul1 = 90
if(nilaiModul1 > 90){ // false
    console.log('Nilai Anda Sangat Baik')
}else if(nilaiModul1 > 70){ // true
    console.log('Nilai Anda Cukup Baik')
}else{
    console.log('Nilai Anda Belum Mencukupi')
}

let bb = 60.5
if(bb >= 80){ // false
    console.log('BB Terlalu Gemuk')
}else if(bb >= 70){ // false
    console.log('BB Cukup')
}else if(bb >= 60){ // false
    console.log('BB Ideal')
}else{
    console.log('BB Kurang')
}

// Ternary Operator (Minimal harus ada 2 pengkondisian)
// let age1 = 0
// if(age1 > 17){ // true
//     console.log('Register Success!')
// }else{
//     console.log('Register Failed!')
// }
age1 > 17? console.log('Register Success!') : console.log('Register Failed!')

// let nilaiModul1 = 90
// if(nilaiModul1 > 90){ // false
//     console.log('Nilai Anda Sangat Baik')
// }else if(nilaiModul1 > 70){ // true
//     console.log('Nilai Anda Cukup Baik')
// }else{
//     console.log('Nilai Anda Belum Mencukupi')
// }
nilaiModul1 > 90? console.log('Nilai Anda Sangat Baik') : 
nilaiModul1 > 70? console.log('Nilai Anda Cukup') : console.log('Nilai Anda Belum Mencukupi');



let point1 = "0"
if(point1 >= 0){ // true
    if(point1 < 30){ // "0" < 30? true
        console.log('Point Sedikit')
    }else{
        console.log('Point Banyak')
    }
}else{
    if(point1 > -10){
        console.log('Point Minus')
    }
}

let point2 = 70
if(point2 >= 60){ // 70 >= 60? true
    console.log('Point Cukup')
}
if(point2 >= 70){ // 70 >= 70? true
    console.log('Point Lumayan')
}
if(point2 <= 80){ // 70 <= 80? true
    console.log('Point Oke')
}