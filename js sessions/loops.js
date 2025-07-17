// // Loop Concepts:
// // Loops are used to repeatedly execute a block of code based on a condition or for a specific number of iterations.
// // 1. for loop: Used for fixed iterations where the number of iterations is known or can be determined.
// // 2. while loop: Used for both fixed and non-fixed iterations; continues as long as a condition is true.
// // 3. do while loop: Similar to while, but guarantees at least one execution; used for both fixed and non-fixed iterations.

// // Iteration and Iterables:
// // Iteration is the process of looping over a sequence of elements.
// // Iterables are objects that can be looped over, such as:
// // - String: A sequence of characters (e.g., "hello").
// // - Array: A collection of elements (e.g., [1, 2, 3]).

// // For Loop Structure (Fixed Iteration):
// // A for loop consists of three parts:
// // 1. Initialization: Sets the starting point (e.g., a counter variable).
// // 2. Condition: A test that must be true for the loop to continue.
// // 3. Update: Modifies the counter variable after each iteration.

// // Example Context for Water Level:
// // Simulating a water level increasing from 0 ml to 1000 ml in steps of 100 ml.
// // 1. Initialization: Start at 0 ml.
// // 2. Condition: Continue until water_level reaches 1000 ml.
// // 3. Update: Increase water_level by 100 ml each iteration.

// // First Code Block: Water Level Loop
// for (var water_level = 0; water_level <= 1000; water_level += 100) {
//   // Initialize water_level to 0; loop while water_level is <= 1000; increment water_level by 100 each iteration
//   console.log(water_level); // Output the current value of water_level to the console (e.g., 0, 100, 200, ..., 1000)
// }

// // Second Code Block: Counting Up from 1 to 10
// for (var i = 1; i <= 10; i += 1) {
//   // Initialize i to 1; loop while i is <= 10; increment i by 1 each iteration
//   console.log(i); // Output the current value of i to the console (e.g., 1, 2, 3, ..., 10)
// }

// // Third Code Block: Counting Down from 100 to 1
// for (var i = 100; i >= 1; i -= 1) {
//   // Initialize i to 100; loop while i is >= 1; decrement i by 1 each iteration
//   console.log(i); // Output the current value of i to the console (e.g., 100, 99, 98, ..., 1)
// }

// // Fourth Code Block: Finding Even Numbers from 100 to 1
// // Goal: Identify and print all even numbers in the range 100 to 1.
// for (var i = 100; i >= 1; i -= 1) {
//   // Initialize i to 100; loop while i is >= 1; decrement i by 1 each iteration
//   if (i % 2 === 0) {
//     // Check if i is even by testing if i divided by 2 has no remainder
//     console.log(i); // Output the current value of i to the console if it is even (e.g., 100, 98, 96, ..., 2)
//   }
// }

// // =========================

// // // String Indexing Concept:
// // Strings in JavaScript are zero-indexed, meaning the first character is at index 0.
// // The last character is at index string.length - 1 because:
// // - string.length gives the total number of characters.
// // - Since indexing starts at 0, the last character's index is one less than the length.
// // Example: For the string "hello" (length 5), indices are:
// // - 'h' at index 0
// // - 'e' at index 1
// // - 'l' at index 2
// // - 'l' at index 3
// // - 'o' at index 4 (length 5 - 1 = 4)

// // For Loop Concept (Repeated from Context):
// // A for loop is used for fixed iterations with three components:
// // 1. Initialization: Sets the starting value of the counter (e.g., i = 0).
// // 2. Condition: Checks if the loop should continue (e.g., i < string.length).
// // 3. Update: Modifies the counter after each iteration (e.g., i += 1).

// // Context for the Code:
// // The variable 'text' holds the string "hello world this is john doe".
// // The loop iterates over the string to print each character, leveraging zero-based indexing.

// // Code with Indexing Explanation
// var text = "hello world this is john doe"; // Declare a variable 'text' with a string of 27 characters (including spaces)
// // For this string, length is 27:
// // - First character 'h' is at index 0.
// // - Last character 'e' is at index 26 (27 - 1).

// // Commented-Out Code: Manual Character Access
// // console.log(text[0]) // Would print 'h' (first character at index 0)
// // console.log(text[1]) // Would print 'e' (second character at index 1)
// // console.log(text[2]) // Would print 'l' (third character at index 2)
// // console.log(text[3]) // Would print 'l' (fourth character at index 3)
// // console.log(text[4]) // Would print 'o' (fifth character at index 4)

