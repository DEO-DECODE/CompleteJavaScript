let car = {
  color: "black",
  model: "2022",
  company: "Honda",
};
// console.log(car);
// Accessing the javascript objects.
// console.log(car["company"]);
// console.log(car.model);
let propertyName = "color";
// console.log(car[propertyName]);
// Modifying the properties of car.
car["color"] = "Yellow";
car.model = "2023";
// console.log(car);
// Deleting the Properties of object.
let obj = {
  prop1: "value1",
  prop2: "value2",
  porp3: "value3",
};
let returnValue = delete obj.prop1;
delete obj["prop2"];
console.log(obj, returnValue, obj.prop1);
// Function vs Methods
/*
It is nothing but object property key, holding function as value.
*/
let person = {
  ageCalculate: function (birthYear) {
    return 2023 - birthYear;
  },
};
console.log(`Current age of Shruti is ${person.ageCalculate(2002)}`);
