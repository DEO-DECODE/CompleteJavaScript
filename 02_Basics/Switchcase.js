// admin : gets full acess
// subadmin : gets acess to create and delete courses
// testprep : gets acess to create and delete courses.
// user : gets access to consume content.
var user = "admin";
switch (user) {
  case "admin": {
    console.log("gets full acess");
    break;
  }
  case "subadmin": {
    console.log("gets acess to create and delete courses");
    break;
  }
  case "testprep": {
    console.log("gets acess to create and delete courses.");
    break;
  }
  case "user": {
    console.log("gets access to consume content");
    break;
  }
  default: {
    console.log("Trial User");
    break;
  }
}
