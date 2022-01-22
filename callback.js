// function func1(n){
//     console.log("shanti")
// }
// function func2(n1,callback){
//     console.log("Gupta")
//     callback
// }
// func2(func1())

// function a (surname,callback){
//     callback("Shanti"+ `${surname}`)
// }
// function b (name){
//     console.log(name)
// }
// a("kumari",b)

function name_u1 (name,surname){
    console.log(name+" "+surname)
}
function name_u2(callback){
    callback("shanti","kumari")
}
name_u2(name_u1)