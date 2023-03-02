// Truthy & Falsy
// Sebuah nilai non-booelan yang apabila dimasukan kedalam conditional statement, 
// akan dikonversikan menjadi nilai boolean

console.log(Boolean(""))
console.log(Boolean(0))

console.log(Boolean(1))
console.log(Boolean('abc'))

// Case. Saya ingin memvalidasi sebuah variable, apakah dia berisikan text kosong
//       atau tidak?
let text = ''
if(text.length === 0){
    console.log('Data Masih Kosong')
}else{
    console.log('Data Lengkap')
}

if(Boolean(text) === true){ // Apabila ada isi di dalam text, maka akan menjalankan console.log yg atas
    console.log('Data Lengkap')
}else{
    console.log('Data Masih Kosong')
}

if(text){ // Apabila ada isi di dalam text? Apabila ada, maka akan menjalankan console.log 'Data Lengkap'
    console.log('Data Lengkap')
}else{
    console.log('Data Masih Kosong')
}