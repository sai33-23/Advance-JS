// concatenating without a spread operator

const { promptLoop } = require("readline-sync");

// let arr1 = [1,2,3];
// let arr2 = [5,7];
// arr = arr1.concat(arr2);
// console.log(arr);
 // [ 1, 2, 3, 5, 7 ]

  
// spread operator doing the concat job

let arr = [1,2,3];
let arr2 = [4,5];
arr = [...arr,...arr2];
console.log(arr);
 // [ 1, 2, 3, 4, 5 ]








 








 




