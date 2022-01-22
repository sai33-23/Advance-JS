 
function sayHi(){
    console.log(myName); 
    // output kumar
    var frdsName="Pavan";   
    // local scope or function scope
    console.log(friendsName);
    //  output pavan
  }
  sayHi();
  console.log(myName);
//  output kumar
  console.log(friendsName); 
//   output Error: ReferenceError: frdsName is not defined
    