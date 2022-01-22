console.log("Here is the operators : +,-,*,%")
let a = require("readline-sync");
let num1 = a.questionInt("enter the 1st number");
let num2 = a.questionInt("enter the 2nd number");

switch (num1,num2){
    case "+":
        console.log(num1 + num2)
}
