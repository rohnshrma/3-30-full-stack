// Select the first <h1> element on the page to display the game result
var heading = document.querySelector("h1");

// Select the first dice image element with class "img1"
var dice1 = document.querySelector(".img1");
// Select the second dice image element with class "img2"
var dice2 = document.querySelector(".img2");

// Add an event listener for any key press on the keyboard
document.addEventListener("keydown", (e) => {
  // Check if the pressed key is the spacebar (e.key is a space character)
  if (e.key === " ") {
    // If spacebar is pressed, start the dice roll game
    playGame();
  }
});

// Function that simulates rolling the dice and updates the display accordingly
function playGame() {
  // Add the "roll" class to both dice images to trigger roll animation (assumed CSS animation)
  dice1.classList.add("roll");
  dice2.classList.add("roll");

  // Wait 1 second (1000 milliseconds) to simulate dice rolling animation
  setTimeout(() => {
    // Remove the "roll" class to stop the dice roll animation
    dice1.classList.remove("roll");
    dice2.classList.remove("roll");

    // Generate a random number from 1 to 6 for dice 1
    var r1 = Math.floor(Math.random() * 6) + 1;
    // Generate a random number from 1 to 6 for dice 2
    var r2 = Math.floor(Math.random() * 6) + 1;

    // Log the random dice values to the browser console for debugging
    console.log(r1, r2);

    // Change the image source of the first dice to correspond to the random roll
    dice1.setAttribute("src", `dice${r1}.png`);
    // Change the image source of the second dice similarly
    dice2.setAttribute("src", `dice${r2}.png`);

    // Compare the dice results to determine the winner or if it's a draw
    if (r1 > r2) {
      // Player 1 wins: update the <h1> text accordingly
      heading.innerText = "Player 1 Wins ❤️";
    } else if (r2 > r1) {
      // Player 2 wins: update the <h1> text accordingly
      heading.innerText = "Player 2 Wins ❤️";
    } else {
      // If both dice have the same value, it's a draw
      heading.innerText = "Draw 😞";
    }
  }, 1000); // End of setTimeout delay - 1-second animation
}
