// Use the fetch API to request a joke from the JokeAPI
fetch(
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=twopart"
)
  // When the response arrives, run this function
  .then((response) => {
    // Log the raw response object to the console
    console.log(response);
    // Convert the response body from JSON to a JavaScript object
    response.json().then((data) => {
      // Log the parsed data object
      console.log("data ==>", data);
      // Log the 'setup' part of the joke
      console.log("setup ==>", data.setup);
      // Log the 'delivery' (punchline) part of the joke
      console.log("delivery ==>", data.delivery);
    });
  })
  // If there is an error (e.g., network issue), run this function
  .catch((reason) => {
    // Log the error reason to the console
    console.log(reason);
  });
