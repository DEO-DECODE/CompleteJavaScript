// Object is a datatype in the form of key - value pair
// Value can be any data type.
// Objects
/*
Name: Vishal,
age:20,
Address: "Mohali, GBP "
Phone : 7415896231
*/
// let person = {
//   name: "Vishal",
//   age: 20,
//   Address: "Mohali, Pubjab",
//   phone: 7415896231,
//   hobbies: ["Singing", "Dancing", "Studying", "Coding"],
// };
// console.log(person.name);
// console.log(typeof(person.name));
// console.log(person.phone);
// console.log(typeof(person.phone));
// let person = {
//   name: "Vishal",
//   age: 20,
//   Address: {
//     street: "8B",
//     locality: "Industrial Area",
//     country: "India",
//     house: {
//       floor: 1,
//       room: 3,
//       furnished: ["Sofa", "Kitchen"],
//     },
//   },
//   phone: 7415896231,
//   hobbies: ["Singing", "Dancing", "Studying", "Coding"],
// };

// person.Address.house.furnished.push("Ac");
// let arr=person.Address.house.furnished;
// console.log(arr);
// Deleting Properties

// delete person.phone;
// console.log(person);

// Functions vs Methods
/*
The functions that belongs to an object is called methods
*/
// This keyword
/*
In javaScript, this keyword basically represents an object.
*/
// let person = {
//     name: "Vishal",
//     age: 20,
//     Address: {
//       street: "8B",
//       locality: "Industrial Area",
//       country: "India",
//       house: {
//         floor: 1,
//         room: 3,
//         furnished: ["Sofa", "Kitchen"],
//       },
//     },
//     phone: 7415896231,
//     hobbies: ["Singing", "Dancing", "Studying", "Coding"],
//     sayName: function(){
//         console.log(this);
//     }
//   };
//
// console.log(person.sayName());
// let person = {
//   name: "Vishal",
//   age: 20,
//   Address: {
//     street: "8B",
//     locality: "Industrial Area",
//     country: "India",
//     house: {
//       floor: 1,
//       room: 3,
//       furnished: ["Sofa", "Kitchen"],
//       sayHello2: function () {
//         console.log(`Vishal is present at house and floor number ${this.floor}
//             in room ${this.room}`);
//       },
//     },
//   },
//   phone: 7415896231,
//   hobbies: ["Singing", "Dancing", "Studying", "Coding"],
//   sayName: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };
// person.Address.house.sayHello2();
// person.sayName();

// Call
/*
An Object can use a method, that is belonging to some other object
*/

let obj = {
  greet: function (age, college) {
    console.log(`Welcome ${this.name} your age is ${age} from ${college}`);
  },
};
let stud1 = {
  name: "Tamanna",
};
let stud2 = {
  name: "Manvi",
};
// console.log(obj.greet.call(stud1, 18, "PU"));

// Bind
/*
With Bind, basically it is used to borrow methods from another object
*/
function greet2() {
  console.log(`Hello ! ${this.firstName} ${this.lastName}`);
}
let person4 = {
  firstName: "Akhilesh",
  lastName: "Yadav",
};
let greet3 = greet2.bind(person4);
greet3();
