// ***** DATA *****
let numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

function showData(_numbers){
    let output = ``

    // Nge-generate angka dan button sort samping
    for(let i=0; i < _numbers.length; i++){
        output += `<tr>`
        for(let j=0; j < _numbers.length; j++){
            output += `<td>${_numbers[i][j]}</td>`
        }
        output += `<td> <button onclick='sortDesc(${i})'> Sort Desc </button> </td>`
        output += `</tr>`
    }

    // Nge-generate button sort bawah saja
    output += '<tr>'
    for(let i=0; i < _numbers.length; i++){
        output += `<td><button onclick='sortDesc(${i})'> Sort Desc </button></td>`
    }
    output += '</tr>'
    
    document.getElementById('table').innerHTML = output
}

showData(numbers)