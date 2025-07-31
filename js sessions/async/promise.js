// Create a new Promise named myPromise to handle asynchronous operations
var myPromise = new Promise((resolve, reject) => {
  // Prompt user for age, convert input (string) to a number using parseInt
  var age = parseInt(prompt("Enter your age : "));

  // Delay execution by 5 seconds (5000 milliseconds) using setTimeout
  setTimeout(() => {
    // Check if age is 18 or greater
    if (age >= 18) {
      // If true, resolve the Promise with a success message
      resolve("Congratulation! You're eligible to drive.");
    } else {
      // If false, reject the Promise with an error message
      reject("Not Eligble to drive (abhi chota hai)");
    }
  }, 5000); // 5000ms delay for setTimeout
}); // Close the Promise

// Handle the Promise's success case
myPromise
  .then((result) => {
    // Log the success message to the console
    console.log(result);
  })
  // Handle the Promise's failure case
  .catch((err) => {
    // Log the error message to the console
    console.log(err);
  });

// Define a custom function to fetch data, returning a Promise
function meraFetch(url) {
  // Create a new Promise to handle the async request
  return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest object to make HTTP requests
    var request = new XMLHttpRequest();

    // Add an event listener for when the request state changes
    request.addEventListener("readystatechange", () => {
      // Check if the request is complete (readyState 4) and successful (status 200)
      if (request.readyState === 4 && request.status === 200) {
        // Parse the response text (JSON) and resolve the Promise with the data
        resolve(JSON.parse(request.responseText));
      }

      // Check if the request is complete but failed (status not 200)
      if (request.readyState === 4 && request.status !== 200) {
        // Reject the Promise with an error message
        reject(`Failed to fetch data`);
      }
    });

    // Set up the HTTP request as a GET request to the provided URL
    request.open("GET", url);
    // Send the request to the server
    request.send();
  }); // Close the Promise and function
}

// Call meraFetch with a URL to get a joke from an API
meraFetch(
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=twopart"
)
  // Handle the successful response
  .then((response) => console.log(response)) // Log the fetched joke data
  // Handle any errors
  .catch((err) => console.log(err)); // Log the error message
