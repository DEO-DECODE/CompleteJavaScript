var countries=["India", "USA", "NEWZEALAND", "RUSIAN"];
var states= new Array("Bihar", "Rajasthan", "Jharkhand", "UP");
console.log(states);
console.log(states.length);
states[1]="Punjab";
console.log(states);
var user=["dev", "dev@9822.com", 3, 34, true];
console.log(user);
// user.pop();

user.unshift("New Value");
console.log(user);
user.shift();
console.log(user);
console.log(user.indexOf(3));
console.log(user.indexOf("raj"));
console.log(Array.from("Bhardwaj"));