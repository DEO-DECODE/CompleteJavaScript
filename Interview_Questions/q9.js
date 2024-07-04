const Dev = {
  name: "Dev Raj",
  sayName: function () {
    console.log(this.name);
  },
};
setTimeout(Dev.sayName, 1000);
Dev.sayName();

/*
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.

The issue arises due to the way "this" is handled in JavaScript, especially in the context of passing methods as callbacks.
When you pass Dev.sayName to setTimeout, it is passed as a reference to the function, but without its original context
setTimeout(Dev.sayName.bind(Dev), 1000);
The bind method creates a new function that, when called, has its this keyword set to the provided value (Dev in this case).
*/