// // For Loop: Iterating Over the String
// for (var i = 0; i < text.length; i += 1) {
//   // Initialize i to 0 (first index); continue while i is less than 27 (text.length); increment i by 1 each iteration
//   console.log(text[i]); // Output the character at index i (e.g., i=0 prints 'h', i=1 prints 'e', ..., i=26 prints 'e' (last character))
// }
// // Why i < text.length? This ensures the loop stops before i equals 27, as index 27 is out of bounds (last valid index is 26).

// //========== tasks

// // String Indexing Concept (Repeated for Context):
// // Strings in JavaScript are zero-indexed: the first character is at index 0.
// // The last character is at index string.length - 1, where string.length is the total number of characters.
// // Example: For "hello" (length 5), 'h' is at index 0, 'o' is at index 4 (5 - 1).

// // For Loop Concept (Repeated for Context):
// // A for loop is used for fixed iterations with three components:
// // 1. Initialization: Sets the counter (e.g., i = 0).
// // 2. Condition: Checks if the loop should continue (e.g., i < string.length).
// // 3. Update: Modifies the counter (e.g., i += 1).

// // Context for Tasks:
// // Assume a variable 'text' with the string "hello world this is john doe" (length 27).
// // - First character 'h' is at index 0.
// // - Last character 'e' is at index 26 (27 - 1).
// // Each task uses a for loop to iterate over the string, leveraging zero-based indexing.
// // Task 1: Print Only Vowels in the String
// // Goal: Use a for loop to iterate over the string and print only the vowel characters (a, e, i, o, u, case-sensitive).

// // Declare a variable 'text' and assign it the string "hello world this is john doe" converted to lowercase to ensure case consistency
// var text = "hello world this is john doe".toLowerCase();
// // Output "Task 1" to the console to indicate the start of Task 1
// console.log("Task 1");

// // Start a for loop; initialize index 'i' to 0; continue while 'i' is less than the length of 'text'; increment 'i' by 1 each iteration
// for (var i = 0; i < text.length; i += 1) {
//   // Check if the character at index 'i' in 'text' is a vowel (a, e, i, o, or u) using multiple OR conditions
//   if (
//     text[i] === "a" ||
//     text[i] === "e" ||
//     text[i] === "i" ||
//     text[i] === "o" ||
//     text[i] === "u"
//   ) {
//     // If the character is a vowel, output it to the console
//     console.log(text[i]);
//   }
// }

// // Alternative approach for Task 1 using includes() method
// // Start a for loop; initialize index 'i' to 0; continue while 'i' is less than the length of 'text'; increment 'i' by 1
// for (var i = 0; i < text.length; i += 1) {
//   // Check if the character at index 'i' in 'text' is included in the string "aeiou"
//   if ("aeiou".includes(text[i])) {
//     // If the character is a vowel, output it to the console
//     console.log(text[i]);
//   }
// }

// // Task 2: Count Spaces in the String
// // Goal: Use a for loop to count the number of space characters in the string and print the total.

// // Output "Task 2" to the console to indicate the start of Task 2
// console.log("Task 2");
// // Declare a variable 'spaces' and initialize it to 0 to keep track of the number of spaces
// var spaces = 0;

// // Start a for loop; initialize index 'i' to 0; continue while 'i' is less than the length of 'text'; increment 'i' by 1
// for (var i = 0; i < text.length; i += 1) {
//   // Check if the character at index 'i' in 'text' is a space
//   if (text[i] === " ") {
//     // If the character is a space, increment 'spaces' by 1
//     spaces += 1;
//   }
// }

// // Output the total number of spaces to the console
// console.log(spaces);

// // Task 3: Print Characters at Even Indices
// // Goal: Use a for loop to print characters at even-numbered indices (e.g., 0, 2, 4, ..., 26).

// // Output "Task 3" to the console to indicate the start of Task 3
// console.log("Task 3");
// // Start a for loop; initialize index 'i' to 0; continue while 'i' is less than the length of 'text'; increment 'i' by 1
// for (var i = 0; i < text.length; i += 1) {
//   // Check if the index 'i' is even by using the modulo operator (i % 2 === 0)
//   if (i % 2 === 0) {
//     // If the index is even, output the character at index 'i' to the console
//     console.log(text[i]);
//   }
// }

