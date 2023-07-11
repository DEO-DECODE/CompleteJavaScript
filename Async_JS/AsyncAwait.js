/*
async makes a function return a Promise.
await makes a function wait for a Promise.
The await keyword can only be used inside an async function.
The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
*/
let getTodos = async () => {
  let response = await fetch("Data2.json");
  // Throwing a custom error.
  if (response.status !== 200) {
    throw new Error("Custom: Error in fetching the data");
  }
  let data = await response.json();
  return data;
  // We are returning a promise.
};
getTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
