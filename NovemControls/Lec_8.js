let person = {
  name: "Jasleen",
  age: 19,
  address: "Mohali",
};

// console.log(person);
// console.log("....");
let anotherPerson = person;
// By Reference
anotherPerson.name = "Akhilesh";
// console.log(anotherPerson);
// console.log("....");
// console.log(person);
// console.log("....");
let nextPerson = anotherPerson;
nextPerson.name = "Sakshi";
// console.log(person);
// console.log(anotherPerson);
// console.log(nextPerson);

// For in Loop
// How to traverse the object
// for (let key in nextPerson) {
//   console.log(`${key} = ${nextPerson[key]}`);
//   console.log(`${key} = ${nextPerson.key}`); //incorrect
//   // console.log(key);
//   console.log(`${nextPerson["key"]}`);//incorrect
// }

// Functions Continue........
// Arrow Function

// let arrowFunc = (name, age, college) => {
//     console.log(`My name is ${name} , my age is ${age} and I am from ${college}`);
// };
// arrowFunc("Dev", 23, "HPURC");

let obj = {
  name: "Tamanna Walia",
  age: 19,
  print: function () {
    console.log(this);
  },
};
// obj.print();
let obj2 = {
  name: "Abhimanyu",
  age: 19,
  college: "CU",
  print2: () => {
    console.log(this);
  },
};
// obj2.print2();
/*
Arrow functions do not create their own "this" binding.
In obj2 the print2 is an Arrow function , and Arrow function does not create their own This binding, due to which, This will point to what, it was actually pointing before, which was Window object.
*/
// console.log(this);
let obj3 = {
  name: "Manvi",
  age: 19,
  college: "HPRCU",
  address: {
    street: "Road number 11",
    house: 2105,
    print3: function () {
      let print4 = () => {
        console.log(this);
      };
      print4();
    },
  },
};
// obj3.address.print3();

// Higher Order Functions
// Callback Functions
/*
A callback function is a function , that is passed as an argument to some another function, basically it allows a function to call another function.
 */
// let sumutils = function () {
//   console.log("Hello!!!!")
// };
// let func = function (fx) {
//   console.log("Heyy!!");
//   fx();
// };
// func(sumutils);
let sumutils = function (a, b) {
  return a + b;
};
let func = function (fx, a, b) {
  console.log("Heyy!!");
  console.log(fx(a, b));
};
// func(sumutils, 4, 5);

// setTimeout(()=>{
//     console.log("Hiiii");
// },5000);
// setTimeout(()=>{
//     console.log("Hiiii");
// });
// setInterval(()=>{
//     console.log("Hiiii");
// },2000);
function redirecCall() {
  console.log("Hello");
}
let intervalCount = setInterval(redirecCall, 1000);
setTimeout(() => {
  clearInterval(intervalCount);
  //We will be using it to stop the iterations
  console.log("Interval Stopped after 5 seconds");
}, 5000);

let fx = () => {
  console.log("Hii of fx");
};
let fx2 = () => {
  console.log("Hii from fx2");
};

let funca = function (fx, fx2) {
  fx();
  setTimeout(() => {
    console.log("Sorry to wait for 3 seconds");
  }, 3000);
  fx2();
};
// funca(fx, fx2);