// // Task 4: Reverse the String
// // Goal: Use a for loop to iterate over the string from the last index (string.length - 1) to 0 and print each character to form the reversed string.

// // Output "Task 4" to the console to indicate the start of Task 4
// console.log("Task 4");

// // Declare a variable 'rev' and initialize it to an empty string to store the reversed string
// var rev = "";

// // Start a for loop; initialize index 'i' to the last index of 'text' (length - 1); continue while 'i' is greater than or equal to 0; decrement 'i' by 1
// for (var i = text.length - 1; i >= 0; i -= 1) {
//   // Append the character at index 'i' in 'text' to the 'rev' string
//   rev += text[i];
// }

// // Output the reversed string to the console
// console.log(rev);

// // Task 5: Print Every Second Character
// // Goal: Use a for loop to print every second character of the string, starting from index 0 (e.g., indices 0, 2, 4, ...).

// // Output "Task 5" to the console to indicate the start of Task 5
// console.log("Task 5");
// // Start a for loop; initialize index 'i' to 0; continue while 'i' is less than the length of 'text'; increment 'i' by 1
// for (var i = 0; i < text.length; i += 1) {
//   // Check if the index 'i' is even by using the modulo operator (i % 2 === 0)
//   if (i % 2 === 0) {
//     // If the index is even, output the character at index 'i' to the console
//     console.log(text[i]);
//   }
// }

// // =============== while loop fixed iteration

// // Initialize variable 'i' to 1 for the while loop
// var i = 1;
// // Start a while loop; continue while 'i' is less than or equal to 10
// while (i <= 10) {
//   // Output the current value of 'i' to the console
//   console.log(i);
//   // Increment 'i' by 1 to avoid an infinite loop
//   i += 1;
// }

// // Third Code Block: Counting Down from 100 to 1
// // Start a for loop; initialize 'i' to 100; continue while 'i' is greater than or equal to 1; decrement 'i' by 1
// for (var i = 100; i >= 1; i -= 1) {
//   // Output the current value of 'i' to the console (e.g., 100, 99, 98, ..., 1)
//   console.log(i);
// }

// // Initialize variable 'i' to 100 for the while loop
// var i = 100;
// // Start a while loop; continue while 'i' is greater than or equal to 1
// while (i >= 1) {
//   // Output the current value of 'i' to the console with a label "i =>"
//   console.log("i =>", i);
//   // Decrement 'i' by 1 to avoid an infinite loop
//   i -= 1;
// }

// // Initialize variable 'spaces' to 0 to count spaces in the string
// var spaces = 0;
// // Initialize variable 'i' to 0 for the while loop
// var i = 0;
// // Start a while loop; continue while 'i' is less than the length of 'text'
// while (i < text.length) {
//   // Check if the character at index 'i' in 'text' is a space
//   if (text[i] === " ") {
//     // If the character is a space, increment 'spaces' by 1
//     spaces += 1;
//   }
//   // Increment 'i' by 1 to move to the next character
//   i += 1;
// }

// // Output the total number of spaces to the console with a label "total space : "
// console.log("total space : " + spaces);

// Task 1: Sum of Even Numbers from 1 to 50
// // Goal: Calculate and print the sum of all even numbers from 1 to 50 (inclusive).
// // Using for Loop:
// // Initialize a variable to store the sum.
// // Loop from 1 to 50.
// // Check if the current number is even (divisible by 2).
// // Add even numbers to the sum.
// // Print the final sum.
// // Using while Loop:
// // Initialize a variable to store the sum and a counter starting at 1.
// // Continue looping while the counter is less than or equal to 50.
// // Check if the counter is even, and if so, add it to the sum.
// // Increment the counter.
// // Print the final sum.

// Task 2: Print Multiples of 3 from 3 to 30
// // Goal: Print all multiples of 3 between 3 and 30 (inclusive).
// // Using for Loop:
// // Loop from 3 to 30.
// // Check if the current number is divisible by 3 (optional, as the loop can increment by 3 directly).
// // Print the number.
// // Using while Loop:
// // Initialize a counter to 3.
// // Continue looping while the counter is less than or equal to 30.
// // Print the counter.
// // Increment the counter by 3.

