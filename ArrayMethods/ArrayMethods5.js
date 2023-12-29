// findIndex Method
/*
It executes function for each elements of the array.
It returns the index of first element from the array, which first passes the test.
If it does not find any element , it returns -1.
*/
let ages = [21, 18, 15, 17, 23];
let indexOfFirstElem = ages.findIndex((age) => {
  return age < 0;
});
console.log(indexOfFirstElem);
// Some Method
/*
The some() method checks if any array elements pass a test (provided as a callback function).
The some() method executes the callback function once for each array element.
The some() method returns true (and stops) if the function returns true for one of the array elements.
The some() method returns false if the function returns false for all of the array elements.
The some() method does not execute the function for empty array elements.
The some() method does not change the original array.
*/
// Every Method
/*
The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
The every() method does not change the original array
*/
let scores=[25, 85, 71, 45, 65];
let result=scores.some((elem)=>{
    return elem>=75;
})
console.log("Some Method " + result);
let newScores=[85,95,80,75, 71];
let result2=newScores.every((elem)=>{
    return elem>=75;
})
console.log("Every Method "+ result2);
