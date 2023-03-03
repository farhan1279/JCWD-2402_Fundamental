// Convert Days
// totalDays = 400
// year = 1 
// sisaHari = 35
// bulan = 1
// sisaHari = 5

let totalDays = 400
let leftDays
let year = Math.floor(totalDays / 365)
leftDays = totalDays % 365 // 35
let month = Math.floor(leftDays / 30)
leftDays = leftDays % 30 
console.log(`${totalDays} = ${year} Year, ${month} Month, ${leftDays} Hari`)