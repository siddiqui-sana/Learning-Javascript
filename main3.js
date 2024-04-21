//aync await

//async function always returns a promise
async function getData() {
  return "This value wil be wrapped inside the promise";
}
const pr = getData();
//We got promise in return now this is how we access the data wrapped inside the promise: using the .then method and inside the .then we pass callback fucntion and that callback function gets the actual value as parameter
pr.then(function (data) {
  console.log(data);
});
//if we use the arrow function format
pr.then((data) => console.log(data));

//What if the async function itself returns a promise: Will that promise be wrapped inside another promise?
//No, in thay case only the promise returned by the funciton will be returned.
const p = new Promise(function (resolve, reject) {
  //Here you will write the function logic and return whatever you want to return
  resolve("Promise Resolved Successfully");
});

async function getData2() {
  return p;
}
const pr2 = getData2();
console.log("See its a Promise: ", pr2);
pr2.then((data) => console.log(data));

//async is used with await to handle promises
