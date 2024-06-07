let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved after 2 seconds");
    reject(new Error("error occured!"));
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
          reject(new Error("Unfortunately an error occured!"));
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
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data processed");
      data.processed = true;
      resolve(data);
    }, 1000);
  });
}

function displayData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Displaying data: ${JSON.stringify(data)}`);
      resolve();
    }, 500);
  });
}

fetchData()
  .then((data) => {
    return processData(data);
  })
  .then((processedData) => {
    return displayData(processedData);
  })
  .then(() => {
    console.log("All tasks completed");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
