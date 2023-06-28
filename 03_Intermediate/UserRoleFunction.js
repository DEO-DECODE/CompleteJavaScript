function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin`;
    case "subadmin":
      return `${name} is subadmin`;
    case "tesprep":
      return `${name} is a test prep`;
    case "user":
      return `${name} is a user`;
    default:
      return `${name} is a random guy`;
  }
}
console.log(getUserRole("Dev", "admin"));
let getUserRole2 = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin`;
    case "subadmin":
      return `${name} is subadmin`;
    case "tesprep":
      return `${name} is a test prep`;
    case "user":
      return `${name} is a user`;
    default:
      return `${name} is a random guy`;
  }
};
console.log(getUserRole2("Shru", "abc"))