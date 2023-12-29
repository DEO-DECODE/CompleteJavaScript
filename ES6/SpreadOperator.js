let hotel = {
  name: "Atithi Palace",
  location: "Near Veer Kunwar Singh Colony",
  categories: ["Indian", "Chinese", "Italian"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "11:30PM" },
  },
};
let nums = [2, 3, 5, 7];
console.log(nums);

// UseCase
let anotherArray = [12, 15, ...nums];
console.log(anotherArray);
let updatedmainMenu = [...hotel.mainMenu, "FoodD", "FoodE"];
console.log(updatedmainMenu);
// console.log(".......")
// console.log(hotel.mainMenu);

// Joining 2 Arrays
let joinedArrays = [...nums, ...anotherArray];
console.log(joinedArrays);

// Creating shallow copy using spread operator.
let copyArray = [...updatedmainMenu];
console.log(copyArray);
copyArray[1] = "updatedFood";
console.log(copyArray);
console.log(updatedmainMenu);
console.log(" Differenece -  ");
// Reference
copyArray = updatedmainMenu;
copyArray[1] = "updatedFood";
console.log(copyArray);
console.log(updatedmainMenu);
// Using Spread operator on string.
let passion = "Programming";
// console.log(...passion);
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = {...updateMyVehicle, ...myVehicle, milage:21, model:"Mercedes"};
console.log(myUpdatedVehicle);
