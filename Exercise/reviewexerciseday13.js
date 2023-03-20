let myPromise = new Promise((resolve, reject) => {
    try {
        let response = {
            status: 200, 
            isError: false, 
            message: 'Failed', 
        }
    
        if((response.status === 200 && response.isError === true) || response.status === 500){
            throw response 
        }

        resolve(response)
    } catch (error) {
        reject(error)
    }
})

let getMyPromise = async() => {
    try {
        let response = await myPromise
        console.log(response)
    } catch (error) {
        console.log('>>>>>')
        console.log(error)
    }
}

// getMyPromise()










let validateEmail = (email, _cb) => {
    if(email.includes('@')){
        return _cb(true)
    }

    return _cb(false)
}

let outputValidate = (result) => {
    console.log(result)
}

validateEmail('ryan@gmail.com', (result) => {
    console.log(result)
})





const fetchingData = async() => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')     
        console.log(response)
        let data = await response.json()
    } catch (error) {
        
    }
}

fetchingData()