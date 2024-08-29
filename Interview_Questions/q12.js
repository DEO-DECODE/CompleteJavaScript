async function getData(){
    return "Fetched data : {value}";
}
console.log("A");
setTimeout(()=>{
    console.log("B");
},0);
console.log("C");
getData().then((value)=>{
    console.log(`Data received : ${value}`);
})