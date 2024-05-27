let arr=[1,4,5,6];
console.log(arr);
arr[1]=8;
console.log(arr);
//Finding Array's length
console.log(arr.length); 
arr.push("cat");
console.log(arr);
// Push operation is performed at the end of the array.
arr.pop();
console.log(arr);
// Pop opeartion is performed at the end of the array.

// Concat method in array
let arr2=["pen", "books", "table", "books"];
let arr3=arr.concat(arr2);
console.log(arr);
console.log(arr2);
console.log(arr3);
// Concat method is a non mutating method.
// IndexOf method in the array.
console.log(arr3.indexOf("books"));
// Tamanna's doubt
let str= "Hello World";
console.log(str.indexOf("o"));
let arr4=["abc", "cbz", "cde", "cgk"];
console.log(arr4.indexOf("c"));
// Hello World
// 0->H
// 5->o
// 0->abc
// 1->cbz

// For Loop
// Iterarting from Start
// for(let i=0; i<10; ++i){
//     // let elem=arr3[i];
//     let elem=i;
//     console.log(elem);
// }
// i=0,1,2,3,4,5
// Iterating from last
// for(let i=8; i>=2; i--){
//     console.log(i);
// }
// 1st expression represent, the value from which iterator will start
// 2nd expression represents the condition till which , the loop run
// 3rd expression represents the updation value of iterator
// for(let i=8; i>=2; i-=2){
//     console.log(i);
// }

// for(let i=8; 5; i*=2){
//     console.log(i);
// }
// i*=2 === i = i * 2
// i=i*2 *-> multiplication
// i=8 -> i=16 ->32 ->64 -> 128
for(let i=0; i<-5; ++i){
    console.log(i);
}
// It will not execute for once even