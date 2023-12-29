// Creating
let qs=document.querySelector('ul');
let buttonSelector=document.querySelector('.clickMe');
buttonSelector.addEventListener('click', ()=>{
    let newItem=document.createElement('li');
    newItem.innerHTML='Something New added';
    qs.append(newItem);
})
// Make a list
const ul = document.createElement("ul");
ul.innerHTML="<h2> Khash Shru k liye</h2>"
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);
// Removing 
let elementsOfUl=document.querySelectorAll('li');
elementsOfUl.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        e.target.remove();
    })
})