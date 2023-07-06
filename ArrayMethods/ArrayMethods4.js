/*
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
*/
// Sum of all elements using reducer method
let num = [1, 5, 8, 3, 9, 4];
let sum = num.reduce((total, curElem) => {
  return total + curElem;
}, 0);
console.log(sum);
// Find Method
// It returns the first element, we are looking for
let students = [
  {
    id: 1,
    name: "Dev",
  },
  {
    id: 2,
    name: "Shri",
  },
  {
    id: 3,
    name: "Shru",
  },
  {
    id: 4,
    name: "Dev",
  },
];
// let results=students.find((elem)=>{
//     return elem.name==="Dev";
// })
// console.log(results);
let results=students.filter((elem)=>{
    return elem.name==="Dev";
})
console.log(results);
