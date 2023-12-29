const api_url = "Data.json";
let h1 = document.querySelector("h1");
const fetchData = () => {
  fetch(api_url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Some Err");
    })
    .finally(() => console.log("Finally Done"));
};
fetchData();
