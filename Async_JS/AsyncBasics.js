/*
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()
*/
console.log(1);
console.log(2);
// AsYNCHRONOUS CODE
setTimeout(()=>{
    console.log("I will be executed after 2 seconds")
}, 3000);
console.log(3);
console.log("Bye !");
/*
We saw that after 1 , 2, 3 and bye, 
stTimeOut function's code executed,
this is because , execution of setTimeout, did not blocked printing  and bye!
This is asynchronous nature , the ability to run in parallel.
*/