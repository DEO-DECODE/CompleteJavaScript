// Click Event
let eventElement=document.querySelectorAll('.clickMe')
console.log(eventElement);
eventElement[1].addEventListener('click', (event)=>{
    event.target.style.color='red';
    event.target.innerText="Clicked";
})
let elements=document.querySelectorAll('li');
elements.forEach((elem)=>{
    elem.addEventListener('click', (e)=>{
        e.target.style.textDecoration="line-through";
    })
})
let copyRightElement=document.querySelector('.main');
copyRightElement.addEventListener('copy', ()=>{
    alert('You cannot copy it');
})
// Mouse move events
let insideUl=document.querySelector('ul');
insideUl.addEventListener('mousemove', (e)=>{
    // console.log(e.offsetX, e.offsetY);
})