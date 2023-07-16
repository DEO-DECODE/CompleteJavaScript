// Maps
/*
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map.
The has() method returns true if a key exists in a Map:
typeof returns object:
*/
let restaurantMap = new Map();
// Adding Values into the Map.
restaurantMap
  .set("name", "Nirmala Inn")
  .set(1, "ADDRESS1")
  .set(2, "Address2")
  .set(true, "We are Open tooday!");
console.log(restaurantMap);
// Getting the Value corresponding to the key.
console.log(restaurantMap.get("name"));
// Now for looping , we use forEach method.
restaurantMap.forEach((value, key) => {
  console.log("Key :- ", key, " Value : ", value);
});
