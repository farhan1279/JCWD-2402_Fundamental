// Muttable
// Sebuah variable yang apabila di copas, akan merubah value dari variable aslinya
// Apabila memiliki value berupa array & object (non-primitive data types)
let students = ['Egy', 'Jonathan', 'Ruth']
let newStudents = students // ['Egy', 'Jonathan', 'Ruth']
newStudents[0] = 'Pwddd'
console.log(students)
console.log(newStudents)

let campusPwd = ['BSD', 'JKT', 'BTM'] // Immutable
let newCampusPwd = [...campusPwd] // ... spread operator
newCampusPwd[0] = 'YGJ'
console.log(campusPwd)
console.log(newCampusPwd)

// Immutable
// Sebuah variable yang apabila di copas, tidak akan merubah value dari variable aslinya
// Apabila memiliki value berupa string, number, boolean, dst (primitive data types)
let name = 'Egy'
let newName = name // Egy
newName = 'Defryan'
console.log(name)
console.log(newName)