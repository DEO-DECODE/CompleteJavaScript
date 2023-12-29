let letters = ["a", "b", "c", "d"];
// Reverse (Mutate the original array);
// letters.reverse();
// console.log(letters);
let nums = [1, 2, 3, 4, 5];
let concated = nums.concat(letters);
// console.log(concated);
// Concat is not a mutating method.
// Using Spread operator.
let newArray = [...letters, ...nums];
// console.log(newArray);
// console.log(nums, letters);
// Join method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text);
let joined = letters.join("X");
console.log(joined);
console.log(typeof joined);
/*
The join() method returns an array as a string.
The join() method does not change the original array.
*/
// let joined2 =nums.join(',');
// console.log(joined2);
// console.log(typeof joined2);
/* 
It is not a mutating method, It converts the original array into a string.
 */
// Slice method
/*
It is used to extract part of the array without mutating the original array.
The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
*/
let nums2 = [3, 5, 7, 9, 2, 7, 8];
// let extractedArray = nums2.slice(2, 4);
// // first v index hai and Second v index hai.
// console.log("Original Array is : ", nums2);
// console.log("Extracted Array is : ", extractedArray);
let extractedArray = nums2.slice(1);
console.log("Original Array is : ", nums2);
console.log("Extracted Array is : ", extractedArray);
