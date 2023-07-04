let parentElement=document.querySelector('.content2');
// All Children of Parent
// console.log(parentElement.children);
// Html Collections
/*
We can not run forEach Method on HTMLCollections, that is why, we need to convert it into an array first.
*/
Array.from(parentElement.children).forEach((elem)=>{
    elem.classList.add("newCoders");
})
// Child Elements
let childElements=document.querySelector('h2');
// Finding the parent of specific child.
console.log(childElements.parentElement);
// Finding next as well as previous element of Child.
console.log(childElements.previousElementSibling);