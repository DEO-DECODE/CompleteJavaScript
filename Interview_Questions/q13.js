console.log("Start");
const username = "DEO-DECODE"; // Replace with any GitHub username
const url = `https://api.github.com/users/${username}`;
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("User Data:", data);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });

setTimeout(() => {
  console.log("Timeout completed");
}, 3000);

console.log("End");

/*
The event loop processes the callback queue only after it has cleared all tasks in the microtask queue.
Even though the setTimeout callback was ready in the callback queue after 3 seconds, the event loop didn't process it immediately because the microtask queue got filled with the fetch's .then() callback when the fetch completed after 5 seconds.
*/
