// Looping Array
let arrStudent = ['Faroh', 'Abi', 'Naufal']

for(let i=0; i < arrStudent.length; i++){
    console.log(arrStudent[i]) // arrStudent[0] -> arrStudent[1] -> arrStudent[2]
}

for(let siswa of arrStudent){
    console.log(siswa)
}



// Case. Odd/Even Array
// Ex.  input   : [1, 4, 5, 8, 10]
//      output  : ['Odd', 'Even', 'Odd', 'Even', 'Even']
let input = [1, 4, 5, 8, 10]

input.indexOf(1) // 0
input.indexOf(10) // 4

for(let i=0; i < input.length; i++){
    if(input[i] % 2 === 0){
        input[i] = 'Even' // input[0], input[1], input[2], ...
    }else{
        input[i] = 'Odd'
    }
}

// #2
let result = []
for(let value of input){
    console.log()
    if(value % 2 === 0){
        result.push('Even')
    }else{
        result.push('Odd')
    }
}

console.log(result)