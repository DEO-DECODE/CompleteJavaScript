const person = {
  name: "Alice",
  greet: function (greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  },
};

const anotherPerson = {
  name: "Bob",
};

person.greet.call(anotherPerson, "Hello");
