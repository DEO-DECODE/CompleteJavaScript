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
// Example 1
let items = [1, 4, 5, 8];
// Using Destructuring
let [x, y, p, z] = items;
// console.log(x, y, z, p);
// Example 2
// let [first, second] = hotel.categories;
// console.log(first, second);
// Skipping the second element.
let [first, ,third]=hotel.categories;
console.log(first, third);
// Swapping
// [second, first] = [first, second];
// console.log(first, second);
// Destructurig in a nested array
let nums = [2, 3, [4, 5]];
let [a, , [b, c]] = nums;
console.log(a, b, c);

// Destructuring of Objects;
// let { name, location, mainMenu } = hotel;
// console.log(name);
// console.log(location);
// console.log(mainMenu);
// console.log(typeof mainMenu);
// Setting Customized name to Object Property.
// let { name: hotelName, location: hotelLocation, mainMenu: hotelMenu } = hotel;
// console.log(hotelName, hotelMenu);
// // Setting Default Values
// let { name, Menu = [], categories = [] } = hotel;
// Menu was not originally present in the object.
// console.log(name, Menu, categories);
// Destructuring Nested Objects.
let {name,openingHours }=hotel;
console.log(name, openingHours);
let {sunday:{open, close}}=hotel.openingHours;
console.log(open, close);
