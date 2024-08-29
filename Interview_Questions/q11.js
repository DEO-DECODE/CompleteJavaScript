let fullname = "Global Dev";
let obj = {
  fullname: "obj Dev",
  
  nestobj: {
    fullname: "nestobj Dev",
    
    wrapFunction: function() {

      let arrowFunction = () => {

        return this.fullname;
      };
      return arrowFunction();
    }
  }
};

console.log(obj.nestobj.wrapFunction());
/*
The wrapFunction method is a regular function within nestobj. In a regular function, this refers to the object that owns the method, which in this case is nestobj.
*/