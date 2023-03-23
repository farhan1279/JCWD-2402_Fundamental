// Pascal
function Pascal(numRows){
    let output = [[1], [1, 1]] // [[1], [1, 1], ..., ..., ...]

    for(let i=2; i<numRows; i++){
        let temp = [1] // [1, 2]
        let prevArr = [...output[i-1]] // [1, 1]

        for(let j=0; j<prevArr.length; j++){
            if(prevArr[j+1]){
                temp.push(prevArr[j] + prevArr[j+1])
            }
        }

        temp.push(1)
        output.push(temp)
    }

    console.log(output)
}

Pascal(5)