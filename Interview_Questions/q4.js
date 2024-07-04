variab = 10;
(() => {
  variab2 = 40;
  console.log(variab);
  var variab2;
  variab = 30;
  console.log(variab);
})();
console.log(variab2);
console.log(variab);
var variab = 50;
