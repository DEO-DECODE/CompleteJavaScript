for (var i = 0; i < 10; ++i) {
  setTimeout(() => {
    // console.log(i);
  }, 0);
}
console.log(i);
/*
If you declare a var inside a block (e.g., a for loop, if statement), it is not block-scoped. Instead, it is scoped to the nearest function or global scope if not inside any function.
*/
