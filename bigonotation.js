// Contant Time / O(1)
// Banyaknya input tidak akan mempengaruhi waktu proses dari algoritma tersebut
// Ex: 
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getFirst(input){
   return input[0]; 
}
getFirst(myArray)



// Linear Time / O(n)
// Banyaknya input akan berbanding lurus dengan waktu proses dari algoritma tersebut
// Ex:
let newArray = [1, 5, 0, 6, 1, 7, 10];
function getMax(input){
    for (var i=0; i<input.length; i++){
        console.log(input[i])
    }
}
let maxNumber = getMax(newArray);



// Quadratic Time / O^n
// Bisa terjadi karena menjalankan proses linear di dalam linear 
// n merupakan jumlah input yang dikuadratkan
// Ex: 
let myArr = [1, 5, 0];
function sort(input){
    for (var i=0; i<input.length; i++){ // O(n)
        let min = input[i];
        for (var j=0; j<input.length; j++){ // O(n)
            console.log(j)
        }
    }
}
let sortedArray = sort(myArr);



// Ologn
// Ketika input yang diberikan sebesar n, maka tahapan suatu algoritma akan berkurang
// berdasarkan suatu faktor
// Ex: Binary Search