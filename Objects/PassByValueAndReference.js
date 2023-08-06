/*Pass by Reference*/
let arr = [1, 2, 3, 4, 5];
let getRef = arr;
// console.log("Original Array : ", arr);
// console.log("GetRef array : ", getRef);
// //
// getRef[5]=7;
// console.log("Original Array : ", arr);
// console.log("GetRef array : ", getRef);
// //
/*
In case of Pass by reference , both the arrays are pointing to same memory location.
*/
/*Pass by Value*/
let passByValueArray = [...arr, 17];
passByValueArray[6] = 9;
console.log("Original Array : ", arr);
console.log("Pass by value array : ", passByValueArray);
/*
Here a copy is created and if we manipulate one that change is not reflected in other.
*/
// Copying JavaScript Objects.
var person = {
  name: "Abhishek",
  age: 30,
  address: "Street 2100",
  phone: 7231950617,
};
var anotherPerson={...person};
// Now it's Pass by value.
anotherPerson.name="Dev";
anotherPerson.age=22;
console.log(anotherPerson);