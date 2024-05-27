// IIFE
// Immediately Invoked Function Expression
// (function () {
//   console.log("Hey");
//   //Protect this local Scope from outside access or global access
// })();

// (function () {
//   var variab = "Random";
//   console.log("I am limited to this block only " + variab);
// })();
// console.log(variab);
/*
IIFE helps to keep the global scope clean by encapsulating variables and function +s
within a scope or we can say it avoids global scope popllution
*/

// (function () {
//   console.log(hoistedVar);
//   var hoistedVar = "I am a hoisted variable";
// })();

// Array Methods

//Reverse method
// let numbers = [45, 85, 67, 75];
// numbers.reverse();
// console.log(numbers);
// Reverse is a mutating method

//Join method
// const fruits = ["apple", "banana", "grapes"];
// let str = fruits.join("and");
// console.log(fruits);
// str = fruits.join();
// console.log(str);
/*
There for it's not a mutating method.
Join method returns a string.
*/
// Slice
// let arr = ["vish", "sak", "man", "soni", "sahil"];
// let arr2 = arr.slice(1);
// let arr3= arr.slice(2,4);
// console.log(arr);
// console.log(arr3);
/*
When we have two arguments in slice method, the firstIndex is inclusive and the second one is exclusive.
It returns a new array
It is not a mutating method.
*/

// Splice Method

let arr = [45, 65, 8, 7, 13, 14, 20, 74];
// console.log(arr);
// let arr2 = arr.splice(3, 2);
// console.log(arr);
// console.log(arr2);
// let arr3 = arr.splice(2, 2, 4, 5, 6);
// console.log(arr);
/*
[45,65,8,7,13,14,20,74]
arr.splice(2,2);
[45,65,13,14,20,74];
[45,65,4,5,6,13,14,20,74]
*/
// console.log(arr);
// let arr3 = arr.splice(2, 4, 4, 5);
// console.log(arr);
// console.log(arr3);
// console.log(arr);
// let arr3 = arr.splice(2, 4, [4, 5]);
// console.log(arr);
// console.log(arr3);
// console.log(arr);
// let arr3 = arr.splice(2, 4, [4, 5], "sakshi");
// console.log(arr);
// console.log(arr3);
// console.log(arr);
// let arr3 = arr.splice(2, "sakshi");
// console.log(arr);
// console.log(arr3);
/*

It is a mutating method.
IIt returns an array which consists of extracted elements.
(start index, length, element we will add)
*/
// Nested Array Example
let nestedArray = [
  45,
  46,
  { num: 12, arr: [4, "Akhilesh", ["manvi", "tamanna"]] },
];
/*
access
tamanna
*/
