// Map Methods
/*
 Create new array from Original Array by applying some Transformation Functions.
*/
let Salaries = [3000, 5000, 8000, 9000, 6000];
let newSalaries = Salaries.map((elem) => {
  return elem + elem / 2;
});
// console.log("Original Array : ", Salaries);
console.log("New Array : ", newSalaries);
// ****LENGTH OF THE NEW ARRAY IS ALWAYS EQUAL TO THE ORIGINAL ONE
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

let newArray=persons.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join(" - ");
}
console.log(newArray);
// Filter Method
// Filter method is used to perform filtration on the array.
function checkStudents(name) {
  for (let i = 0; i < name.length; ++i) {
    if (name[i] === "a") return true;
  }
  return false;
}
let studentList = ["Dev", "Raj", "Vaibhav", "Shri", "Shyam"];
let updatedStudents = studentList.filter(checkStudents);
console.log(updatedStudents);
