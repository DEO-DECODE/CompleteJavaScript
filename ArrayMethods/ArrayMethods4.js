/*
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.
*/
// Sum of all elements using reducer method
let num = [1, 5, 8, 3, 9, 4, 16];
let sum = num.reduce((total, curElem) => {
  return total + curElem;
}, 0);
console.log(sum);
const numbers = [15.5, 2.3, 1.1, 4.7];
// Reduce ka pehla argument hai value jisme accumulate ho rha  and dusra hai curElement.
let newSum = numbers.reduce(getSum, 0);
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(newSum);
// Find Method
/*
It returns the first element(Not index), we are looking for
The find() method executes a function for each array element.
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array.
*/

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
let results = students.find((elem) => {
  return elem.name === "Dev";
});
console.log(results);
// let results=students.filter((elem)=>{
//     return elem.name==="Dev";
// })
// console.log(results);

// example 2
const ages = [3, 10, 18, 20, 25];

function checkAge(age) {
  return age > 18;
}
console.log(ages.find(checkAge));
