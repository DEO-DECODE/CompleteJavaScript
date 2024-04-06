let hotel = {
  name: "Atithi Palace",
  location: "Near Veer Kunwar Singh Colony",
  categories: ["Indian", "Chinese", "Italian"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "11:30PM" },
    tuesday: { open: "11:00AM", close: "11:30PM" },
    wednesday: { open: "07:00AM", close: "11:30PM" },
  },
};
// Syntax of REST (...) Get elements and packed them into a new array.
let nums = [2, 3, 4, 5, 6];
let [a, b, ...other] = nums;
console.log(a, b);
console.log(other);
// In case of Objects.
let { sunday, ...otherDays } = hotel.openingHours;
console.log(otherDays);
