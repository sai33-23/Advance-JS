// Regular expression means to match something

let reg = /sai/;
// reg = /sai/g; //g means global
// reg = /sai/i; //i means case insensitive

// console.log(reg);
// console.log(reg.source);
let s = "My name is sai and sai is a singer";

// function to match expression
1. // exec() - This function will return a array for match or null for no match 

let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);ch(reg) //-this is right
// console.log(result3); 
// result = reg.exec(s);
// console.log(result);
//  we can use multiple exec with global flag 

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

2. // test() - returns true of false 
// if reg.exec is not null then true ortherwise false 

let result2 = reg.test(s);
// console.log(result2);  // This will only print true if the "reg" is there in the string "a"

3. // match() - This one we put backward it will return an array of results or null 
// let result3 = s.match(reg) //-this is right
// console.log(result3); 

4. // search() - return index of first match or -1
 
// let result4 = reg.search(s);
// result4 = s.search(reg); 
// console.log(result4);

5. // replace() - returns new replaced string with all the replacements(if no global flag is given,first
// match will be replaced)

let result5 = s.replace(reg,"Papun");
console.log(result5);