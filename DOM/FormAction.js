// Form Events (Submit Form)
let formQs=document.querySelector('.sign-up-Form');
// console.log(formQs);
let email=document.querySelector('#email');
let password=document.querySelector('#password')
let passwordPattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$"
// Carrot ka matlab start and dollar ka mtlb end.
let emailPattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
//  This will run for submit.
formQs.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Accessing by Name.
    /*
    Form parent element tha, email and Password ka. hm uski ander ki sari property ko access kr paa rhein.
    */
    console.log(formQs.userEmail.value+" "+ formQs.userPassword.value);
    // console.log(email.value, password.value);
    // Validating Password
    // let passwordValue=password.value;
    // let result =passwordValue.match(passwordPattern);
    // if(result){
    //     alert("Your Password is Strong")
    // }
    // else{
    //     alert("Your Password is Weak");
    // }
    // Validating UserName
    // let userName=email.value;
    // // console.log(userName);
    // let result=userName.match(emailPattern);
    // console.log(userName);
    // if(result){
    //     alert("Valid User Name");
    // }
    // else{
    //     alert("Invalid UserName");
    // }
}) 
/*
The target property returns the element where the event occured.
*/
// KeyBoard events
// email.addEventListener('keyup', (e)=>{
//     let curUserName=e.target.value;
//     let result2=curUserName.match(emailPattern);
//     if(result2){
//         email.setAttribute('class', 'success');
//     }
//     else{
//         email.setAttribute('class', 'error');
//     }
// })
// Here we are changing style by changing the class.