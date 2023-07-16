/*
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.
*/
let itemSet = new Set([2, 4, 4, 3, 5, 5, 7]);
// console.log(itemSet);
// console.log(typeof itemSet);
// console.log(itemSet.size);
// console.log(itemSet.has(11));
itemSet.add(50);
console.log(itemSet);
itemSet.delete(5);
console.log(itemSet);

let uniqueString = new Set("Programmers");
console.log(uniqueString);
// Using forEach method for looping
itemSet.forEach((Element) => {
  console.log(Element);
});
let anotherItemSet = [...new Set([1, 2, 4, 5, 6, 6, 5])];
console.log(anotherItemSet);
console.log(typeof anotherItemSet);
