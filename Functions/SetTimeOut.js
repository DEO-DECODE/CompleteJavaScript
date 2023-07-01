// SetTimeOut
// setTimeout -> It runs function "ONCE" after an interval of time.
// Syntax
// setTimeOut(func, delay, arg1, arg2);
function greeting(name) {
  console.log(`Welcome ${name} to our coder dost family`);
}
setTimeout(greeting, 3000, "dev");
// Method 2
setTimeout((name)=>{
    console.log(`Hi ! I am ${name}`)
}, 3000, "Raj");