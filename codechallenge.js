// ***** DATA *****
let numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

let duplicateNumbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

// ***** SHOW DATA *****
function showData(){
    let print = ''

    // 1. Looping untuk mencetak angka + button samping
    for(let i=0; i<numbers.length; i++){
        print += '<tr>'
        for(let j=0; j<numbers.length; j++){
            print += `<td> ${numbers[i][j]} </td>`
        }
        print += `<td><input type="button" value="Sort" id="sortDataSamping${i}" onClick="sortDataSampingDesc(${i})"></td>`
        print += '</tr>'
    }

    // 2. Cetak button yang ada di bawah
    print += '<tr>'
    for(let i=0; i<numbers.length; i++){
        print += `<td><input type="button" value="Sort" id="sortDataBawah${i}" onClick="sortDataBawahDesc(${i})"></td>`
    }
    print += '</tr>'

    document.getElementById("table").innerHTML = print
}

showData()



// ***** SORT DATA SAMPING *****
function sortDataSampingDesc(index){
    let sortData = numbers[index] // [1, 2, 3, 4]
    sortData = sortData.sort(function(a, b){ return b-a }) // [4, 3, 2, 1]
    numbers[index] = sortData 
    // [ [4, 3, 2, 1], [..., ..., ...], ... ]
    
    showData()

    let button = document.getElementById(`sortDataSamping${index}`)
    // Step: Untuk merubah event listener onclik yang ada di dalam button. Yang awalnya onClick untuk descending, kita ubah menjadi ascending
    
    button.onclick = function(){ // Anonymous function untuk menahan function didalamnya agar tidak langsung dijalankan
        sortDataSampingAsc(index)
    }
}

function sortDataSampingAsc(index){
    let sortData = numbers[index]
    sortData = sortData.sort(function(a, b){ return a-b }) 
    numbers[index] = sortData 

    showData()
}



// ***** SORT DATA BAWAH *****
function sortDataBawahDesc(index){
    let sortData = [] // [1, 5, 9, 13]
    for(let i=0; i<numbers.length; i++){ 
        sortData.push(numbers[i][index])
    }
    sortData = sortData.sort(function(a, b){ return b-a }) // [13, 9, 5, 1]

    for(let i=0; i<numbers.length; i++){ 
        numbers[i][index] = sortData[i]
    }

    showData()

    let button = document.getElementById(`sortDataBawah${index}`)
    // Step: Untuk merubah event listener onclik yang ada di dalam button. Yang awalnya onClick untuk descending, kita ubah menjadi ascending
    
    button.onclick = function(){ // Anonymous function untuk menahan function didalamnya agar tidak langsung dijalankan
        sortDataBawahAsc(index)
    }
}

function sortDataBawahAsc(index){
    let sortData = [] // [1, 5, 9, 13]
    for(let i=0; i<numbers.length; i++){ 
        sortData.push(numbers[i][index])
    }
    sortData = sortData.sort(function(a, b){ return a-b }) // [13, 9, 5, 1]

    for(let i=0; i<numbers.length; i++){ 
        numbers[i][index] = sortData[i]
    }

    showData()
}


// [1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12],
// [13, 14, 15, 16],

// LEFT ROTATE
function leftRotate(){
    let arrRotate = []
    let totalRotate = document.getElementById('totalRotate').value
    
    for(let startRotate = 1; startRotate <= totalRotate; startRotate++){ // Acuan looping rotate yang ada di dalamnya ingin dijalankan berapa kali?
        for(let i=numbers.length-1; 0 <= i; i--){ 
            let tempArr = []
            for(let j=0; j < numbers.length; j++){ 
                tempArr.push(numbers[j][i]) 
            }
            arrRotate.push(tempArr)
        }
    
        numbers = arrRotate
        arrRotate = []
    }
    
    showData()
}


// [1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12],
// [13, 14, 15, 16],

// RIGHT ROTATE
function rightRotate(){
    let arrRotate = [] // [13, 9, 5, 1]
    let totalRotate = document.getElementById('totalRotate').value
    
    for(let startRotate = 1; startRotate <= totalRotate; startRotate++){ // Acuan looping rotate yang ada di dalamnya ingin dijalankan berapa kali?
        for(let i=0; i < numbers.length; i++){ // i=0 ---> i=1
            let tempArr = [] // [13] ---> [13, 9, ... ] ---> [13, 9, 5] ---> [13, 9, 5, 1]
            for(let j=numbers.length-1; 0 <= j; j--){ // j=3 ---> j=2 ---> ... ---> j=0
                tempArr.push(numbers[j][i]) // numbers[3][0]: 13 ---> numbers[2][0]: 9 ---> ... ---> numbers[0][0]: 1
            }
            arrRotate.push(tempArr)
        }
    
        numbers = arrRotate
        arrRotate = []
    }
    
    showData()
}



function reset(){
    numbers = duplicateNumbers
    showData()
}