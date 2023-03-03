// Odd or Even
let number = 10
if(number % 2 === 0){
    console.log('Even Number')
}else if(number % 2 !== 0){
    console.log('Odd Number')
}

// Prime or Not 
let number1 = 7 // 2 3 4 5 6
let isPrime = false // false -> true; true; true; true; true;
for(let i=2; i < number1; i++){
    if(number1 % i === 0){
        isPrime = false
        break;
    }else{
        isPrime = true 
    }
}

if(isPrime){
    console.log('Is Prime')
}else{
    console.log('Not Prime')
}

// Sum Number 1 to N
let n = 5 // 1 + 2 + 3 + 4 + 5
let result = 0 // 0 + 1 = 1; 1 + 2 = 3; 3 + 3 = 6; ... ; 10 + 5 = 15

for(let i=1; i <= n; i++){
    result += i
}
console.log(result)

// Factorial 
// 3! -> 1 x 2 x 3
// 5! -> 1 x 2 x 3 x 4 x 5
let f = 5 
let output = 1

for(let i=1; i <= f; i++){
    output *= i
}
console.log(output)

// Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13
let fibo = '01'
let max = 5
for(let i=2; i < max; i++){
    fibo += Number(fibo[i-1]) + Number(fibo[i-2])
}
console.log(fibo)