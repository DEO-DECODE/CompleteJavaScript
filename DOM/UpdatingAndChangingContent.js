// Updating and Changing Content.
// InnerText
// Ignores Spaces.
// Retrieve and Set content in Plain text.
let content = document.querySelector(".content");
content.innerText += " Great v Coders";
// InnerHTML
// It does not ignores spaces.
// Retrieves and set content in HTML format.

content.innerHTML = "I have changed!";
let html = document.querySelector(".content").innerHTML;
console.log(html);
// Adding the Style
let heading = document.querySelector("h1");
heading.style.color = "Red";
heading.style.backgroundColor = "Yellow";
