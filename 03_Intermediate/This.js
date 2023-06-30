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