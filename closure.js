function x(){
    var a=7;
    function y(){
        console.log(x);
    }
    return y;
}
var z = x();
console.log(z);
z();


function x(){
    var a=7;
    return function y(){
        console.log(x);
    }
}
var z = x();
console.log(z);
z()




// Function along with it's lexical scope bundles together forms a closure 