//map()

// const arr = [3,2,4,5,6]
// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }
// const output = arr.map((x)=>x.toString(2));
// const output = arr.map(binary);
// console.log(output);

//filter()

// const arr = [3,2,4,5,6]
// function isEven(x){
//     return x%2 === 0; 
// }
// const output = arr.filter(isEven);
// console.log(output)

//reduce()

const arr = [5,5,5]
// function findSum(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]                            
//     }                                               
// return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function(acc,curr){
//     // acc = sum
//     // curr = arr[i]
//     acc = acc+curr;
//     return acc;
// },0)
// console.log(output)

// const arr = [1,2,3,4,5]
// function findMax(arr){
// }
// console.log(findMax(arr));

// const output = arr.reduce(function(max,curr){
//     if(curr > max){
//         max=curr;
//     }
//     return max;
// },0)
// console.log(output)




                                        // iterate with objects


const user = [
    {firstName:"sai",lastName:"Jyoti",age:"21"},
    {firstName:"shubha",lastName:"Laxmi",age:"22"},
    {firstName:"Rashmi",lastName:"Rekha",age:"23"},
    {firstName:"Subhashree",lastName:"Dash",age:"24"},
    {firstName:"Soumya",lastName:"Ranjan",age:"19"}
]
// const output = user.map((x) => x.firstName+""+x.lastName);
// console.log(output);

// const output = user.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age]
//     }else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{});
// console.log(output)

const output = user.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(output)
