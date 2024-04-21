//Creating Promises

const cart = ["kurta", "pants", "shirt"];

const promise = createOrder(cart); //orderId
console.log(promise);
promise
  .then(function (orderId) {
    //Handles when promise got resolved
    console.log(orderId);
    return orderId; //Don't forgert to return stuff while doin promise chaining
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); 
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return paymentInfo;
  })
  .catch(function (err) {
    //Handles when the promise got rejected
    console.log(err);
  });

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    //Here inside the function that is being passed as parameter to the Promise COnstructor, we will write the logic for the fucntion
    if (!validateCart()) {
      const err = new Error("Cart couldn't be validated");
      reject(err); // will go to .catch
    } else {
      const orderId = "1234";
      if (orderId) {
        resolve(orderId); //will go to .then
      }
    }
  });
  return pr;
}

function proceedToPayment(orderid) {
  return new Promise(function (resolve, reject) {
    resolve("Validated Successfully");
  });
}
function validateCart() {
  return true;
}
