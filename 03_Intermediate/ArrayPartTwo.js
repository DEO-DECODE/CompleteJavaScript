var isEven = (element) => {
  return element % 2 === 0;
};
// console.log(isEven(4));
// var result=[2,4,6,8].every(isEven);
// console.log(result);
// var result=[2,4,6,9].every(isEven);
// console.log(result);
var result = [2,4,6,8].every((elem)=>{
    console.log(elem);
    return elem%2===0;
})
console.log(result);
/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/