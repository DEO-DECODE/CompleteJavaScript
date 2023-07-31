// Getting And Setting Attribute of Element
// https://www.w3schools.com/jsref/met_document_queryselector.asp
// Getting the attribute
let link1 = document.querySelectorAll("a");
console.log(link1[0].getAttribute("href"));
// console.log(link1[0].innerText);
// Setting the attribute
link1[0].setAttribute(
  "href",
  "https://www.w3schools.com/jsref/met_document_queryselector.asp"
);
console.log(link1[0].getAttribute("href"));
link1[0].innerHTML = "<h3>Go to W3Shools</h3>";
