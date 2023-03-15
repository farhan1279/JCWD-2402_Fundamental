let alpha = ['A', 'B', 'C', 'D', 'E', 
'F', 'G', 'H', 'I', 'J', 
'K', 'L', 'M', 'N', 'O', 
'P', 'Q', 'R', 'S', 'T', 
'U', 'V', 'W', 'X', 'Y', 'Z'] 

let str = 'ABC'
str = str.split('').reverse() // CBA
let result = 0
let tempt = 0 // tempt=1; tempt += 3; ---> tempt=1; tempt=26; 
for(let j=0; j<str.length; j++){
    let idxOf = (alpha.indexOf(str[j]) + 1)
    idxOf *= Math.pow(26, j) 
    tempt += idxOf 
}
result += tempt
// console.log(result)



let nums = [2, 2, 1, 1, 3]
let obj = {} // {'2': 1} ---> {'2': 2} ---> {'2': 2, '1': 1}
for(let i=0; i<nums.length; i++){
    if(Object.keys(obj).includes(nums[i].toString())){
        obj[nums[i]]++
    }else{
        obj[nums[i]] = 1
    }
}

for(let val in obj){
    if(obj[val] === 1) console.log(val)
}



let str1 = 'abcd' // abcd
str1 = str1.split('').sort()
let str2 = 'aabc'// aabc
str2 = str2.split('').sort()
let isAnagram = true 
for(let i=0; i<str1.length; i++){
    if(str1[i] !== str2[i]) isAnagram = false 
}
console.log(isAnagram)