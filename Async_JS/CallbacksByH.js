/*
A callback function is a function, which is passed as an argument to another function. Which is then invoked inside the outer function to complete an action.
*/
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log("Laoded Script with source " + src);
    callback(null, src);
  };
  script.onerror = () => {
    console.log("Error loading with src " + src);
    callback(new Error("Unable to load"));
  };
  document.body.appendChild(script);
}
function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello World " + src);
}
loadScript("Promise.js", hello);
/*
Related Questions
What are callback functions?
*/
