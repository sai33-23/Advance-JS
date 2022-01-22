const getRollNo = ()=>{
    setTimeout(()=>{
        console.log("getting Roll no.");
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

    setTimeout((rollno)=>{
        const biodata = {
            name:"sai",
            age:21
        }
        console.log(`My name is ${biodata.name}, rollno -- ${rollno}.
         and i'm ${biodata.age}years old`)
        setTimeout((name)=>{
            biodata.gender = "female";
            console.log(` gender - ${biodata.gender}`)
        },2000,biodata.name);
    },2000,roll_no[1]);
    },2000);
}
getRollNo()