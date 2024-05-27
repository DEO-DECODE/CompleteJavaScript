// function toggleClass() {
//   let elem = document.querySelector("#myBox");
//   elem.classList.toggle("active");
// }
// function addBounce() {
//   let element = document.querySelector("#myBox");
//   element.classList.add("bounce");
// }
// function removeBounce() {
//   let element = document.querySelector("#myBox");
//   element.classList.remove("bounce");
// }
// function replaceWithScale() {
//   let element = document.querySelector("#myBox");
//   //   element.classList.replace("rotate", "scale");
//   element.classList.add("scale");
//   element.classList.remove("rotate");
//   element.style.color = "yellow";
// }
// function replaceWithRotate() {
//   let element = document.querySelector("#myBox");
//   //   element.classList.replace("scale", "rotate");
//   element.classList.add("rotate");
//   element.classList.remove("scale");
//   element.style.color = "pink";
// }
let qs = document.querySelector("ul");
console.log(qs);

let buttonSelector = document.querySelector(".clickme");
console.log(buttonSelector);
buttonSelector.addEventListener("click", () => {
  let randomNumber = Math.random() * 10;
  let newItem = document.createElement("li");
  newItem.innerText = `Something New has beend ADDED ${randomNumber}`;
  qs.append(newItem);
});

let ul = document.createElement("ul");
ul.innerHTML = "<h2> India will lift T20WC2024</h2>";
document.body.append(ul);
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li1.innerText = "Virat is a legend";
li2.innerText = "Rohit is a legend";
li3.innerText = "Bumrah is a legend";
ul.append(li1);
ul.append(li2);
ul.append(li3);

let elementOfUl = document.querySelectorAll("li");
let elementOfUl2 = Array.from(elementOfUl);
elementOfUl2.map((elem) => {
  elem.addEventListener("click", (elem) => {
    elem.target.remove();
  });
});


