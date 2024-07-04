// let flag = false;
// for (i = 0; i < 5; ++i) {
//   for (j = 0; j < 5; ++j) {
//     // i=0
//     if (i === 2) {
//       // console.log(i);
//       continue;
//     }
//     if (i === 3 && j === 1) {
//       flag = true;
//     }
//     console.log(i + " " + j);
//   }
//   if (flag) {
//     break;
//   }
// }
/*
i=0
// 
j=0
{
0,0
},
j=1
{
0,1
},
j=2
{
0,2
}, 
j=3{
0,3  
}, 
j=4
{
0,4
}
i=1
// 
j=0
{
1,0  
}, 
j=1{
1,1  
}, 
j=2
{
1,2  
}, 
j=3{
 1,3 
}, 
j=4{
 1,4 
}
i=2
// 
j=0{
  skip
}
j=1{
  skip
}
.
.
.
j=4{
  skip
}

i=3
j=0{
3,0
}
j=1{
flag=true;
3,1
}
j=2{
3,2 
}
j=3{
3,3
}
j=4{
3,4
}
*/

// Functions

// function sayHello(){
//   // It is a fnction called sayHello
//   // It is simply taking no arguments.
// }
// function sayHello(name, college) {
//   // It is a fnction called sayHello
//   // name-> first parameter
//   // college-> second parameter
//   console.log(`I am ${name} from ${college}`);
// }
// sayHello("Akhilesh", "CGC Landran");
// Akhilesh and CGC Landran are arguments
// Return values
// function sum(a, b, c) {
//   return a + b + c;
//   // It is return sum of the parameters
// }
// console.log(sum(4,5,6));

// function sum2(a, b, c) {
//   console.log(a + b + c);
//   // It is printing sum of the parameters
// }
// let a=sum2(4,5,6);
// console.log(a);
// function sum3(a=10, b=15, c=12) {
//   console.log(a+ " "+ b+ " "+ c);
//   console.log(a + b + c);
//   // It is printing sum of the parameters
//   // default parameters are a, and it's value is 10,. ......... and c=12
// }
// // sum3(4,5);
// sum3();
// function sayHelloWorld(c = 14, d = "Anshul", e) {
//   console.log(`The value of c is ${c} and d : ${d} and e: ${e}`);
// }
// sayHelloWorld("Vishakha", 12, true);
// sayHelloWorld("Jasleen", 12);

//Function Expression

// let func = function (c = 14, d = "Anshul", e) {
//   console.log(`The value of c is ${c} and d : ${d} and e: ${e}`);
// };

// func("Sahil", "Manvi","Sakshi");

// func("Sahil", "Manvi","Sakshi");
// let func = function (c = 14, d = "Anshul", e) {
//   console.log(`The value of c is ${c} and d : ${d} and e: ${e}`);
// };
// func("Sahil", "Manvi","Sakshi");
// var func = function (c = 14, d = "Anshul", e) {
//   console.log(`The value of c is ${c} and d : ${d} and e: ${e}`);
// };
/*
TypeError: func is not a function
How it is, actually interpreted
var func;
func();
func= function (c = 14, d = "Anshul", e) {
console.log(`The value of c is ${c} and d : ${d} and e: ${e}`);
};
*/
console.log(func);
var func = function (c = 14, d = "Anshul", e) {
  console.log(`The value of c is ${c} and d : ${d} and e: ${e}`);
};

