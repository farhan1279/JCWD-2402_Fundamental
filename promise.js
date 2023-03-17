let database = [1, 2, 3, 4, 5]
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Masuk')
        let currentLength = database.length 
        database.pop()
        if(database.length !== currentLength){
            return resolve(database)
        }else{
            return reject('Delete Failed')
        }
    }, 2000)
})

// myPromise
// .then((res) => {
//     console.log(res)
// })
// .catch((error) => {
//     console.log('>>> Masuk ke Catch')
//     console.log(error)
// })
// .finally(() => {
//     console.log('Finally')
// })

