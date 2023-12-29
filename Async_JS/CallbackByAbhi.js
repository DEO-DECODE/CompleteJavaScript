function sum(a, b, c) {
  let res = a + b;
  c(res);
}
function displaySum(result) {
  let h1 = document.querySelector("h1");
  h1.innerText = result;
}
sum(20, 30, displaySum);
// Sum high Order function hai and DisplaySum hai callback function.
sum(20,45, alert);
// Example-2
const arr=[1,2,3,4,5,6];
function calculator(arr=[], callback){
    const ans=[];
    arr.forEach((elem)=>{
        ans.push(callback(elem));
    })
    return ans;
}
console.log(calculator(arr, (a)=>a*10));
console.log(calculator(arr , (a)=>a/10));