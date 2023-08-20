// A JavaScript Promise object contains both the producing code and calls to the consuming code:
// let getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("Some Data");
//     reject("An Error Occured");
//   });
// };
// getSomething().then((Data)=>{
//     console.log(Data);
// }).catch((error)=>{
//     console.log(error);
// })
let todos = (resource) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    // Setting up the request
    request.open("Get", resource);
    request.send();
    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status == 200) {
        //   console.log(request.responseText);
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4)  {
        //   console.log("Data could not be fetched");
        reject("Data Could not be fetched");
      }
    });
  });
};
// Chaining of Promises.
todos("Data.json")
  .then((data) => {
    console.log("Promise 1 resolved ! ", data);
    return todos("Data2.json");
  })
  .then((data) => {
    console.log("Promise 2 Resolved ! ", data);
    return todos("Data3.json");
  })
  .then((data) => {
    console.log("Promise 3 resolved ! ", data);
  })
  .catch((error) => {
    console.log(error);
  });

// Catch bs ek method ke error ko catch kr payega, uske baad k liye nhi chalega fir.
/*
Related Questions
What are callback functions?
*/