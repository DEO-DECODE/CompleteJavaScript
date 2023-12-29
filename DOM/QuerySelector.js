//Getting Html elements using querySelector/All
/*
To get all matched element we use querySelectorAll.
To return all matches (not only the first), use the querySelectorAll() instead.
It returns a NodeList with the first element that matches the CSS selector(s) in case of querySelector.
*/
// Accessing elements by their tags.
let resultedElement = document.querySelectorAll("p");
resultedElement.forEach((elem) => {
  console.log(elem);
});
// console.log(resultedElement);
// Acessing elements by their Class.
let resultedElement2 = document.querySelectorAll(".coderdost");
// console.log(resultedElement2);

// Accessing elements by their ids.
let resultedElement3 = document.querySelectorAll("#coders");
resultedElement3.forEach((e) => {
  console.log(e);
});
// console.log(resultedElement3);
