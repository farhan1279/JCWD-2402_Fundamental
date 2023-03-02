// Break: Digunakan untuk menghentikan looping
// Continue: Digunakan untuk melewati baris code yang ada di bawahnya

// Case. Saya ingin mengecek value inputan phone number dari user. 
//       Apabila value nya mengandung huruf, maka langsung munculin error;
let inputPhoneNumber = 'a081b134143841' // length = 13

for(let i=0; i < inputPhoneNumber.length; i++){ // i=0; 0<13? true; i=1; 1<13? true; i=2; 2<13? true
    console.log(inputPhoneNumber[i]) // inputPhoneNumber[0] = 0; inputPhoneNumber[1]; inputPhoneNumber[2]

    if(isNaN(inputPhoneNumber[i]) === true){
        console.log('Input Phone Number Salah!')
        break;
    } 
}

for(let i=1; i <= 5; i++){
    if(i === 1) continue
    console.log(i)
}