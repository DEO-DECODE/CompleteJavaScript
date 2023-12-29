/*
The JavaScript for in statement loops through the properties of an Object:
*/
let person = { 
  fname: "John", 
  lname: "Doe", 
  age: 25 
};
for (const key in person) {
  console.log(`${key} + " " + ${person[key]}`);
}
