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

// func("Sahil", "Manvi","Sakshi");
// let func = function (c = 14, d = "Anshul", e) {
//   console.log(`The value of c is ${c} and d : ${d} and e: ${e}`);
// };
// func("Sahil", "Manvi","Sakshi");
// var func = function (c = 14, d = "Anshul", e) {
//   console.log(`The value of c is ${c} and d : ${d} and e: ${e}`);
// };
/*
How it is, actually interpreted
TypeError: func is not a function
var func;
func();
func= function (c = 14, d = "Anshul", e) {
console.log(`The value of c is ${c} and d : ${d} and e: ${e}`);
};
*/