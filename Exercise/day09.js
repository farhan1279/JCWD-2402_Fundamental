// Uppercase Each Alpha
// Ex. Input: 'abc'
//     Output: ['Abc', 'aBc', 'abC']

let str = 'abcd'
let newArr = []
for(let i=0; i<str.length; i++){
    newArr.push(str.replace(str[i], str[i].toUpperCase()))
}

console.log(newArr)



// Repeat Character
// Ex. Input: `abc`
//     Output: `A-Bb-Ccc`
function RepeatCharacter(str){
    let arr = []
    for(let i=0; i<str.length; i++){
        arr.push(str[i].toUpperCase() + str[i].repeat(i).toLowerCase()) // A -> B + b: Bb -> C + cc -> Ccc
    }
    console.log(arr.join('-'))
}

RepeatCharacter('abc')