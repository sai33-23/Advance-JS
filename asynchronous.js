// async function fetchText() {
//     let response = await fetch('/readme.txt');
//     let data = await response.text();
//     console.log(data);
// }

// setTimeout(myFunction, 3000);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "I love You !!";
// }



// callback using setTimeOut

// function game() {
//     console.log('Puzzle');
// }
// function names(name) {
//     console.log('Hello' + ' ' + name);
// }
// setTimeout(game, 5000);// function func1(n){
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
// names('Sarthak');




// function
// function wow (name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am jonny,want to fuck you harder');
// }

// // passing function as an argument
// wow ('Mia Khalifa', callMe);