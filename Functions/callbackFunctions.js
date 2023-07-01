// Example 1
var talk= function(fx){
    fx();
}
var sayHi=function(){
    console.log("Hiii!");
}
talk(sayHi);
// Example 2
var calc=function(fx, a, b){
    return fx(a, b);
}
var sum=function(a,b){
    return a+b;
}
console.log(calc(sum,4,5));
/*
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
When you pass a function as an argument, remember not to use parenthesis.
*/