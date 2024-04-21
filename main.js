//setTimeout function : Takes two parameters: A callback function and time period in ms.

setTimeout(() => {
  console.log("This got consoled after 5 seconds");
}, 5000);

document.getElementById("click me").addEventListener("click", function xyz() {
  console.log("Button was click");
});

//how setTimeout works: the setTimeout will keep the callback function in some seperate space
// and execute it after the mentioned time period. In the given time rest synchromous task will get executed.

console.log("Hello World");
function x(fn) {
  return fn;
}

function y() {
  console.log("This value is coming from the callback function");
}

a = x(y);
a(); //This will execute the funciton y

//Promises
//The fetch API is asynchronous so it will return a promise initially when the fucntion is not excuted this user will hold the empty promise object
const user = fetch("https://api.github.com/users/siddiqui-sana");
//After the fetch function gets completed in execution the user(promise object) will get filled with all the data i.e. the promise object and only then the fucntion we have passed in the user.then() will get exceuted
console.log(user);
//How a promise object looks like: [Prototype: promise, promiseState: pending/fufilled/Rejected, promiseData: Holds the data returned from the functiojn that was executed]
user.then((data) => {
  //This is the data that proomise object holds
  console.log(data);
});

//Also the promises are immutable that is the data received in the prmise object cannot be chamnged.
