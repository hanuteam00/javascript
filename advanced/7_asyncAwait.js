//ex1: async
function myDisplayer(some) {
    console.log(some)
  }
async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  //The await keyword can only be used inside an async function.
  //The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

  //ex2: async await
  async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) { //Very often we will not need a reject function.
      resolve("I love You !!");
    });
    console.log(await myPromise)
  }
  
  myDisplay();