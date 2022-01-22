// without a spread operator
// var place={name:"paris",country:"France","name":"paris"}
// var duplicate=Object.assign({},place);
// console.log(duplicate)

// Explanation:
// For copying a object we use Object.assign() the same we can do with a spread operator with a grace
 
// With a spread operator
// var duplicate ={...place}
// console.log(duplicate);

// Without a spread operator
// This is an operation you normally perform to combine objects.

var mynewCar={newCarName:"ROlls Royce",newCarColour:"brown"}
var myOldCar={oldCarName:"Lamborghini",oldCarColour:"grey"}
var allCars=Object.assign({},mynewCar,myOldCar)
console.log(allCars)
