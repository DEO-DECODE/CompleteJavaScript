function nameOfFunction(){
    console.log("You are running code present inside the function.");
}
// nameOfFunction();
let fun=function(){
    console.log("This is also an example of function");
}
// fun();
let invitation=function(name = "defaultName", time ="night"){
    console.log(`Welcome ! ${name} at ${time}`);
    console.log("Welcome ! "+name +" at " +time);
}
invitation("Dev", "Afternoon");
invitation();
let ageCalculation=function(birthYear, currentYear=2023){
    let age=currentYear-birthYear;
    return age;
}
let functionResult=ageCalculation(2000, 2022);
console.log(functionResult);
console.log(`Shruti's age is ${ageCalculation(2002)}`);