// Task 3: Count Numbers Divisible by 5 from 1 to 100
// // Goal: Count how many numbers from 1 to 100 (inclusive) are divisible by 5 and print the count.
// // Using for Loop:
// // Initialize a counter variable to 0.
// // Loop from 1 to 100.
// // Check if the current number is divisible by 5.
// // Increment the counter if it is.
// // Print the final count.
// // Using while Loop:
// // Initialize a counter variable to 0 and a number variable to 1.
// // Continue looping while the number is less than or equal to 100.
// // Check if the number is divisible by 5, and if so, increment the counter.
// // Increment the number.
// // Print the final count.

// Task 4: Print Squares of Numbers from 1 to 10
// // Goal: Print the square of each number from 1 to 10 (e.g., 1, 4, 9, ..., 100).
// // Using for Loop:
// // Loop from 1 to 10.
// // Calculate the square of the current number.
// // Print the square.
// // Using while Loop:
// // Initialize a counter to 1.
// // Continue looping while the counter is less than or equal to 10.
// // Calculate and print the square of the counter.
// // Increment the counter.

// Task 5: Find First Number Divisible by Both 6 and 8 Greater Than 50
// // Goal: Find and print the first number greater than 50 that is divisible by both 6 and 8.
// // Using for Loop:
// // Loop starting from 51 to a reasonable upper limit (e.g., 1000).
// // Check if the current number is divisible by both 6 and 8 (can use modulo or LCM logic).
// // Print the first number that satisfies the condition and exit the loop.
// // Using while Loop:
// // Initialize a number to 51.
// // Continue looping while the number is less than a reasonable limit (e.g., 1000).
// // Check if the number is divisible by both 6 and 8.
// // If it is, print the number and exit the loop; otherwise, increment the number.

// Task 6: Calculate Product of Odd Numbers from 1 to 20
// // Goal: Calculate and print the product of all odd numbers from 1 to 20 (inclusive).
// // Using for Loop:
// // Initialize a variable to store the product, set to 1.
// // Loop from 1 to 20.
// // Check if the current number is odd (not divisible by 2).
// // Multiply the product by the current number if it’s odd.
// // Print the final product.
// // Using while Loop:
// // Initialize a variable to store the product, set to 1, and a counter starting at 1.
// // Continue looping while the counter is less than or equal to 20.
// // Check if the counter is odd, and if so, multiply the product by the counter.
// // Increment the counter.
// // Print the final product.

// Task 7: Print Numbers from 50 to 25 Divisible by 5
// // Goal: Print all numbers from 50 down to 25 (inclusive) that are divisible by 5.
// // Using for Loop:
// // Loop from 50 down to 25.
// // Check if the current number is divisible by 5.
// // Print the number if it is divisible by 5.
// // Using while Loop:
// // Initialize a counter to 50.
// // Continue looping while the counter is greater than or equal to 25.
// // Check if the counter is divisible by 5, and if so, print it.
// // Decrement the counter.

// Task 8: Sum of Numbers from 1 to 100 Divisible by 3 or 7
// // Goal: Calculate and print the sum of all numbers from 1 to 100 (inclusive) that are divisible by 3 or 7.
// // Using for Loop:
// // Initialize a variable to store the sum, set to 0.
// // Loop from 1 to 100.
// // Check if the current number is divisible by 3 or 7 (using modulo and OR condition).
// // Add the number to the sum if it meets the condition.
// // Print the final sum.
// // Using while Loop:
// // Initialize a variable to store the sum, set to 0, and a counter starting at 1.
// // Continue looping while the counter is less than or equal to 100.
// // Check if the counter is divisible by 3 or 7, and if so, add it to the sum.
// // Increment the counter.
// // Print the final sum.

// Task 9: Count Numbers from 1 to 50 Divisible by 4 but Not by 6
// // Goal: Count how many numbers from 1 to 50 (inclusive) are divisible by 4 but not by 6, and print the count.
// // Using for Loop:
// // Initialize a counter variable to 0.
// // Loop from 1 to 50.
// // Check if the current number is divisible by 4 and not divisible by 6.
// // Increment the counter if the condition is met.
// // Print the final count.
// // Using while Loop:
// // Initialize a counter variable to 0 and a number variable to 1.
// // Continue looping while the number is less than or equal to 50.
// // Check if the number is divisible by 4 and not divisible by 6, and if so, increment the counter.
// // Increment the number.
// // Print the final count.

