"use strict";
let mainPlane = {
  airline: "Fly India",
  iatacode: "FI",
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked flight on ${this.airline} with flight Number ${this.iatacode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.airline}`,
      name: `${name}`,
      flightNumb: `${this.iatacode}${flightNum}`,
    });
  },
};
// mainPlane.book(553, "Carlos");
// mainPlane.book(643, "Jack");
// console.log(mainPlane.bookings);
let childPlain = {
  airline: "Child Plain",
  iatacode: "CP",
  bookings: [],
};
let booking = mainPlane.book;
booking.call(childPlain, 665, "Laurie");
booking.apply(childPlain, [785, "Mahesh"]);
console.log(childPlain);
/*
With the call() method, you can write a method that can be used on differ
With call(), an object can use a method belonging to another object.
*/
let obj = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
let person1 = {
  firstName: "Dev",
  lastName: "Raj",
};
let person2 = {
  firstNam: "Shruti",
  lastNam: "Rani",
};
console.log(obj.fullName.call(person1));
console.log(obj.fullName.call(person2));
/*
With the apply() method, you can write a method that can be used on different objects.
The apply() method is similar to the call() method
The call() method takes arguments separately.
The apply() method takes arguments as an array.
*/

let obj2 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
let person3 = {
  firstName: "Tanisha",
  lastName: "Shrivastava",
};
console.log(obj2.fullName.apply(person3, ["Varanasi", "India"]));
/*
Bind Method
With the bind() method, an object can borrow a method from another object.
*/

function greet() {
  console.log(`Welcome ${this.firstName} ${this.lastName}`);
}
let person4 = {
  firstName: "Nikhil",
  lastName: "Prince",
};
let greets=greet.bind(person4);
greets();