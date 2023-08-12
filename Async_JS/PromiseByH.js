/*
The Promise object represents the eventual completion or failure of an asynchronous operation and it's resulting value
The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.
*/
console.log(1);
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am a promise and I am resolved");
    resolve(true);
  }, 2000);
});
console.log(2);
let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am a promise and I am rejected");
    reject(new Error("I am an error"));
  }, 4000);
});
console.log(3);
// To get the value
p1.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

// To catch the errors
// p2.catch((error) => {
//   console.log("some error occurred in p2"+ error);
// });
console.log(4);
p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
console.log(5);
