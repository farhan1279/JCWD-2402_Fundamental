const myFunction = async() => {
    try {
        let response1 = await myPromise
        
        console.log(response1)
    } catch (error) {
        console.log(error)
    }
}

// myFunction()



let startPromise = new Promise((resolve, rejected) => {
    let response = {
        status: 200, 
        isError: true, 
        message: "Email Already Register"
    }

    if(response.status === 200 && response.isError === true){
        resolve(response)
    }
    else{
        rejected(response)
    }
})

const tryAndCatch = async() => {
    try {
        let result = await startPromise // Apabila success, akan disimpan ke result. Apabila gagal, langsung di pass ke .catch
       
        if(result.status === 200 && result.isError === true){
            throw 'Success Tapi Gak Berhasil'
        }
    } catch (error) {
        console.log(error)
    }
}

tryAndCatch()