// DOM
/*
It represnets the structure of the documents , where each object represents an element like div , body, head, p or atributes and texts.
Dom represents the object as a hierarchy of tree. Root of the tree is html document
Each node represents an element, attributes or texts
DOM Provides a variety of methods to interact with the node : getElementById and so on.
Dom allows us for event handling, like clicks, mouse movements and presses
*/

// Selection of Elements
// QuerySelectorAll
/*
To get all matched elements , we use querySelector
It returns a nodelist
*/
// let resuledElemets = document.querySelectorAll("p");
// resuledElemets.forEach((elem) => {
//   console.log(elem);
// });
// let anotherArray = Array.from(resuledElemets);
// let anotherArray2 = anotherArray.map((elem) => {
//   console.log(elem);
// });
// resuledElemets.forEach((elem) => {
//   console.log(elem.textContent);
// // });
// let resuledElemets = document.querySelectorAll(".clickme");
// resuledElemets.forEach((elem) => {
//   console.log(elem);
// });
// let resuledElemet = document.querySelector("h2");
// console.log(resuledElemet);
/*
QuerySelector
It returns the first matching element
*/
// let resuledElemet = document.querySelector("#pcontent");
// console.log(resuledElemet);
// let resuledElemet=document.getElementById("pcontent");
// console.log(resuledElemet);
/*
getElementById
It returns a single element
*/
// resuledElemet.textContent="My name is Sahil";
// let resuledElemet = document.getElementsByClassName("novemh");
// // console.log(resuledElemet);
// let resuledElemet2 = Array.from(resuledElemet);
// resuledElemet2.map((elem) => {
//   // console.log(elem);
//   elem.style.color = "blue";
// });
/*
getElementsByClasssName
It returns a htmlCollection
*/
// getElementByTagName

// Getting and Setting Attributes
let link1 = document.querySelector("a");
// console.log(link1);
console.log(link1.getAttribute("href"));
link1.setAttribute("href","https://www.w3schools.com/jsref/met_document_queryselector.asp");

link1.innerText="Go To W3Schools";
link1.style.textDecoration="none";

let elem = document.querySelector("p");
// // elem.className="styled-div";
elem.setAttribute("class", "styled-div");
// console.log(elem.className);
// console.log(elem.innerHTML);
// console.log(elem.innerText);// Ignores white spaces
// elem.innerText+=" I am sibling of div"
// elem.innerHTML="I have changed Completely";

// Operators
/*
Arithmetic Operators
Sum - +
Diff - -
Division - /
remainder - %
multiplication - *
*/

/*
6+(5-8/5)*5
=23
*/
// let res=6+((5-(8/5)))*5;
// console.log(res);
//Increment Operator
let num = 5;
// Post Increment
// console.log(num++);
// console.log(num);
// Pre Increment
// console.log(++num);
// console.log(num);
// num+=2;
// console.log(num);
// num = num + 2;
// console.log(num);

// Turnery Operator

let age = 20;
// if (age >= 18) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not");
// }

age >= 18 ? console.log("You are eligile to vote") : console.log("You are not");

// condition staisfy : else
