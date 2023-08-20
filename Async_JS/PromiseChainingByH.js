let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved after 2 seconds");
    resolve(56);
  }, 2000);
});

p1.then(
  (value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 2");
      }, 2000);
    });
  },
  (error) => {
    console.log(error);
  }
)
  .then(
    (value) => {
      console.log(value);
      console.log("We are done");
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Unfortunately an error occured!");
        });
      }, 3000);
    },
    (error) => {
      console.log(error);
    }
  )
  .then(
    (value) => {
      console.log("Now we are pakka done");
    },
    (error) => {
      console.log(error);
    }
  );
