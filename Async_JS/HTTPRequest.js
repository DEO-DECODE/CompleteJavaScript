let todos = (callback) => {
  // Making HTTO Request
  let request = new XMLHttpRequest();
  // XMLHttpRequest is a constructor
  console.log(request);
  // Setting up the request
  request.open("Get", "https://jsonplaceholder.typicode.com/todos");
  // Get is the type of function call.
  // This will give a Json response
  // Sending the request.
  request.send();
  // This will send the request to server.

  // We can directly see it's response in the console.
  // In order to fetch the response, we need to set an eventListener .
  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status == 200) {
    //   console.log(request.responseText);
    let data=JSON.parse(request.responseText);
    callback(null, data);
    } else if (request.readyState === 4) {
    //   console.log("Data could not be fetched");
    callback("Data Could not be fetched", null);
    }
  });
};
console.log(1);
console.log(2);
// The below function is Asynchronous in nature.
todos((error, Data)=>{
    if(Data){
        console.log(Data);
    }
    else{
        console.log(error);
    }
});
console.log(3);
console.log(4);
/*
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
*/
/*
We start reading the data at 4th state
*/

//HTTP Response Status Codes
/*
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
*/
