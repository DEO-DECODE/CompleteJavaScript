console.log("Hiii");
setTimeout(() => {
  console.log("Hii Inside SetTimeOut no second arg");
});
console.log("Hey there");
setTimeout(() => {
  console.log("Hii Inside SetTimeOut with 1s delay");
}, 1000);
setTimeout(() => {
  console.log("Hii Inside SetTimeOut");
}, 0);
console.log("Hello");
