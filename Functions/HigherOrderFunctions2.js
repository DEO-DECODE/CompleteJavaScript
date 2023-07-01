let compliment = function (msg) {
  return function (name) {
    return `${msg} ${name}`;
  };
};
let comp = compliment("You are awesome");
console.log(comp("Dev"));
