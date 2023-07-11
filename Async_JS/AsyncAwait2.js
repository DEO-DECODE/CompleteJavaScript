let getTodos= async ()=>{
    let response= await fetch("data.json");
    let data= await response.json();
    let response2= await fetch("data2.json");
    let data2=await response2.json();
    console.log(data, data2);
}
getTodos();
console.log(1,2);