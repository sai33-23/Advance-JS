// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr)

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   persons.map(getFullName);
  
//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }


//multiply thw elements of the arry with their indices.
// const numArray = [6, 7, 15, 22, 45];
// const numArrayMult = numArray.map(function numMultIdx(num, idx) {
//   return num*idx;
// })
// console.log(numArrayMult);


const myMap = new Map();
const key1 = "myStr", key2 = {}, key3 = function(){};

myMap.set(key1, "This is a boy");
myMap.set(key2, "Want to go home");
myMap.set(key3, "I'm here");
console.log(myMap);

let value1 = myMap.get(key1);
console.log(key2);

console.log(myMap.size);

for(let [key,value] of myMap ){
    console.log(key,value)
}

// Get only keys

for(let key of myMap.keys()){
    console.log("key is",key);
}

//Get only values

for(let value of myMap.values()){
    console.log("value is",value);
}


myMap.forEach((value,key) => {
    console.log("key is",key)
    console.log("value is",value)
})

// converting map to an array

let myArray = array.from(myMap);
console.log("map to array is ",myArray);

//map keys to an array

let myKeysArray = array.from(myMap.keys());
console.log("map to  keys array is ",myKeysArray);

// map values to array

let myValuesArray = array.from(myMap.values());
console.log("map to values array is ",myValuesArray);