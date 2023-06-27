function sayHello(name){
    console.log("Hello there , Devv!")
    console.log(`Hell there !!!!${name}`);
}
// sayHello();
// Output:
/*
Hello there , Devv!
Hell there !!!!undefined
*/
// sayHello("Dev")
// Output:
/*
Hello there , Devv!
Hell there !!!!Dev
*/
function sayName(name){
    return `Hello ${name} !!!`;
}
var greetings=sayName();
console.log(greetings);
// Output:
/*
Hello undefined !!!
*/
console.log(sayName("Shru"));
// Output:
/*
Hello Shru !!!
*/