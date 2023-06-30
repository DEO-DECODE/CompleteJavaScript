var users = {
  firstName: "Dev",
  lastName: "Raj",
  role: "Admin",
  loginCount: 37,
  facebookSignedIn: true,
  courseList: [],
  byCourse: function (courseName) {
    this.courseList.push(courseName);
    /*
     This will be simply used to refer to the courseList (array) of users object
     */
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};
// users.loginCount = 45;
// console.log(users);
// console.table(users);
var courseList=true;
console.log(users.firstName);
console.log(users.getCourseCount());
users.byCourse("React JS Course");
users.byCourse("Angular JS");
console.log(users.getCourseCount());
