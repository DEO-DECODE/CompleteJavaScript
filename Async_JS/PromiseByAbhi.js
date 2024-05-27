// Basic Structure
let a = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});
a.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
// Example 2
let arr = [];
const fetchData = (arr = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push({ name: "Dev" });
      if (arr.length > 0) resolve(arr);
      else reject("Some Technical Error");
    }, 2000);
  });
};
fetchData(arr)
  .then((data) => {
    console.log(data);
  })
  .then(() => console.log(1))
  .then(() => console.log(2))
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("This Will Be Executed either case");
  });