// Task 10: Print First 10 Multiples of 9 Starting from 9
// // Goal: Print the first 10 multiples of 9 starting from 9 (i.e., 9, 18, 27, ..., 90).
// // Using for Loop:
// // Initialize a counter to track the number of multiples printed, starting at 1.
// // Loop from 1 to 10 (or use a number-based loop to generate multiples).
// // Calculate the multiple (9 * counter) and print it.
// // Using while Loop:
// // Initialize a counter to 1.
// // Continue looping while the counter is less than or equal to 10.
// // Calculate the multiple (9 * counter) and print it.
// // Increment the counter.
// Declare an array named 'marks' containing a list of numbers
// var marks = [23, 12, 33, 34, 111111, 3423, 13, 42];

// // Declare an empty array 'evens' to store even numbers (currently commented out)
// // var evens = [];

// // --- For Loop Example (Commented Out) ---
// // Purpose: Filter even numbers from 'marks' array into 'evens' array
// // for (var i = 0; i < marks.length; i += 1) {
// //   // 'for' loop syntax: (initialization; condition; update)
// //   // - 'var i = 0': Initialize loop counter 'i' to 0
// //   // - 'i < marks.length': Continue loop while 'i' is less than array length (8 in this case)
// //   // - 'i += 1': Increment 'i' by 1 after each iteration
// //   if (marks[i] % 2 === 0) {
// //     // Check if the current element (marks[i]) is even using modulo (%)
// //     // - Modulo returns the remainder of division; if remainder is 0, the number is even
// //     evens.push(marks[i]);
// //     // If condition is true, append the even number to 'evens' array using push()
// //   }
// // }

// // --- While Loop Example (Commented Out) ---
// // Purpose: Same as above, filter even numbers, but using a 'while' loop
// // var i = 0;
// // // Initialize loop counter 'i' to 0 outside the loop
// // while (i < marks.length) {
// //   // 'while' loop continues as long as condition (i < marks.length) is true
// //   if (marks[i] % 2 === 0) {
// //     // Same condition as above: check if current element is even
// //     evens.push(marks[i]);
// //     // Append even number to 'evens' array
// //   }
// //   i += 1;
// //   // Increment 'i' by 1 to avoid infinite loop and move to next array element
// // }

// // console.log(evens);
// // // Output the 'evens' array to the console (would show [12, 34, 42] if uncommented)

// // --- Sum of Array Elements ---
// // Initialize a variable 'total' to store the sum of all numbers in 'marks'
// var total = 0;

// // Loop through the 'marks' array to calculate the sum
// for (var i = 0; i < marks.length; i += 1) {
//   // Same 'for' loop structure as above
//   total += marks[i];
//   // Add the current element (marks[i]) to 'total'
//   // - Shorthand for: total = total + marks[i]
// }

// // Output the sum of all elements
// console.log(total);
// // Prints: 114691 (sum of 23 + 12 + 33 + 34 + 111111 + 3423 + 13 + 42)

// // Calculate and output the average of the array elements
// console.log(total / marks.length);
// // Prints: 14336.375 (114691 ÷ 8, where 8 is the length of 'marks')

// // --- Find Largest Number in Array ---
// // Initialize 'largest' with the first element of 'marks' as a starting point
// var largest = marks[0];

// // Loop through the array to find the largest number
// for (var i = 0; i < marks.length; i += 1) {
//   // Same 'for' loop structure
//   if (marks[i] > largest) {
//     // Compare current element with 'largest'
//     // If current element is greater, update 'largest'
//     largest = marks[i];
//   }
// }

// // Output the largest number found
// console.log(largest);
// // Prints: 111111 (the largest number in the 'marks' array)

// // ================

// // Task 1: Reverse Array
// // Create a new array containing the elements of a given array in reverse order.
// // Example: For array [1, 2, 3], output [3, 2, 1].
// // Instructions: Create an empty array, use a for loop (iterate from the last index to 0) and a while loop to push elements from the input array in reverse order to the new array.
// // Test with array.

// // Define the input array with elements to reverse
// var nums = [4, 7, 2, 9, 1];
// // Initialize an empty array to store reversed elements
// var rev = [];
// // Set index to the last element of the input array (length - 1)
// var i = nums.length - 1;
// // Loop while index is greater than or equal to 0
// while (i >= 0) {
//   // Add the element at index i to the reversed array
//   rev.push(nums[i]);
//   // Decrease index to move backward through the array
//   i -= 1;
// }
// // Print the reversed array: [1, 9, 2, 7, 4]
// console.log(rev);

