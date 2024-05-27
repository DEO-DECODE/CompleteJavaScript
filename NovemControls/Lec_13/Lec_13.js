// const button = document.querySelector("#myButton");
// const input = document.querySelector("#myInput");
// const output = document.querySelector("#output");
// button.addEventListener("click", (event) => {
//   alert("Button was clicked");
//   event.target.style.color = "red";
//   event.target.style.innerText = "clicked";
//   output.textContent = "Button was Clicked";
// });
// // Do it using classname or classlist
// input.addEventListener("keypress", (event) => {
//   output.textContent += ` You Pressed the key ${event.key}`;
// });

// let elements = document.querySelectorAll("li");
// let elements2 = Array.from(elements);
// elements2.map((elem) => {
//     console.log(elem);
//   elem.addEventListener("click", (evenet) => {
//     evenet.target.style.textDecoration = "line-through";
//   });
// });

// let buttonElem = document.querySelector(".clickme");
// let outputElem = document.querySelector("#output");
// let inputElem = document.querySelector("#myInput");
// inputElem.addEventListener("focus", (evenet) => {
//   outputElem.textContent = "Input field is in focus";
// });
// buttonElem.addEventListener("mouseover", (evenet) => {
//   outputElem.textContent = "Mouse is over the button";
// });
// let h1elem = document.querySelector(".main");
// h1elem.addEventListener("copy", (event) => {
//   alert("You cannot copy it");
// });

// ES6 **

// Spread Operator

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
  },
};

let nums = [4, 5, 6, 8];
// console.log(nums);
// console.log(...nums);
let anotherArray = [12, 45, ...nums];
// console.log(anotherArray);

let updatedMenu = ["Food0", ...hotel.mainMenu, "FoodD", "FoodE"];
// console.log(updatedMenu);

let joinedArrays = [...anotherArray, ...updatedMenu];
// console.log(joinedArrays);
// Creating Shallow copy.

let copyArray = [...nums];
copyArray[0] = -1;
// console.log(copyArray);
// console.log(nums);

let myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "Red",
};

let copyObj = { ...myVehicle };
console.log(copyObj);

let updatedVehicle = {
  type: "Car",
  year: 2024,
  color: "Yellow",
};

let anotherVehicle = { ...updatedVehicle, ...myVehicle };
console.log(anotherVehicle);
let anotherVehicle2 = { ...anotherVehicle, milage: 25 };
console.log(anotherVehicle2);
