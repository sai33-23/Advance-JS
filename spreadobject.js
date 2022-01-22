
// with a spread operator
var myName="kumar"
// console.log({...myName})
// { '0': 'k', '1': 'u', '2': 'm', '3': 'a', '4': 'r' }
 
// Without a spread operator

index=0
newDict={}
for(i of myName){
   console.log(i);
   newDict[index]=i
   index++
}
console.log(newDict);

// { '0': 'k', '1': 'u', '2': 'm', '3': 'a', '4': 'r' }
