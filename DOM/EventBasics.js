// Click Event
let eventElement=document.querySelectorAll('.clickMe')
eventElement[0].addEventListener('click', (e)=>{
    e.target.style.color='red';
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
    console.log(e.offsetX, e.offsetY);
})