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
