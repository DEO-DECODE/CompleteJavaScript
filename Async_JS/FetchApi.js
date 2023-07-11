// Fetch API
/*
The fetch() method starts the process of fetching a resource from a server.
The fetch() method returns a Promise that resolves to a Response object.
Isliye hm direct then laga skte hain.
JSON ke keys me v doubl equotes hona jaruri hai
It is considered as universal data transfer method.
*/
fetch("data.json").then((response)=>{
    console.log("Promise Resolved !", response);
    return response.json()//returning a promise(Asynchronous)
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})