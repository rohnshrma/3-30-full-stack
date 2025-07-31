// Function declaration: Defines a function named `sendRequest` that accepts two parameters:
// - `url`: The URL of the resource to fetch (e.g., an API endpoint).
// - `cb`: A callback function to handle the response or error once the request is complete.
function sendRequest(url, cb) {
  // Creates a new instance of XMLHttpRequest, a built-in browser API for making HTTP requests.
  var request = new XMLHttpRequest();

  // Attaches an event listener to the `request` object for the `readystatechange` event,
  // which triggers whenever the request's readyState changes.
  request.addEventListener("readystatechange", () => {
    // Checks if the request is complete (readyState === 4) and the HTTP status is 200 (success).
    // readyState 4 indicates the request has finished, and the response is available.
    // status 200 means the server responded successfully.
    if (request.readyState === 4 && request.status === 200) {
      // Calls the callback function `cb`, passing `null` for the error (indicating success)
      // and `request.responseText` (the response body as a string) as the data.
      cb(null, request.responseText);
    }
    // Checks if the request is complete (readyState === 4) but the HTTP status is not 200,
    // indicating a failure (e.g., 404 Not Found, 500 Server Error).
    if (request.readyState === 4 && request.status !== 200) {
      // Calls the callback function `cb`, passing an error message and `null` for the data.
      cb(`Failed to fetch data`, null);
    }
  });

  // Initializes the HTTP request:
  // - "GET" specifies the HTTP method to retrieve data.
  // - `url` is the target endpoint for the request.
  // - The request is asynchronous by default (no third parameter needed for async).
  request.open("GET", url);

  // Sends the HTTP request to the server. For a GET request, no body is included.
  request.send();
}

// Calls the `sendRequest` function with two arguments:
// - The URL "https://jsonplaceholder.typicode.com/users", a public API endpoint that returns a JSON array of users.
// - `handleData`, the callback function to process the response or handle errors.
sendRequest("https://jsonplaceholder.typicode.com/users", handleData);

// Function declaration: Defines a function named `handleData` to process the response from `sendRequest`.
// - `err`: The error parameter, which is `null` if the request was successful, or an error message if it failed.
// - `data`: The response data, which is `null` if the request failed, or the response body (string) if successful.
function handleData(err, data) {
  // Checks if an error occurred (i.e., `err` is not null).
  if (err) {
    // Logs the error message to the console if an error occurred.
    console.log("error =>", err);
  } else {
    // Logs the response data (a string containing JSON) to the console if no error occurred.
    console.log("data =>", data);
  }
}

// =========================  more accurate

// Function declaration: Defines a function named `sendRequest` that takes two parameters:
// - `url`: The URL to send the HTTP request to.
// - `cb`: A callback function to handle the response (or error) once the request is complete.
function sendRequest(url, cb) {
  // Creates a new instance of XMLHttpRequest, a built-in browser API for making HTTP requests.
  var request = new XMLHttpRequest();

  // Adds an event listener to the `request` object to listen for the `readystatechange` event,
  // which fires whenever the readyState of the request changes.
  request.addEventListener("readystatechange", () => {
    // Checks if the request is complete (readyState === 4) and the HTTP status is 200 (OK).
    // readyState 4 means the request is finished and the response is ready.
    // status 200 indicates a successful HTTP request.
    if (request.readyState === 4 && request.status === 200) {
      // Calls the callback function `cb` with `null` as the error (indicating no error)
      // and `request.responseText` as the data, which contains the response body as a string.
      cb(null, request.responseText);
    }
    // Checks if the request is complete (readyState === 4) but the HTTP status is not 200,
    // indicating a failed request (e.g., 404 Not Found, 500 Server Error, etc.).
    if (request.readyState === 4 && request.status !== 200) {
      // Calls the callback function `cb` with an error message as the first argument
      // and `null` as the data, indicating the request failed.
      cb(`Failed to fetch data`, null);
    }
  });

  // Configures the HTTP request:
  // - "GET" specifies the HTTP method (retrieves data from the server).
  // - `url` is the endpoint to send the request to.
  // - The third parameter (optional, not used here) would be `async` (true by default for asynchronous requests).
  request.open("GET", url);

  // Sends the HTTP request to the server. Since this is a GET request, no data is sent in the body.
  request.send();
}

// Calls the `sendRequest` function with two arguments:
// - The URL "https://jsonplaceholder.typicode.com/users", a public API endpoint that returns a list of users in JSON format.
// - An anonymous arrow function (callback) that handles the response or error.
sendRequest(
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=twopart",
  (err, data) => {
    // Checks if there is an error (i.e., `err` is not null).
    if (err) {
      // If an error exists, logs the error message to the console.
      console.log("error =>", err);
    } else {
      // If no error, logs the response data (a string containing JSON data) to the console.
      console.log("data =>", data);
      sendRequest(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=twopart",
        (err, data) => {
          // Checks if there is an error (i.e., `err` is not null).
          if (err) {
            // If an error exists, logs the error message to the console.
            console.log("error =>", err);
          } else {
            // If no error, logs the response data (a string containing JSON data) to the console.
            console.log("data =>", data);
            sendRequest(
              "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=twopart",
              (err, data) => {
                // Checks if there is an error (i.e., `err` is not null).
                if (err) {
                  // If an error exists, logs the error message to the console.
                  console.log("error =>", err);
                } else {
                  // If no error, logs the response data (a string containing JSON data) to the console.
                  console.log("data =>", data);
                  sendRequest(
                    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=twopart",
                    (err, data) => {
                      // Checks if there is an error (i.e., `err` is not null).
                      if (err) {
                        // If an error exists, logs the error message to the console.
                        console.log("error =>", err);
                      } else {
                        // If no error, logs the response data (a string containing JSON data) to the console.
                        console.log("data =>", data);
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    }
  }
);
