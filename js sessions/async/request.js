// Create a new XMLHttpRequest object to handle HTTP requests
var request = new XMLHttpRequest();

// Add an event listener for changes in the request's state
request.addEventListener("readystatechange", () => {
  // Check if the request is complete and was successful (HTTP status 200)
  if (request.readyState === 4 && request.status === 200) {
    // Log the ready state and the response text from the server
    console.log(
      `ready state => ${request.readyState}\nResponse Text => ${request.responseText}`
    );
  }

  // Check if the request is complete but was not successful
  if (request.readyState === 4 && request.status !== 200) {
    // Log a failure message
    console.log(`Failed to fetch data`);
  }
});

// Initialize a GET request to the specified URL (does not send yet)
request.open("GET", "https://jsonplaceholder.typicode.com/users");

// Send the request to the server
request.send();

// 0 : unsent - request not initialized
// 1 : open function has been called - request initialized
// 2 : send function has been called - request sent to server
// 3 : downloading partial data - response is being received
// 4 : request completed (downloading fully data) - response is fully received
