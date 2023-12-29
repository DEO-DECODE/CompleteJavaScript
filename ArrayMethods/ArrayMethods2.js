// Splice Method
// It is used to add new elements in the array
// Array.splice(index, deleteValue, valueToBeAdded)
// It is a mutating Method.
// Return deleted items in the form of array.
let nums=[3, 5, 7, 9, 2];
// let updated=nums.splice(1, 2, 12, 17, 112);
// console.log("Original Array is : ", nums);
// console.log("Deleted Array is : ", updated);
let updated=nums.splice(1, 0, 12, 17, 112);
console.log("Original Array is : ", nums);
console.log("Deleted Array is : ", updated);