// Asynchronous
// console.log('Task-1 Running')
// setTimeout(() => {
//     console.log('Task-2 Running')
// }, 3000)
// console.log('Task-3 Running')



let database = [1, 2, 3, 4, 5]

let hapusData = () => {
    setTimeout(() => {
        database.pop()
    }, 5000)
}

let showData = () => {
    setTimeout(() => {
        console.log(database)
    }, 3000)
}

hapusData() 
showData()



let hapusData1 = (callback) => {
    setTimeout(() => {
        database.pop()
        callback()
    }, 2000)
}

hapusData1(() => {
    hapusData1(() => {
        hapusData1(() => {
            setTimeout(() => {
                console.log(database)
            }, 1000)
        })
    })
}) 