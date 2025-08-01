// Function to fetch weather data for a given city using XMLHttpRequest
function fetchWeather(cityName) {
  // Construct the API URL with the city name and API key
  // Template literals (`) are used for string interpolation
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ed1a8944ae36bde087adc8f67d0f04a`;

  // Return a new Promise to handle asynchronous HTTP request
  // Promises allow handling async operations with resolve (success) or reject (failure)
  return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest object to make HTTP requests
    const request = new XMLHttpRequest();

    // Add an event listener for the 'readystatechange' event
    // This event fires when the state of the request changes (e.g., loading, done)
    request.addEventListener("readystatechange", () => {
      // Check if the request is complete (readyState === 4) and successful (status === 200)
      if (request.readyState === 4 && request.status === 200) {
        // Parse the JSON response into a JavaScript object and resolve the Promise
        resolve(JSON.parse(request.responseText));
      } else if (request.readyState === 4 && request.status !== 200) {
        // If request is complete but failed (e.g., 404 or 500), resolve with an error message
        // Note: Using resolve instead of reject here is unconventional (see explanation below)
        resolve(`Failed to fetch weather of ${cityName}`);
      }
    });

    // Initialize the HTTP GET request with the constructed URL
    request.open("GET", url);
    // Send the request to the server
    request.send();
  });
}

// Call fetchWeather for "gurgaon" and handle the Promise
// .then() is used to process the resolved value (weather data or error message)
fetchWeather("gurgaon")
  .then((weatherData) => console.log(weatherData)) // Log the resolved data
  .catch((err) => console.log(err)); // Handle any rejected Promise (none in this case, see note)

// Call fetchWeather for "delhi"
fetchWeather("delhi")
  .then((weatherData) => console.log(weatherData))
  .catch((err) => console.log(err));

// Call fetchWeather for "agra"
fetchWeather("agra")
  .then((weatherData) => console.log(weatherData))
  .catch((err) => console.log(err));

// Call fetchWeather for "punjab"
fetchWeather("punjab")
  .then((weatherData) => console.log(weatherData))
  .catch((err) => console.log(err));

// Define an async function to handle weather requests
// async functions implicitly return a Promise
async function handleRequest(city) {
  try {
    // Await the result of fetchWeather, which returns a Promise
    // await pauses execution until the Promise resolves
    const response = await fetchWeather(city);
    // Log the response (weather data or error message)
    console.log(response);
  } catch (err) {
    // Catch and log any errors if the Promise is rejected
    console.log(err);
  }
}

// Note: The following declaration redefines handleRequest
// This is likely a mistake, as it overwrites the previous function
// JavaScript allows redefinition without error, but only the last definition is used
const handleRequest = async (city) => {
  try {
    // Same logic as the previous handleRequest function, but using arrow function syntax
    const response = await fetchWeather(city);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

// Call the redefined handleRequest for various cities
// These calls use the arrow function version of handleRequest
handleRequest("gurgaon");
handleRequest("agra");
handleRequest("karnal");
handleRequest("meerut");

// Define an async function to fetch weather data using the modern fetch API
const fetchWeatherDetails = async (cityName) => {
  try {
    // Use fetch to make an HTTP GET request to the OpenWeatherMap API
    // fetch returns a Promise that resolves to a Response object
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ed1a8944ae36bde087adc8f67d0f04a`
    );
    // Parse the response body as JSON
    // response.json() returns a Promise that resolves to the parsed data
    let data = await response.json();
    // Log the parsed weather data
    console.log(data);
  } catch (err) {
    // Catch and log any errors (e.g., network issues or invalid JSON)
    console.log(err);
  }
};

// Call fetchWeatherDetails for "gurgaon"
fetchWeatherDetails("gurgaon");
