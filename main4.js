//Using async await to handle promise while making a fetch api call

const API_URL = "https://api.github.com/users/gs-ssiddiqui";
async function handlepromise() {
  try {
    const data = await fetch(API_URL); //fetch API is a browser API, that returns a promise, so to handle it we wil use await
    //fetch() => Response.json() => jsonValue
    //the data recieved is not in json format we need to convert it.
    //   console.log(data);
    //   console.log(data.json); //data.json again is a promise so to handle it we need to put await before it
    const jsonData = await data.json();
    console.log(jsonData);
  } catch (err) {
    //If we hadn't use await then we would have writte:
    //   fetch(API_URL)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
    console.log(err);
  }
}
handlepromise();

//ERROR HANDLING : wrap the API call inside the try block
