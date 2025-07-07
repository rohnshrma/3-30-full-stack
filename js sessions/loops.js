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

// =========================

// // String Indexing Concept:
// Strings in JavaScript are zero-indexed, meaning the first character is at index 0.
// The last character is at index string.length - 1 because:
// - string.length gives the total number of characters.
// - Since indexing starts at 0, the last character's index is one less than the length.
// Example: For the string "hello" (length 5), indices are:
// - 'h' at index 0
// - 'e' at index 1
// - 'l' at index 2
// - 'l' at index 3
// - 'o' at index 4 (length 5 - 1 = 4)

// For Loop Concept (Repeated from Context):
// A for loop is used for fixed iterations with three components:
// 1. Initialization: Sets the starting value of the counter (e.g., i = 0).
// 2. Condition: Checks if the loop should continue (e.g., i < string.length).
// 3. Update: Modifies the counter after each iteration (e.g., i += 1).

// Context for the Code:
// The variable 'text' holds the string "hello world this is john doe".
// The loop iterates over the string to print each character, leveraging zero-based indexing.

// Code with Indexing Explanation
var text = "hello world this is john doe"; // Declare a variable 'text' with a string of 27 characters (including spaces)
// For this string, length is 27:
// - First character 'h' is at index 0.
// - Last character 'e' is at index 26 (27 - 1).

// Commented-Out Code: Manual Character Access
// console.log(text[0]) // Would print 'h' (first character at index 0)
// console.log(text[1]) // Would print 'e' (second character at index 1)
// console.log(text[2]) // Would print 'l' (third character at index 2)
// console.log(text[3]) // Would print 'l' (fourth character at index 3)
// console.log(text[4]) // Would print 'o' (fifth character at index 4)

// For Loop: Iterating Over the String
for (var i = 0; i < text.length; i += 1) {
  // Initialize i to 0 (first index); continue while i is less than 27 (text.length); increment i by 1 each iteration
  console.log(text[i]); // Output the character at index i (e.g., i=0 prints 'h', i=1 prints 'e', ..., i=26 prints 'e' (last character))
}
// Why i < text.length? This ensures the loop stops before i equals 27, as index 27 is out of bounds (last valid index is 26).

//========== tasks

// String Indexing Concept (Repeated for Context):
// Strings in JavaScript are zero-indexed: the first character is at index 0.
// The last character is at index string.length - 1, where string.length is the total number of characters.
// Example: For "hello" (length 5), 'h' is at index 0, 'o' is at index 4 (5 - 1).

// For Loop Concept (Repeated for Context):
// A for loop is used for fixed iterations with three components:
// 1. Initialization: Sets the counter (e.g., i = 0).
// 2. Condition: Checks if the loop should continue (e.g., i < string.length).
// 3. Update: Modifies the counter (e.g., i += 1).

// Context for Tasks:
// Assume a variable 'text' with the string "hello world this is john doe" (length 27).
// - First character 'h' is at index 0.
// - Last character 'e' is at index 26 (27 - 1).
// Each task uses a for loop to iterate over the string, leveraging zero-based indexing.

// Task 1: Print Only Vowels in the String
// Goal: Use a for loop to iterate over the string and print only the vowel characters (a, e, i, o, u, case-sensitive).

// Task 2: Count Spaces in the String
// Goal: Use a for loop to count the number of space characters in the string and print the total.

// Task 3: Print Characters at Even Indices
// Goal: Use a for loop to print characters at even-numbered indices (e.g., 0, 2, 4, ..., 26).

// Task 4: Reverse the String
// Goal: Use a for loop to iterate over the string from the last index (string.length - 1) to 0 and print each character to form the reversed string.

// Task 5: Print Every Second Character
// Goal: Use a for loop to print every second character of the string, starting from index 0 (e.g., indices 0, 2, 4, ...).
