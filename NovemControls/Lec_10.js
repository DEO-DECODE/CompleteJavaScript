// Map method
let arr = [12, 10, 14, 15, 20];
// It will return an array after traversing each element in the array.
// We can use it for traversal as well.
// Length of the array returned will be equal to the original array.
// let newArr = arr.map((elem) => {
//   console.log(elem);
// });
// console.log(newArr);
// let newArr = arr.map((elem) => {
//   console.log(elem);
//   return elem;
// });
// console.log(newArr);
// let newArr = arr.map((elem, index) => {
//   console.log(elem + " present at " + index);
//   return elem;
// });
// console.log(newArr);

// let users = [
//   { firstName: "Dev", lastName: "Raj" },
//   { firstName: "Sakshi", lastName: "Soni" },
//   { firstName: "Vishakha", lastName: "Kapila" },
//   { firstName: "Abhi", lastName: "Singh" },
// ];

// let modifiedUsers = users.map((elem) => {
//   console.log(elem);
// });
// let modifiedUsers = users.map((elem) => {
//   //   console.log(elem);
//   return elem.firstName + " " + elem.lastName;
// });
// console.log(modifiedUsers);
// let modifiedUsers = users.map((elem) => {
//   return elem.firstName + " " + elem.lastName;
// });
// console.log(modifiedUsers);

// let modifiedUsers2 = modifiedUsers.map((elem) => {
//   let arr = elem.split(" ");
//   //   console.log(arr);
//   return arr.join(" and ");
// });
// console.log(modifiedUsers2);

// Filter Method

/*
Filter method is used to return a newArray that passes the specific condition, that we provide.
The callback function should return true, to keep the element or false to filetr it out.
// Non-Mutating
*/

// let arr2 = [45, 65, true, 0, null, undefined, false, -45];
// let truthValues = arr2.filter(Boolean);
// console.log(truthValues);

// let numbers = [12, 41, 65, 85, 95];
// let newArr = numbers.filter((elem) => {
//   return elem > 50;
// });
// console.log(newArr);
// function checkLetters(name) {
//   for (let i = 0; i < name.length; ++i) {
//     if (name[i] === "a") {
//       return true;
//     }
//   }
//   return false;
// }
// function checkLetters2(name) {
//   if (name.indexOf("a") === -1) {
//     return false;
//   }
//   return true;
// }
// let studentList = ["Abhimanyu, Sahil, Tamanna", "Jusleen", "Dev"];

// let newList = studentList.filter(checkLetters2);
// console.log(newList);

// Find method
/*
It returns the first element that satisfy the condition.
If no elemenet is present that satisfy the condition , it will return undefined.
The typeOf returned element will be same as element that satisfy the condition.
It is a non-mutating method.
*/
let students = [
  { name: "Akhilesh", id: 0 },
  { name: "Abhimanyu", id: 1 },
  { name: "Anshul", id: 2 },
  { name: "Manvi", id: 3 },
  { name: "Abhimanyu", id: 4 },
];

// let elem = students.find((elem) => {
//   return elem.id === 1;
// });
// let elem = students.find((elem) => {
//   return elem.name === "Anshul";
// });

// console.log(elem);
let elem = students.find((elem) => {
  return elem.name === "Abhimanyu";
});

console.log(elem);

let numbers = [45, 56, 86, 12, 94, 145];
// let elem= numbers .find((elem)=>{
//     return elem>75;
// })
// console.log(elem);
// let elem = numbers.find((elem) => {
//   return elem < 0;
// });
// console.log(elem);
// let elem = numbers.find((elem, index) => {
//   console.log(`Checking for ${elem} which is at ${index}`);
//   return elem > 75;
// });
// console.log(elem);
