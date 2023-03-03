// Palindrome
// Apabila susunan kata nya dibalik, masih membentuk kata yang sama
// kakak -> kakak
// katak -> katak
// madam -> madam
let word = 'rar' // length: 3; jumlahIndex: 2
let reverseWord = ''

for(let i=word.length-1; i >= 0; i--){
    reverseWord += word[i]
}
// i = 2; 2 >= 0? true; reverseWord += word[2] -> r
// i = 1; 1 >= 0? true; reverseWord += word[1] -> a -> ra
// i = 0; 0 >= 0? true; reverseWord += word[0] -> r -> rar

if(word === reverseWord){
    console.log('Palindrome')
}else{
    console.log('Not Palindrome')
}



// Remove Search String
let str = 'Hello, World!'
let strToRemove = 'ell'
let result = str.replace(strToRemove, '')
console.log(result)



// Capitalize Each Word
// ex. purwadhika digital school

let texttt = 'pwd dgtl schl'
let output = ''
let newTexttt = texttt.split(' ')
for(let i=0; i < texttt.length; i++){
    if(texttt[i-1] === ' '){
        output += texttt[i].toUpperCase()
    }else if(i === 0){
        output += texttt[i].toUpperCase()
    }else{
        output += texttt[i]
    }
}

// console.log(output)

