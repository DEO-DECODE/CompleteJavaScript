// // Promise Chaining
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("it will be resolved after 2 secs");
//     // reject(new Error("An error Occured"));
//     reject("An error occured");
//   }, 2000);
// });

// p1.then(
//   (value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Promise 2");
//       }, 2000);
//     });
//   },
//   (error) => {
//     console.log(error);
//   }
// )
//   .then(
//     (value) => {
//       console.log(value);
//       console.log("We are done");
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           //   reject(new Error("Unfortunately an error occured!"));
//           reject("Unforunately an error occured");
//         }, 2000);
//       });
//     },
//     (error) => {
//       console.log(error);
//     }
//   )
//   .then(
//     (value) => {
//       console.log(value);
//       console.log("We are  Pakka wala done");
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

//
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data fetched");
//       resolve({ id: 1, name: "Jasleen" });
//     }, 1000);
//   });
// }
// function processData(data) {
//   // data is an object
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data Processed");
//       data.processed = true;
//       resolve(data);
//     }, 1000);
//   });
// }
// function displayData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Displaying data ${JSON.stringify(data)}`);
//       resolve();
//     }, 1000);
//   });
// }
// fetchData()
//   .then(
//     (data) => {
//       return processData(data);
//     },
//     (error) => {
//       console.log(error);
//     }
//   )
//   .then(
//     (data) => {
//       return displayData(data);
//     },
//     (error) => {
//       console.log(error);
//     }
//   )
//   .then(
//     (data) => {
//       console.log("All tasks done " + data);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

// Async Await
// Async functions returns a promise.
// Await kewyword, holds the exexcution.
// Await keyword can only be used inside, asynchronous functions.
/*
Await keyword makes the function pause the execution and wait for a resolved promise
*/

// let getTodos = async () => {
//   let response = await fetch("Data.json");
//   console.log(response);
//   let data= await response.json();
//   console.log(data);
// };
// let getTodos = async () => {
//   // let response = await fetch("Data4.json");
//   let response = await fetch("Data.json");
//   // console.log(response);
//   if (response.status > 299) {
//     throw new Error("Error in fetching data");
//   }
//   let data = await response.json();
//   return data;
// };

// getTodos().then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error.message);
//   }
// );

let harry = async () => {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("45 deg");
    }, 3000);
  });
  let mohaliWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("47 deg");
    }, 5000);
  });

  console.log("Fetching data from Delhi");
  let delhiW = await delhiWeather;
  console.log(`Data fetched from Delhi ${delhiW}`);
  console.log("Fetching data from Mohali");
  let mohaliW = await mohaliWeather;
  console.log(`Data fetched from Delhi ${mohaliW}`);
  return [delhiW, mohaliW];
};

const Jasleen = () => {
  console.log("Bhaai data do mujhe!!!!!!");
  return "Twada kutta Tommy Sada kutta kutta";
};

let main1 = async () => {
  console.log("Jasleen this side , I am in weather control room");
  let a = await harry();
  let b = await Jasleen();
  console.log(a);
  console.log(b);
};
main1();
/*
fetch method is used to fetch data from server
it returns a promise, that promise is resolved to response object
*/
