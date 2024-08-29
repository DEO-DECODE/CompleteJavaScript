for (let i = 0; i < 10; ++i) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
// console.log(i);
/*
Each iteration of the for loop creates a new block scope, so each iteration gets its own separate instance of i.
In each iteration, a new i is created with the current loop value. This means the callback function passed to setTimeout will "remember" the value of i at the time of that specific iteration.
When the setTimeout callbacks execute, each callback will have its own copy of i with the correct value from that iteration.
*/