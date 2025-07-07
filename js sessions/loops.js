// Loop Concepts:
// Loops are used to repeatedly execute a block of code based on a condition or for a specific number of iterations.
// 1. for loop: Used for fixed iterations where the number of iterations is known or can be determined.
// 2. while loop: Used for both fixed and non-fixed iterations; continues as long as a condition is true.
// 3. do while loop: Similar to while, but guarantees at least one execution; used for both fixed and non-fixed iterations.

// Iteration and Iterables:
// Iteration is the process of looping over a sequence of elements.
// Iterables are objects that can be looped over, such as:
// - String: A sequence of characters (e.g., "hello").
// - Array: A collection of elements (e.g., [1, 2, 3]).

// For Loop Structure (Fixed Iteration):
// A for loop consists of three parts:
// 1. Initialization: Sets the starting point (e.g., a counter variable).
// 2. Condition: A test that must be true for the loop to continue.
// 3. Update: Modifies the counter variable after each iteration.

// Example Context for Water Level:
// Simulating a water level increasing from 0 ml to 1000 ml in steps of 100 ml.
// 1. Initialization: Start at 0 ml.
// 2. Condition: Continue until water_level reaches 1000 ml.
// 3. Update: Increase water_level by 100 ml each iteration.

// First Code Block: Water Level Loop
for (var water_level = 0; water_level <= 1000; water_level += 100) {
  // Initialize water_level to 0; loop while water_level is <= 1000; increment water_level by 100 each iteration
  console.log(water_level); // Output the current value of water_level to the console (e.g., 0, 100, 200, ..., 1000)
}

// Second Code Block: Counting Up from 1 to 10
for (var i = 1; i <= 10; i += 1) {
  // Initialize i to 1; loop while i is <= 10; increment i by 1 each iteration
  console.log(i); // Output the current value of i to the console (e.g., 1, 2, 3, ..., 10)
}

// Third Code Block: Counting Down from 100 to 1
for (var i = 100; i >= 1; i -= 1) {
  // Initialize i to 100; loop while i is >= 1; decrement i by 1 each iteration
  console.log(i); // Output the current value of i to the console (e.g., 100, 99, 98, ..., 1)
}

// Fourth Code Block: Finding Even Numbers from 100 to 1
// Goal: Identify and print all even numbers in the range 100 to 1.
for (var i = 100; i >= 1; i -= 1) {
  // Initialize i to 100; loop while i is >= 1; decrement i by 1 each iteration
  if (i % 2 === 0) {
    // Check if i is even by testing if i divided by 2 has no remainder
    console.log(i); // Output the current value of i to the console if it is even (e.g., 100, 98, 96, ..., 2)
  }
}
