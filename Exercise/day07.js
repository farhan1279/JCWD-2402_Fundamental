// Similar Object
const similarObject = (_obj1, _obj2) => {
    let arrKeyObj1 = Object.keys(_obj1)
    let arrKeyObj2 = Object.keys(_obj2)
    
    for(let i=0; i < arrKeyObj1.length; i++){
        if(arrKeyObj2.includes(arrKeyObj1[i]) === false){
            return 'Object Different'
        }
    }

    return 'Object Same'

}

let obj1 = {
    name: '',
    email: ''
}

let obj2 = {
    name: '', 
    email: ''
}

console.log(similarObject(obj1, obj2))



// Intersection
const intersection = (_objA, _objB) => {
    let newObj = {}
    for(let key in _objA){
        if(_objA[key] === _objB[key]){
            newObj[key] = _objA[key]
        }
    }

    return newObj
}

console.log(intersection({a: 1, b: 2}, {a:1, c: 3}))



// Switch Property
const switchProperty = (_obj) => {
    let arr = []
    for(let i=0; i < _obj.length; i++){
        let newObj = {} // Ryan, David
        for(let key in _obj[i]){
            console.log(_obj[i][key]) // Untuk mengambil value
            console.log(key) // Untuk mengambil key
            newObj[_obj[i][key]] = key 
        }
        console.log(newObj)
        arr.push(newObj)
        console.log(arr)
    }
    return arr
}

console.log(switchProperty([{name: 'Ryan', age: 10}, {name: 'David', age: 20}]))