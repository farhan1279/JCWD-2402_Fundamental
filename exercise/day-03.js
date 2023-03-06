// Swap Case
let text = 'The QuiCk BrOwN Fox'
let output = ''
for(let i=0; i < text.length; i++){
    if(text[i] === text[i].toLowerCase()){
        output += text[i].toUpperCase()
    }else{
        output += text[i].toLowerCase()
    }
}
console.log(output)

// Sort Number using Conditional Statement
let numbers = '312'

// Shows Result Based on typeof
let input = 'abc'
if(typeof input === 'string'){
    console.log(1)
}else if(typeof input === 'number'){
    console.log(2)
}else{
    console.log(3)
}

// Change Letter a tobe *
let word = 'purwadhika digital school'
let letterToReplace = /p/g
word = word.replace(/a/g, '*')
console.log(word)