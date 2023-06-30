const myStates=[
    "Bihar",
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil",
    "Jharkhand"
]
// for(let i=0; i<myStates.length; ++i){
//     console.log(myStates[i]);
// }
// for(let i=0; i<myStates.length; ++i){
//     if(typeof myStates[i]!=="string") continue;
//     console.log(myStates[ i]);
// }
myStates.forEach((elem)=>{
    console.log(elem);
})