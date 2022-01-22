// resolve
// reject
// pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Your promises will be resolved")
                resolve();
            } else {
                console.log("Your promise has not been resolved")
                reject("Sorry not fulfilled")
            }
        },2000)
    })
}
func1().then(function(){
    console.log("Sai:Thanks for resolving")
}).catch(function(error){
    console.log("Sai:Very bad bro"+error)
})


// func1 is a function which will return a promise.If error is true ho gaya then 
// 1st wala print karega if not 
// then 2nd wala print karega.
// if function is resolve then it will go toString.then method 

// catch - reject,then - resolve 