// var x let x const
// var          : Tidak mengenal scope sama sekali
// let & const  : mengenal aturan scope
// {}

// 1. Variable let / const yang di define di global, dapat diakses di local scope
//    Namun apabila di define di local, tidak dapat diakses di global scope
let name = 'Defry'
{
    console.log(name)
}

// {
//     let name1 = 'Ryan'
// }
// console.log(name1)



{
    let name2 = 'Egy'
    {
        var name2 = 'Enzo'
        console.log(name2)
    }
}