// // Task 2: Count Occurrences
// // Count how many times a specific number appears in an array.
// // Example: For array [1, 2, 2, 3, 2] and target number 2, output 3 (since 2 appears three times).
// // Instructions: Create a variable to track the count, iterate through the array using a for loop and a while loop separately, and increment the count when the target number is found.
// // Test with array [4, 7, 2, 9, 2, 2] and target 2.

// // Define the input array to search for target number
// var nums = [4, 7, 2, 9, 2, 2];
// // Initialize a variable to count occurrences of target number (2)
// var count = 0;
// // Set index to start at the beginning of the array
// var i = 0;
// // Loop while index is less than the array length
// while (i < nums.length) {
//   // Check if the current element equals the target number (2)
//   if (nums[i] === 2) {
//     // Increment count if the target number is found
//     count += 1;
//   }
//   // Move to the next index
//   i += 1;
// }
// // Print the number of occurrences of target number: 3
// console.log(count);

// // Task 3: Filter Numbers Greater Than X
// // Create a new array with numbers greater than a given value X.
// // Example: For array [5, 10, 3, 15] and X = 7, output [10, 15].
// // Instructions: Create an empty array, use a for loop and a while loop to iterate through the input array, and push elements greater than X to the new array.
// // Test with array [4, 7, 2, 9, 1] and X = 5.

// // Define the input array to filter
// var nums = [4, 7, 2, 9, 1];
// // Define the threshold value for filtering
// var x = 5;
// // Initialize an empty array to store numbers greater than x
// var res = [];
// // Set index to start at the beginning of the array
// var i = 0;
// // Loop while index is less than the array length
// while (i < nums.length) {
//   // Check if the current element is greater than x
//   if (nums[i] > x) {
//     // Add the element to the result array if it meets the condition
//     res.push(nums[i]);
//   }
//   // Move to the next index
//   i += 1;
// }
// // Print the array of numbers greater than x: [7, 9]
// console.log(res);

// // Task 4: Sum of Odd Numbers
// // Calculate the sum of all odd numbers in an array.
// // Example: For array [1, 2, 3, 4], output 4 (since 1 + 3 = 4).
// // Instructions: Initialize a sum variable to 0, use a for loop and a while loop to iterate through the array, check if each number is odd (number % 2 !== 0), and add odd numbers to the sum.
// // Test with array [4, 7, 2, 9, 1].

// // Define the input array to sum odd numbers
// var nums = [4, 7, 2, 9, 1];
// // Initialize a variable to store the sum of odd numbers
// var total = 0;
// // Set index to start at the beginning of the array
// var i = 0;
// // Loop while index is less than the array length
// while (i < nums.length) {
//   // Check if the current element is odd (not divisible by 2)
//   if (nums[i] % 2 !== 0) {
//     // Add the odd number to the total sum
//     total += nums[i];
//   }
//   // Move to the next index
//   i += 1;
// }
// // Print the sum of odd numbers: 17 (7 + 9 + 1)
// console.log(total);

// // Task 5: Find Smallest Number
// // Find the smallest number in an array.
// // Example: For array [4, 2, 7, 1], output 1.
// // Instructions: Initialize a variable with the first array element, use a for loop and a while loop to iterate through the array, and update the variable if a smaller number is found.
// // Test with array [4, 7, 2, 9, 1].

// // Define the input array to find the smallest number
// var nums = [4, 7, 2, 9, 1];
// // Initialize smallest variable with the first element of the array
// var smallest = nums[0];
// // Set index to start at the beginning of the array
// var i = 0;
// // Loop while index is less than the array length
// while (i < nums.length) {
//   // Check if the current element is smaller than the current smallest
//   if (nums[i] < smallest) {
//     // Update smallest if a smaller number is found
//     smallest = nums[i];
//   }
//   // Move to the next index
//   i += 1;
// }
// // Print the smallest number: 1
// console.log(smallest);

