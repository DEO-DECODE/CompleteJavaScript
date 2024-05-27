let hotel = {
  name: "Atithi Palace",
  location: "Near Veer Kunwar Singh Colony",
  categories: ["Indian", "Chinese", "Italian"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: {
      open: "10:00AM",
      close: "10:00PM",
    },
    tuesday: {
      open: "11:00AM",
      close: "10:00PM",
    },
  },
};
// Destructuring
let items = [1, 4, 5, 8];

// let [a, b, c, d] = items;
// console.log(a, " ", b, " ", c, " ", d);

// let [first, second] = hotel.categories;
// console.log(first, " ", second);

// let [first, , third] = hotel.categories;
// console.log(first, " ", third);

// [first, second] = [second, first];
// console.log,(first, second);

// Destructuring in nested Array

let nums = [2, 3, [4, [5, 6]]];

// We want to access 4, 5 and 6

let [, , [a, [b, c]]] = nums;
// console.log(a, " ", b, " ", c);

// let { name, location, categories } = hotel;
// console.log(name);
// // console.log(locationa);
// console.log(location)
// console.log(categories);
let { name: nameA, location: locationA, categories } = hotel;
// console.log(nameA);
// console.log(locationa);
// console.log(locationA);
// console.log(categories);

// let { openingHours } = hotel;
// console.log(openingHours);
// let { sunday } = hotel.openingHours;
// let {
//   sunday: { open, close },
// } = hotel.openingHours;
// console.log(open, " ", close);
// console.log(hotel.openingHours);
// console.log(sunday);

// Sets in JavaScript

/*
It is a collection of unique values and it can hold elements of various datatypes
*/

let itemSet = new Set([1, 2, 3, 2, 4, "true", true, "sakshi", "sakshi"]);

let array2 = [...itemSet];
// console.log(array2);

// How to add elements in the set

itemSet.add("Jasleen");
// console.log(itemSet);
// console.log(typeof(itemSet));

// let array1 = Array.from(itemSet);
// console.log(array1);

// How to delete

itemSet.delete(3);
// let array1 = Array.from(itemSet);
// console.log(array1);

array2.push(75);
let array1 = Array.from(itemSet);
// console.log(array2);

// Rest Operator
let user = {
  name: "Sahil",
  age: 19,
  university: "HPCU",
  password: "Kya Password",
};

let { password, ...apartFromPassword } = user;
// console.log(apartFromPassword);
// console.log(password);
let { openingHours, ...diffObject } = hotel;
// console.log(diffObject);

let { sunday, ...otherDays } = hotel.openingHours;
// console.log(otherDays);

// Synchronous Programming
/*
It executes code in a sequential manner, i.e one line after other
It is blocking in nature. i.e each operation must be completed before the other starts
*/
// console.log("start");

// function task() {
//   for (let i = 0; i < 5; ++i) {
//     console.log(`Hii ${i}`);
//   }
// }
// task();
// console.log("end");

// Asynchronous programs
/*
It simply allows parallel execution.
It is used in tasks that takes time, like timers, or network requests
It is non-blocking in nature
*/

// console.log("Start");
function asyncTask() {
  setTimeout(() => {
    console.log("I will wait for 3 seconds");
  }, 3000);
}

// asyncTask();
// console.log("end");

// Promises in JavaScript.
/*
The Promise object represents the eventual completion or failure of an asynchronous operation and it's resulting value.
The Promise constructor takes a callback function as an argument, which in turn takes  two argumenst, resolve and reject functions.
If the promise returns successfully , resolve is called and if an error occurs , reject will be called.
*/

// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     console.log("I am a promise and I will resolve after 3 seconds");
//     resolve(true);
//     resolve("Anshul");
//   }, 3000);
// });
// let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     // console.log("I am a promise and I will be rejected 3 seconds");
//     reject(new Error("I am an error"));
//   }, 3000);
// });

// p1.then(
//   (value) => {
//     console.log(`Resolved to ${value}`);
//   },
//   (error) => {
//     console.log(`I will be executed when reject will be called`);
//     console.log(error);
//   }
// );

// p2.then(
//   (value) => {
//     console.log(`Resolved to ${value}`);
//   },
//   (error) => {
//     console.log(`I will be executed when reject will be called`);
//     console.log(error);
//   }
// );

// let pa = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Promise resolved");
//   } else {
//     reject("Promise Rejected");
//   }
// });

// pa.then(
//   (value) => {
//     console.log(value);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// pa.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.log(err);
// });
let arr = [];
const fetchmoreData = (arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   arr.push({ name: "Dev" });
      if (arr.length > 0) {
        resolve(arr);
      } else {
        reject("Some Technical Error");
      }
    });
  });
};

fetchmoreData(arr)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("I will be executed in either of the case");
  });

