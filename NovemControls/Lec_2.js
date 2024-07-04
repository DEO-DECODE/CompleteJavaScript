// String in JavaScript
// String in JavaScript represents , sequence of characters
// let str = 'Hello World';
// let str="Hello WORLD"
// Using Backticks
// console.log(`Hello Sneha`);
// If we want to use variables with String, we can do that using backticks
function sayName(name) {
  console.log(`Hey ! ${name}`);
}
// sayName("Dev");
// sayName("Sneha");
// sayName("Prachi");
let str1 = "Novem Controls";
// Accessing Characters
/*
// Name of String [indexValue]
*/
// console.log(str1[3]);
/*
str1[0]-> N
str1[1]-> o
...
*/
// Concat
let str2 = "It";
let str3 = str1 + "abc" + str2;
// Novem ControlsabcIt
// console.log(str3);

// String Methods
// Finding Length of the String
// console.log(str3.length);
// console.log(str1.length());
// We will not be using round braces with Length otherwise, it will give an error.
// UpperCase
let str4 = str3.toUpperCase();
// console.log(str4);
// indexOf
// It is used to find the index of characters present in the string
let stra = "VishaliVi";
//         012345678
// console.log(stra.indexOf("V"));
// console.log(stra.indexOf("Vi"));
// console.log(stra.indexOf("Vik"));

//
let word = "HellooGuyz";
// console.log(word[1]);
word[1] = "x";
// console.log(word[1]);
//String can't be modified once it is initialized.

// Includes
/*
 */
// console.log(word.includes("Sneha"));

// Trim
/*
It will remove white spaces from both sides of the string
*/
let text = "    Hey              Everyone       ";
// console.log(text);
// console.log(text.trim());

// Slice
// It is used to extract part of string or substring
let str5 = "Hiii Everyone";
let str6 = str5.slice(2);
let str7 = str5.slice(2, 8);
console.log(str7);

// Split
// It returns an array
let str8 = "Hey Everyone , I am Arfa";
let arr = str8.split(" ");
console.log(arr);
// let str9 = "Hello World";
// let arr2 = str9.split("l");
// console.log(arr2);
let str9 = "Helllo World";
let arr2 = str9.split("l");
console.log(arr2);