// // Task 6: Double Array Elements
// // Create a new array where each element is double the value of the corresponding element in the input array.
// // Example: For array [1, 2, 3], output [2, 4, 6].
// // Instructions: Create an empty array, use a for loop and a while loop to iterate through the input array, multiply each element by 2, and push the result to the new array.
// // Test with array [4, 7, 2, 9, 1].

// // Define the input array to double its elements
// var nums = [4, 7, 2, 9, 1];
// // Initialize an empty array to store doubled elements
// var doubles = [];
// // Set index to start at the beginning of the array
// var i = 0;
// // Loop while index is less than the array length
// while (i < nums.length) {
//   // Multiply the current element by 2 and add to the doubles array
//   doubles.push(nums[i] * 2);
//   // Move to the next index
//   i += 1;
// }
// // Print the array with doubled elements: [8, 14, 4, 18, 2]
// console.log(doubles);

// // Task 7: Remove Duplicates
// // Create a new array with duplicate elements removed (keep the first occurrence).
// // Example: For array [1, 2, 2, 3, 1], output [1, 2, 3].
// // Instructions: Create an empty array, use a for loop and a while loop to iterate through the input array, and push each element to the new array only if it’s not already present (hint: use includes() or another array to track seen values).
// // Test with array [4, 7, 2, 9, 2, 4].

// // Define the input array with possible duplicates
// var nums = [4, 7, 2, 9, 2, 4];
// // Initialize an empty array to store unique elements
// var uniques = [];
// // Set index to start at the beginning of the array
// var i = 0;
// // Loop while index is less than the array length
// while (i < nums.length) {
//   // Check if the current element is not already in the uniques array
//   if (!uniques.includes(nums[i])) {
//     // Add the element to the uniques array if it’s not a duplicate
//     uniques.push(nums[i]);
//   }
//   // Move to the next index
//   i += 1;
// }
// // Print the array with duplicates removed: [4, 7, 2, 9]
// console.log(uniques);

// // Task 8: Index of First Even Number
// // Find the index of the first even number in an array, or return -1 if no even numbers exist.
// // Example: For array [1, 3, 4, 5], output 2 (index of 4).
// // Instructions: Use a for loop and a while loop to iterate through the array, check if each number is even (number % 2 === 0), and return the index of the first even number found. If none found, return -1.
// // Test with array [4, 7, 2, 9, 1] and [1, 3, 5, 7].

// // Define the input array to find the first even number
// var nums = [4, 7, 2, 9, 1];
// // Set index to start at the beginning of the array
// var i = 0;
// // Initialize result to -1 (default if no even number is found)
// var res = -1;
// // Loop while index is less than the array length
// while (i < nums.length) {
//   // Check if the current element is even (divisible by 2)
//   if (nums[i] % 2 === 0) {
//     // Set result to the current index (first even number found)
//     res = i;
//     // Exit the loop after finding the first even number
//     break;
//   }
//   // Move to the next index
//   i += 1;
// }
// // Print the index of the first even number: 0 (index of 4)
// console.log(res);

// // Task 9: Array Rotation
// // Rotate the elements of an array to the left by one position (first element moves to the end).
// // Example: For array [1, 2, 3, 4], output [2, 3, 4, 1].
// // Instructions: Create a new array, use a for loop and a while loop to iterate through the input array starting from index 1 to push elements, then append the first element at the end.
// // Test with array [4, 7, 2, 9, 1].

// // Define the input array to rotate left by one position
// var nums = [4, 7, 2, 9, 1];
// // Initialize an empty array to store rotated elements
// var res = [];
// // Set index to 1 to start from the second element
// var i = 1;
// // Loop while index is less than the array length
// while (i < nums.length) {
//   // Add elements from index 1 to the end to the result array
//   res.push(nums[i]);
//   // Move to the next index
//   i += 1;
// }
// // Add the first element of the input array to the end of the result
// res.push(nums[0]);
// // Print the rotated array: [7, 2, 9, 1, 4]
// console.log(res);

