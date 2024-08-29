var fullName = "Dev Raj";
var obj = {
  fullName: "Dev Raj Bhardwaj",
  prop: {
    fullName: "Vishali Sharma",
    getFullName: function () {
      return this.fullName;
    },
  },
  getFullName: function () {
    return this.fullName;
  },
  getFullNameV2: () => {
    return this.fullName;
  },
  getFullNameV3: (function () {
    return this.fullName;
  })(),
};
console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());
// console.log(obj.getFullNameV3());
console.log(obj.getFullNameV3);
//let and const declarations are not attached to the global object (window), unlike var declarations.
/*
the arrow function getFullNameV2 is defined within the object obj, but it captures this from the outer lexical environment
Lexical Environment: In JavaScript, a lexical environment is essentially the context in which variables and functions are declared. It determines the scope and the this binding for variables and functions. A new lexical environment is typically created by function execution or block scopes (like those introduced by let and const in block statements).

Global Lexical Environment: The global scope is the outermost lexical environment in JavaScript. Variables and functions declared at the top level (outside of any function or block) belong to this environment.

Function Lexical Environment: When a function is defined, it creates a new lexical environment. This environment contains any local variables defined within the function and any parameters passed to the function.
*/