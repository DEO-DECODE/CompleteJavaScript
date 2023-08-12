/*
The flatMap() method maps all array elements and creates a new flat array.
flatMap() creates a new array from calling a function for every array element.
flatMap() does not execute the function for empty elements.
flatMap() does not change the original array.
*/
let arr = [1, 2, 4, 5];
let newArray = arr.flatMap((elem) => {
  return [elem, elem * 2];
});
console.log(newArray);
let cart = [
  {
    name: "Samsung",
    qty: 2,
    price: 10000,
  },
  {
    name: "RedMI",
    qty: 1,
    price: 8000,
  },
];
let newCart = cart.flatMap((elem) => {
  return elem.name === "Samsung"
    ? [
        elem,
        {
          name: "Screen guard",
          qty: 1,
          price: 0,
        },
      ]
    : [elem];
});
console.log(newCart);
let newCart2 = cart.map((elem) => {
  return elem.name === "Samsung"
    ? [
        elem,
        {
          name: "Screen guard",
          qty: 1,
          price: 0,
        },
      ]
    : [elem];
});
console.log(newCart2);
/*
FlatMap ke case me array ke elements ek object hai jb hmne method run kiya to jo original element tha usme ek object bs add ho gya jb samsung ka case the to ek extra object screen guard add ho gya bs lekin baaki ke case me original object hi return ho gya.
But Map ke case me array of object(s) return ho rha tha, jbki originally bs object tha.
*/
// Sorting
let letters = ["d", "e", "f", "a", "b"];
console.log(letters.sort());
let nums = [2, 5, 3, -14, -1];
// Sorting in ascending order.
console.log(nums.sort());
// Sorting in descending order.
console.log(
  nums.sort((a, b) => {
    return b - a;
  })
);
// Sorting array in a random order
let nums2 = [40, 50, 30, 80, 12, 20];
nums2.sort(() => {
  return 0.5 - Math.random();
});
console.log(nums2);