// IIFE STANDS FOR IMMEDIATELY INVOKED FUNCTION EXPRESSION.
// This function is executed once only.
(function (name) {
  console.log("This function will be executed once only " + name);
})("IIFE");

let a= ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(456);
    },4000);
  })
}
(async()=>{
  let b= await a();
  console.log(b);
  let c= await a();
  console.log(c);
})();