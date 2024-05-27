/*
For all regular function calls , this points to window object
*/
var user = {
  firstName: "Dev",
  courseCount: 4,
  getCourseCount: function () {
    console.log("Line 8", this);
    function sayHello() {
      console.log("Hello");
      console.log("Line 11", this);
    }
    sayHello();
    // This is a regular function call.
  },
};
user.getCourseCount();
// This is not a regular function call this is object function call
// let person =  {
//   name:'john',
//   sayHi: function(){
//     return "hi";
//   }
// } 

// person.sayHi() // hi
// methods can also access the properties and other methods of same object. To do this we use this
// let person =  {
//   name:'john',
//   sayHi: function(){
//     return "hi "+ this.name;
//   }
// } 

// person.sayHi() // hi john
// we can also have used person instead of this but has you know references can be changed. so that could have created a problem
let person =  {
  name:'john',
  sayHi: function(){
    return "hi "+ this.name;
  }
} 

person.sayHi() // hi john
// you can even have this without an object
function sayHi(){
    return "hi "+ this.name; 
}
sayHi() // Error
// here this will "undefined" in Strict mode
let obj1 = {name: 'john'}
let obj2 = {name: 'wick'}

// you can add functional property

obj1.say = sayHi;
obj2.say = sayHi;


obj1.say() //  hi john
obj2.say() //  hi wick 