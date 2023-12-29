let getTodos= async ()=>{
    let response= await fetch("data.json");
    let data= await response.json();
    console.log(data);
    console.log("x");
   
    let response2= await fetch("data2.json");
    let data2=await response2.json();
    console.log("y");
    
    console.log(data2);
}
getTodos();
console.log(1,2);