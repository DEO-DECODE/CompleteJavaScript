// This Keyword
// In each method , we have an access of special keyword called "this".
// This keyword represents the object, "Calling" the "Method", in which this is present.
// In JavaScript, the this keyword refers to an object.
// Example
let person = {
  firstName: "Dev",
  lastName: "Raj",
  city: "Chandigarh",
  birthYear: 2000,
  Education: "Software Engineer",
  getSummary: function(){
    return `${this.firstName} ${this.lastName} lives in ${this.city}`;
  }
};
console.log(person.getSummary());
person.firstName="Deo";
console.log(person.getSummary());
