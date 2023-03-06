// Draw Pattern
let pattern = ''
for(let i=1; i<=4; i++){ // i=1; i=2; i=3
    for(let j=1; j<=i; j++){ // j=1; 1<=2? true ---> j=2; 2<=2? true ---> j=3; 3<=2? false
        pattern += '*' // 1x -> 2x
    }
    pattern += '\n'
}
console.log(pattern)

/*
    *****
    ****
    ***
    **
    *
*/

// FizzBuzz
function FizzBuzz(n){
    let newArr = []
    for(let i=1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            newArr.push('FizzBuzz')
        }else if(i % 3 === 0){
            newArr.push('Fizz')
        }else if(i % 5 === 0){
            newArr.push('Buzz')
        }else{
            newArr.push(i)
        }
    }

    console.log(newArr)
}

FizzBuzz(20)



// BMI
// let bmi = weight / Math.pow(height, 2)

// Remove Odd Numbers
function RemoveOddNumbers(arrNumber){ // [100, 3, 5, 7, 8, 10, 11, 20]
    let evenNumber = []
    for(let i=0; i<arrNumber.length; i++){
        if(arrNumber[i] % 2 === 0){
            evenNumber.push(arrNumber[i])
        }
    }

    return evenNumber
}

console.log(RemoveOddNumbers([100, 3, 5, 7, 8, 10, 11, 20]))

// Split String
function SplitStr(txt){
    return txt.split(' ')
}

console.log(SplitStr('Hello, World!'))