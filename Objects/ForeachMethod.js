let dishes = ["Biryani", "Butter Chicken", "Kadhi", "Sweets"];
dishes.forEach((elem) => {
  console.log(elem);
});
/*
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.
*/
// Example 2
console.log("------")
let blockList=[{user: "Sneha", reason: "Abusive content"}, {user: "Shruti", reason:"Unauthorized accees"}];
blockList.forEach((elem)=>{
  console.log(`${elem.user} was blocked due to ${elem.reason}`);
})