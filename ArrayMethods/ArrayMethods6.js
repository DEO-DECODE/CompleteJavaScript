// Flat Method
/*
It creates a new array with the sub-array elements concatenated
*/
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
console.log("Original Array: ", myArr);
const myArr1=myArr.flat(1);
console.log("After flat 1 ",myArr1)
const newArr2 = myArr.flat(2);
console.log("After flat 2 ", newArr2);