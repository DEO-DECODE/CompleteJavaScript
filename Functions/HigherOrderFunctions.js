// Higher Oreder Functions
/*
Functions which contain other function to do some tasks.
// Callback Function: Other function can be argumentd
// Closure Function: Other function can be inner return value.
*/
let upperCase=(str)=>{
    return str.toUpperCase();
}
let lowerCase=(str)=>{
    return str.toLowerCase();
}
let transformer=(str, fun)=>{
    return fun(str);
}
console.log(transformer("Dev", upperCase));
console.log(transformer("Dev", lowerCase));
