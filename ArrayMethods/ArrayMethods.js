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
// let joined =letters.join(' ');
// console.log(joined);
// console.log(typeof joined);
// let joined2 =nums.join(',');
// console.log(joined2);
// console.log(typeof joined2);
/* 
It is not a mutating method, It converts the original array into a string.
 */
// Slice method
/*
It is used to extract part of the array without mutating the original array.
*/
let nums2 = [3, 5, 7, 9, 2];
// let extractedArray = nums2.slice(1, 4);
// console.log("Original Array is : ", nums2);
// console.log("Extracted Array is : ", extractedArray);
let extractedArray = nums2.slice(1);
console.log("Original Array is : ", nums2);
console.log("Extracted Array is : ", extractedArray);