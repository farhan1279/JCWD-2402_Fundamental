// 1.
// Cara1:
function majorityObj(arrNumber){
    let obj = {} // {2: 1, 3: 2}

    for(val of arrNumber){
        if(!obj[val]){ // Apakah property val ada di dalam obj?
            obj[val] = 1
        }else{
            obj[val]++
        }
    }

    for(let key in obj){
        if(obj[key] > (arrNumber.length/2)){
            return key
        }
    }

    return 0
}

// console.log(majorityObj([2, 2, 1, 1, 1, 2, 2, 3, 3, 3]))



// 2. Roman
const roman = (str) => {
    let romanCharacters = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    };

    let result = 0

    for(let i = 0; i < str.length; i++){
        let now = str[i]
        let next = str[i+1]
        console.log(now)
        console.log(next)
    
        if(romanCharacters[now] < romanCharacters[next]){
            result -= romanCharacters[now]
        }else{
            result += romanCharacters[now]
        }
    }

    console.log(result)
};

roman('MCMXCIV')



const stock = (arr) => {
    let copy = [...arr]  // [7, 3, 4, 6, 1] = 3 
    arr.sort()// [1, 3, 4, 6, 7]
   
    for(let i=0; i<arr.length; i++){
        let smallest = arr[i] // 1, 3
        for(let j=arr.length-i; j>i; j--){
            let nextStock = arr[j] // 7, 6

            if(copy.indexOf(smallest) < copy.indexOf(nextStock)){
                return nextStock - smallest
            }
        }
    }

    return 0
}

console.log(stock([7, 1, 5, 3, 6, 4]))
console.log(stock([7, 6, 4, 3, 1]))
console.log(stock([7, 3, 4, 6, 1]))