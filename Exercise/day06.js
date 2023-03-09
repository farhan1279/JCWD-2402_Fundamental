// Calculate Students Data
// let students = [
//     {
//         name: 'Faroh', 
//         email: 'faroh@yahoo.com',
//         dob: '2000-10-10',
//         score: 100
//     },
//     {
//         name: 'Enzo', 
//         email: 'enzo@yahoo.com',
//         dob: '2005-10-10',
//         score: 99
//     },
//     {
//         name: 'Rizky', 
//         email: 'rizky@yahoo.com',
//         dob: '1999-12-20',
//         score: 98
//     }
// ]

// function getAge(dob){
//     let dobInMs = new Date(dob).getTime()
//     let nowInMs = new Date().getTime()
//     let age = Math.floor((nowInMs / (1000 * 24 * 3600 * 365)) - (dobInMs / (1000 * 24 * 3600 * 365)))
    
//     return age 
// }

// function Calculate(){
//     let score = []
//     let sumScore = 0

//     for(let i=0; i < students.length; i++){
//         score.push(students[i].score)
//         sumScore += students[i].score
//     }
    
//     return {
//         maxScore: Math.max(...score),
//         minScore: Math.min(...score),
//         average: sumScore / students.length
//     }
// }

// console.log(Calculate())



