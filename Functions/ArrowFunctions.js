let arrowFunc = (name, role) => {
  return `${name} , Your Journey as a ${role} starts from today onwards.`;
};
console.log(arrowFunc("Dev", "Coder"));
// Arrow functions do not create their own this binding
const obj = {
  name: "DEO-DECODE",
  age: 23,
  print: function () {
    console.log(this);
  },
};

obj.print();
const obj2 = {
  name: "DEO-DECODE",
  age: 23,
  print: () => {
    console.log(this);
  },
};

obj2.print();
/*
this function(PRINT IN OBJ2) does not automatically create a this variable. As a result, any reference to this would point to what this was before the function was created.
*/
const obj3 = {
  name: "DEO-DECODE",
  age: 23,
  print: function () {
    const print2 = () => {
      console.log(this);
    };

    print2();
  },
};

obj3.print();
