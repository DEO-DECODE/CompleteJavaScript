// Here we are handling error using try and catch.
let getTodos = async () => {
  try {
    let response = await fetch("data.json");
    let data = await response.json();
    let response2 = await fetch("data2.json");
    let data2 = await response2.json();
    console.log(data, data2);
  } catch (error) {
    console.log(error.message);
  }
};
getTodos();
console.log(1, 2);