// // Task 10: Cumulative Sum Array
// // Create a new array where each element is the cumulative sum of the input array up to that index.
// // Example: For array [1, 2, 3], output [1, 3, 6] (1, 1+2, 1+2+3).
// // Instructions: Create an empty array, initialize a sum variable, use a for loop and a while loop to iterate through the input array, add each element to the sum, and push the sum to the new array at each step.
// // Test with array [4, 7, 2, 9, 1].
// // Define the input array to compute cumulative sums
// var nums = [4, 7, 2, 9, 1];
// // Initialize an empty array to store cumulative sums
// var result = [];
// // Initialize a variable to track the running sum
// var sum = 0;
// // Set index to start at the beginning of the array
// var i = 0;
// // Loop while index is less than the array length
// while (i < nums.length) {
//   // Add the current element to the running sum
//   sum += nums[i];
//   // Add the current sum to the result array
//   result.push(sum);
//   // Move to the next index
//   i += 1;
// }
// // Print the original array: [4, 7, 2, 9, 1]
// console.log(nums);
// // Print the cumulative sum array: [4, 11, 13, 22, 23]
// console.log(result);

// break and continue

// for (var i = 1; i <= 10; i += 1) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// var i = 1;
// while (i <= 10) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);

//   i += 1;
// }

// var i = 1;
// while (i <= 10) {
//   if (i === 5) {
//     i += 1;
//     continue;
//   }
//   console.log(i);

//   i += 1;
// }

// non fixed iteration

// var age = parseInt(prompt("Enter your age : "));
// while (age < 18) {
//   age = parseInt(prompt("Enter your age : "));
// }

// console.log(age);

// ============================= assignment
// Task 1: Password Length Validation
// Prompt the user to enter a password. Keep prompting until the password is at least 6 characters long.
// Once valid, display "Password accepted: [password]" in the console.

// Task 2: Positive Number Check
// Ask the user to enter a number. Continue prompting until the number is positive (greater than 0).
// Display "Valid number: [number]" when a positive number is entered.

// Task 3: Even Number Finder
// Use an infinite loop to prompt the user for a number. Exit the loop when the number is even (divisible by 2).
// Display "Even number found: [number]" in the console.

// while (true) {
//   var n = parseInt(prompt("Enter a number : "));
//   if (n % 2 === 0) {
//     console.log("Even number found: ", n);
//     break;
//   }
// }

// Task 4: String Without Spaces
// Prompt the user to enter a string. Keep prompting until the string contains no spaces (use includes(" ") to check).
// Display "Valid string: [string]" when a space-free string is entered.

// Task 5: Array Length Input
// Ask the user to enter comma-separated numbers (e.g., "1,2,3") and split them into an array (use split(",")).
// Continue prompting until the array has at least 5 numbers. Display "Array accepted: [array]".

// Task 6: Vowel Check in String
// Prompt the user for a string. Keep prompting until the string contains at least one vowel (a, e, i, o, u).
// Display "String with vowel: [string]" when a valid string is entered.

// while (true) {
//   var txt = prompt("Enter a string : ").toLowerCase();
//   if (
//     txt.includes("a") ||
//     txt.includes("e") ||
//     txt.includes("i") ||
//     txt.includes("o") ||
//     txt.includes("u")
//   ) {
//     console.log(`String with vowel: ${txt}`);
//     break;
//   }
// }

// Task 7: Number Range Validation
// Ask the user to enter a number. Continue prompting until the number is between 1 and 100 (inclusive).
// Display "Number in range: [number]" in the console.

while (true) {
  var n = parseInt(prompt("Enter a number : "));
  if (n >= 1 && n <= 100) {
    console.log(`Number is in range : ${n}`);
    break;
  } else {
    console.log("Number must be in between 1 - 100.Try Again!");
  }
}

// Task 8: Palindrome Check
// Prompt the user to enter a string. Use an infinite loop and exit when the string is a palindrome
// (reads the same forward and backward, e.g., "radar"). Display "Palindrome found: [string]".

// Task 9: Sum of Numbers
// Ask the user to enter numbers one at a time. Keep prompting until the sum of all entered numbers exceeds 50.
// Display "Sum exceeded 50: [sum]" in the console.

// Task 10: No Digits in String
// Prompt the user for a string. Continue prompting until the string contains no digits (check each character with isNaN()).
// Display "No digits found: [string]" in the console.

// while (true) {
//   let string = prompt("Enter a string : ");
//   let hasDigit = false;

//   for (var i = 0; i < string.length; i += 1) {
//     if (!isNaN(string[i]) && string[i] !== " ") {
//       hasDigit = true;
//       break;
//     }
//   }

//   if (!hasDigit) {
//     console.log(`No Digits Found : ${string}`);
//     break;
//   } else {
//     console.log(`String contains Digits. Try Again.`);
//   }
// }
