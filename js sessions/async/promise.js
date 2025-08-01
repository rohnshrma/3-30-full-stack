// // Create a new Promise named myPromise to handle asynchronous operations
// var myPromise = new Promise((resolve, reject) => {
//   // Prompt user for age, convert input (string) to a number using parseInt
//   var age = parseInt(prompt("Enter your age : "));

//   // Delay execution by 5 seconds (5000 milliseconds) using setTimeout
//   setTimeout(() => {
//     // Check if age is 18 or greater
//     if (age >= 18) {
//       // If true, resolve the Promise with a success message
//       resolve("Congratulation! You're eligible to drive.");
//     } else {
//       // If false, reject the Promise with an error message
//       reject("Not Eligble to drive (abhi chota hai)");
//     }
//   }, 5000); // 5000ms delay for setTimeout
// }); // Close the Promise

// // Handle the Promise's success case
// myPromise
//   .then((result) => {
//     // Log the success message to the console
//     console.log(result);
//   })
//   // Handle the Promise's failure case
//   .catch((err) => {
//     // Log the error message to the console
//     console.log(err);
//   });

// // Define a custom function to fetch data, returning a Promise
// function meraFetch(url) {
//   // Create a new Promise to handle the async request
//   return new Promise((resolve, reject) => {
//     // Create a new XMLHttpRequest object to make HTTP requests
//     var request = new XMLHttpRequest();

//     // Add an event listener for when the request state changes
//     request.addEventListener("readystatechange", () => {
//       // Check if the request is complete (readyState 4) and successful (status 200)
//       if (request.readyState === 4 && request.status === 200) {
//         // Parse the response text (JSON) and resolve the Promise with the data
//         resolve(JSON.parse(request.responseText));
//       }

//       // Check if the request is complete but failed (status not 200)
//       if (request.readyState === 4 && request.status !== 200) {
//         // Reject the Promise with an error message
//         reject(`Failed to fetch data`);
//       }
//     });

//     // Set up the HTTP request as a GET request to the provided URL
//     request.open("GET", url);
//     // Send the request to the server
//     request.send();
//   }); // Close the Promise and function
// }

// // Call meraFetch with a URL to get a joke from an API
// meraFetch(
//   "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=twopart"
// )
//   // Handle the successful response
//   .then((response) => console.log(response)) // Log the fetched joke data
//   // Handle any errors
//   .catch((err) => console.log(err)); // Log the error message

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         resolve(JSON.parse(request.responseText));
//       } else if (request.readyState === 4 && request.status !== 200) {
//         reject("Failed to fetch data");
//       }
//     });
//     request.open("GET", url);
//     request.send();
//   });
// }
// fetchData(
//   "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=twopart"
// )
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Define a function to fetch weather data for a given city
function fetchWeather(cityName) {
  // Construct the API URL using a template literal
  // Template literals (``) allow embedding variables like ${cityName} in the string
  // The URL includes the city name and a hardcoded API key for OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ed1a8944ae36bde087adc8f67d0f04a`;

  // Return a new Promise to handle the asynchronous HTTP request
  // Promises provide a way to handle async operations with resolve (success) or reject (failure)
  return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest object to make an HTTP request
    // XMLHttpRequest is an older API for sending HTTP requests
    const request = new XMLHttpRequest();

    // Add an event listener for the 'readystatechange' event
    // This event fires when the request's state changes (e.g., loading, done)
    request.addEventListener("readystatechange", () => {
      // Check if the request is complete (readyState === 4) and successful (status === 200)
      if (request.readyState === 4 && request.status === 200) {
        // Parse the JSON response into a JavaScript object and resolve the Promise
        // request.responseText contains the raw JSON string from the API
        resolve(JSON.parse(request.responseText));
      } else if (request.readyState === 4 && request.status !== 200) {
        // If the request is complete but failed (e.g., 404 or 500), resolve with an error message
        // Note: Using resolve instead of reject for errors is unconventional (see explanation below)
        resolve(`Failed to fetch weather of ${cityName}`);
      }
    });

    // Initialize the HTTP request with the method "GET" and the constructed URL
    request.open("GET", url);
    // Send the request to the server
    request.send();
  });
}

// Call fetchWeather for the city "gurgaon" and handle the Promise
fetchWeather("gurgaon")
  // .then() handles the resolved value (weather data or error message)
  .then((weatherData) => console.log(weatherData)) // Log the resolved data to the console
  // .catch() handles any rejected Promise (none in this case, see note below)
  .catch((err) => console.log(err));
