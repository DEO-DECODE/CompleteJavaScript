let compliment = function (msg) {
  return function (name) {
    return `${msg} ${name}`;
  };
};
let comp = compliment("You are awesome");
console.log(comp("Dev"));
// Example 2
function makeFunc() {
  const name = "Dev Raj";
  function displayName() {
    console.log(name);
  }
  return displayName;
  // Right Way
  // return displayName();
  // Wrong Way
}
const myFunc = makeFunc();
myFunc();
