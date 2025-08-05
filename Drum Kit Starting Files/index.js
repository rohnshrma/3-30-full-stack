// Select all HTML elements with the class "drum" and store them in the 'drums' variable
let drums = document.querySelectorAll(".drum");
// 'document' is the webpage; 'querySelectorAll' finds all elements with class "drum"
// These elements are likely buttons or divs representing drum pads
// 'drums' is a NodeList (like an array) containing all matching elements

// Loop through each drum element in the 'drums' NodeList
drums.forEach((drum) => {
  // 'forEach' runs the code inside for every drum element
  // 'drum' is the current element in the loop

  // Add a "click" event listener to the current drum element
  drum.addEventListener("click", (e) => {
    // When the drum is clicked, this function runs
    // 'e' is the event object, containing details about the click

    // Get the text inside the clicked drum element (e.g., "w", "a")
    var key = e.target.textContent;
    // 'e.target' is the element that was clicked
    // 'textContent' gets the text inside that element
    // 'var key' stores this text to use in functions

    // Call the playSound function, passing the key (e.g., "w")
    playSound(key);
    // This will play the sound associated with the key

    // Call the animate function, passing the key
    animate(key);
    // This will animate the drum element associated with the key
  });
});

// Add a "keydown" event listener to the entire webpage
document.addEventListener("keydown", (e) => {
  // When any key is pressed on the keyboard, this function runs
  // 'e' is the event object, containing details about the key press

  // Get the key that was pressed (e.g., "w", "a")
  var key = e.key;
  // 'e.key' gives the lowercase letter of the pressed key
  // 'var key' stores this value

  // Call the playSound function with the pressed key
  playSound(key);
  // Plays the sound associated with the key

  // Call the animate function with the pressed key
  animate(key);
  // Animates the drum element associated with the key
});

// Define the playSound function, which takes a 'key' parameter
function playSound(key) {
  // This function plays a sound based on the key provided

  // Use a switch statement to check the value of 'key'
  switch (key) {
    // If key is "w"
    case "w":
      // Create a new Audio object with the path to the crash sound
      var audio = new Audio("./sounds/crash.mp3");
      // Play the audio
      audio.play();
      // Exit the switch statement
      break;

    // If key is "a"
    case "a":
      // Create a new Audio object with the path to the kick-bass sound
      var audio = new Audio("./sounds/kick-bass.mp3");
      // Play the audio
      audio.play();
      // Exit the switch statement
      break;

    // If key is "s"
    case "s":
      // Create a new Audio object with the path to the snare sound
      var audio = new Audio("./sounds/snare.mp3");
      // Play the audio
      audio.play();
      // Exit the switch statement
      break;

    // If key is "d"
    case "d":
      // Create a new Audio object with the path to the tom-1 sound
      var audio = new Audio("./sounds/tom-1.mp3");
      // Play the audio
      audio.play();
      // Exit the switch statement
      break;

    // If key is "j"
    case "j":
      // Create a new Audio object with the path to the tom-2 sound
      var audio = new Audio("./sounds/tom-2.mp3");
      // Play the audio
      audio.play();
      // Exit the switch statement
      break;

    // If key is "k"
    case "k":
      // Create a new Audio object with the path to the tom-3 sound
      var audio = new Audio("./sounds/tom-3.mp3");
      // Play the audio
      audio.play();
      // Exit the switch statement
      break;

    // If key is "l"
    case "l":
      // Create a new Audio object with the path to the tom-4 sound
      var audio = new Audio("./sounds/tom-4.mp3");
      // Play the audio
      audio.play();
      // Exit the switch statement
      break;
    // If the key doesn't match any case, nothing happens
  }
}

// Define the animate function, which takes a 'key' parameter
function animate(key) {
  // This function adds a visual animation to the drum element

  // Check if the key is one of the valid drum keys ("w", "a", "s", "d", "j", "k")
  if ("wasdjk".includes(key)) {
    // 'includes' checks if the key is in the string "wasdjk"
    // This prevents errors for invalid keys

    // Find the drum element with the class matching the key (e.g., class="w")
    var drum = document.querySelector(`.${key}`);
    // 'querySelector' finds the element with class equal to the key
    // `.${key}` creates a class selector like ".w" or ".a"

    // Add the "pressed" class to the drum element
    drum.classList.add("pressed");
    // 'classList.add' adds the CSS class "pressed" to the element
    // This likely triggers a visual effect defined in CSS (e.g., shadow, scale)

    // Set a timer to remove the "pressed" class after 100 milliseconds
    setTimeout(() => {
      // 'setTimeout' runs the code inside after a delay (100ms)
      // The arrow function runs after the delay

      // Remove the "pressed" class from the drum element
      drum.classList.remove("pressed");
      // This returns the drum to its original appearance
    }, 100);
    // 100 is the delay in milliseconds (0.1 seconds)
  }
}
