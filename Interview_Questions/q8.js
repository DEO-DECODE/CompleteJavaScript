var fullName = "Dev Raj";
var obj = {
  fullName: "Dev Raj Bhardwaj",
  prop: {
    fullName: "Vishali Sharma",
    getFullName: function () {
      return this.fullName;
    },
  },
  getFullName: function () {
    return this.fullName;
  },
  getFullNameV2: () => {
    return this.fullName;
  },
  getFullNameV3: (function () {
    return this.fullName;
  })(),
};
console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());
// console.log(obj.getFullNameV3());
console.log(obj.getFullNameV3);
