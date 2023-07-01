/*
SetInterval -> Runs Function repeatedly , starting after the interval of time and then it keeps on repeating.
*/
function greeting(name) {
  console.log(`Welcome ${name} to our coder dost family`);
}
setInterval(greeting, 2000, "Dev");
