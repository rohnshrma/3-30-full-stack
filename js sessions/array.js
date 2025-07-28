// Arrays in JavaScript are reference data types, meaning they store a reference to the memory location of the data
// They are used to store multiple values (of similar or different data types) in a single variable
// Syntax: [item1, item2, ...]

// Declare an array 'fruits' containing strings
var fruits = ["apple", "banana", "cherry", "dragonfruit"];

// Declare an array 'marks' containing numbers
var marks = [35, 22, 434, 33, 2, 4, 3, 4, 23, 34, 23, 3, 33];

// Declare an array 'kunal' containing mixed data types, including a nested array
var kunal = ["Kunal", "Male", 21, true, ["html", "css", "js"]];

// Check if 'fruits' and an empty array [] have the same type ("object" for arrays in JavaScript)
// console.log(typeof fruits === typeof []); // Commented out; would print: true

// Access the element at index 3 in 'fruits' (zero-based indexing)
// console.log(fruits[3]); // Commented out; would print: "dragonfruit"

// Access the nested array at index 4 in 'kunal', then access its element at index 2
// console.log(kunal[4][2]); // Commented out; would print: "js"

// --- Array Methods ---

// push(): Adds one or more elements to the end of an array and returns the new length
fruits.push("kiwi"); // Append "kiwi" to 'fruits'
console.log(fruits); // Prints: ["apple", "banana", "cherry", "dragonfruit", "kiwi"]

// unshift(): Adds one or more elements to the start of an array and returns the new length
fruits.unshift("litchi"); // Prepend "litchi" to 'fruits'
console.log(fruits); // Prints: ["litchi", "apple", "banana", "cherry", "dragonfruit", "kiwi"]

// shift(): Removes the first element from an array and returns the removed element
fruits.shift(); // Remove "litchi" from the start
console.log(fruits); // Prints: ["apple", "banana", "cherry", "dragonfruit", "kiwi"]

// pop(): Removes the last element from an array and returns the removed element
fruits.pop(); // Remove "kiwi" from the end
console.log(fruits); // Prints: ["apple", "banana", "cherry", "dragonfruit"]

// slice(start, end): Returns a new array containing elements from index 'start' (inclusive) to 'end' (exclusive)
// Does not modify the original array
console.log(marks.slice(2, 8)); // Prints: [434, 33, 2, 4, 3, 4] (elements from index 2 to 7)

// at(index): Returns the element at the specified index; supports negative indices to count from the end
console.log(marks.at(0)); // Prints: 35 (first element)
console.log(marks.at(-1)); // Prints: 33 (last element)

// splice(start, deleteCount, item1, item2, ...): Modifies an array by removing, replacing, or adding elements
// Syntax: splice(start, deleteCount, newItem1, newItem2, ...)
// Returns an array of deleted elements

// Example 1: Insert without deletion (Commented out)
// marks.splice(2, 0, 1000000); // At index 2, delete 0 elements, insert 1000000
// Would modify 'marks' to: [35, 22, 1000000, 434, 33, 2, 4, 3, 4, 23, 34, 23, 3, 33]

// Example 2: Delete and insert (Commented out)
// marks.splice(2, 1, 1000000, 123); // At index 2, delete 1 element (434), insert 1000000 and 123
// Would modify 'marks' to: [35, 22, 1000000, 123, 33, 2, 4, 3, 4, 23, 34, 23, 3, 33]
// console.log(marks); // Commented out; would print modified array

// ================================
// Task 1: Add Elements to Ends
// Add one element to the start and one to the end of an array using unshift() and push().
// Example: For array ["a", "b"], add "x" at start and "y" at end, output ["x", "a", "b", "y"].
// Instructions: Use unshift() to add an element at the start and push() to add an element at the end. Log the modified array.
// Test with array ["cat", "dog"].

// Task 2: Remove Elements from Ends
// Remove the first and last elements of an array using shift() and pop(), and return the removed elements.
// Example: For array [1, 2, 3, 4], remove first and last, output removed: [1, 4], array: [2, 3].
// Instructions: Use shift() to remove the first element, store it, use pop() to remove the last element, store it, and log both the removed elements and the modified array.
// Test with array [10, 20, 30, 40, 50].

// Task 3: Extract Middle Slice
// Extract a portion of an array using slice() based on given start and end indices.
// Example: For array [1, 2, 3, 4, 5] with start=1, end=4, output [2, 3, 4].
// Instructions: Use slice(start, end) to extract elements from the array. Log the resulting array. Ensure the original array is unchanged.
// Test with array [5, 10, 15, 20, 25, 30] and start=2, end=5.

// Task 4: Insert Elements with Splice
// Insert multiple elements at a specific index without deleting any elements using splice().
// Example: For array ["a", "b", "c"] at index 1, insert "x", "y", output ["a", "x", "y", "b", "c"].
// Instructions: Use splice(index, 0, item1, item2, ...) to insert elements at the given index. Log the modified array.
// Test with array ["red", "blue"] at index 1, insert "green", "yellow".

// Task 5: Replace Elements with Splice
// Replace a portion of an array with new elements using splice().
// Example: For array [1, 2, 3, 4] at index 1, delete 2 elements, insert 10, 20, output [1, 10, 20, 4].
// Instructions: Use splice(index, deleteCount, item1, item2, ...) to delete and insert elements. Log the modified array and the array of deleted elements.
// Test with array [5, 15, 25, 35, 45] at index 2, delete 2, insert 100, 200.

// Task 6: Access Edge Elements with At
// Retrieve the first and last elements of an array using at().
// Example: For array ["p", "q", "r", "s"], output first: "p", last: "s".
// Instructions: Use at(0) for the first element and at(-1) for the last element. Log both elements.
// Test with array [100, 200, 300, 400, 500].

// Task 7: Combine Push and Pop
// Add elements to an array using push(), then remove one using pop(), and track changes.
// Example: For array [1, 2], push 3, 4, then pop(), output array: [1, 2, 3], removed: 4.
// Instructions: Use push() to add two elements, then pop() to remove the last one. Log the modified array and the removed element.
// Test with array ["x", "y"].

// Task 8: Combine Unshift and Shift
// Add elements to the start of an array using unshift(), then remove one using shift(), and track changes.
// Example: For array [1, 2], unshift 3, 4, then shift(), output array: [4, 1, 2], removed: 3.
// Instructions: Use unshift() to add two elements at the start, then shift() to remove the first one. Log the modified array and the removed element.
// Test with array ["m", "n"].

// Task 9: Extract Last Three Elements with Slice
// Use slice() to extract the last three elements of an array, regardless of its length.
// Example: For array [1, 2, 3, 4, 5], output [3, 4, 5].
// Instructions: Use slice(-3) to get the last three elements. Log the resulting array. Handle cases where the array has fewer than three elements.
// Test with array [10, 20, 30, 40, 50] and [1, 2].

// Task 10: Remove and Insert with Splice
// Remove a specific number of elements from an array at a given index using splice(), then insert one new element at the same index.
// Example: For array [1, 2, 3, 4, 5] at index 2, delete 2 elements, insert 10, output [1, 2, 10, 5].
// Instructions: Use splice(index, deleteCount, newItem) to remove elements and insert a new one. Log the modified array and the array of deleted elements.
// Test with array [100, 200, 300, 400, 500] at index 1, delete 3, insert 999.

// Define an array 'marks' containing a list of numbers
var marks = [23, 24, 15, 30, 45, 2, 423, 4, 2334];

// Initialize a variable 'sum' to store the cumulative total, starting at 0
var sum = 0;

// Loop through each index of the 'marks' array, from 0 to length - 1
for (var i = 0; i < marks.length; i += 1) {
  sum += marks[i]; // Add the current element (marks[i]) to 'sum'
}

// Log the sum of all elements in 'marks' to the console
console.log(sum); // Output: 2940 (23 + 24 + 15 + 30 + 45 + 2 + 423 + 4 + 2334)

// Log a message to indicate the start of examples using higher-order functions
console.log("Higher order functions"); // Output: Higher order functions

// Higher-order functions are functions that take other functions as arguments or return functions
// Examples include forEach, map, sort, reduce, some, every, etc.

// forEach iterates over each element in an array, executing a callback function, but returns nothing
// Initialize 'sum' to 0 (overwrites previous 'sum' value)
var sum = 0;

// Iterate over each element in 'marks', with 'mark' as the current element
marks.forEach((mark) => {
  sum += mark; // Add the current element to 'sum'
});

// Log the sum calculated using forEach
console.log(sum); // Output: 2940 (same as the for loop result)

// Initialize an empty array 'sq' to store squared values
var sq = [];

// Loop through each index of 'marks'
for (var i = 0; i < marks.length; i += 1) {
  sq.push(marks[i] ** 2); // Square the current element and push it to 'sq'
}

// Log the array of squared values
console.log(sq); // Output: [529, 576, 225, 900, 2025, 4, 178929, 16, 5447556]

// Use forEach to square each element in 'marks' and append to 'sq'
marks.forEach((mark) => sq.push(mark ** 2)); // Iterate over 'marks', square each element, and push to 'sq'

// Log the 'sq' array, which now contains the original squares plus a new set of squares
console.log(sq); // Output: [529, 576, 225, 900, 2025, 4, 178929, 16, 5447556, 529, 576, 225, 900, 2025, 4, 178929, 16, 5447556]

// Use map to create a new array by doubling each element in 'marks'
var doubles = marks.map((mark) => {
  return mark * 2; // Return the doubled value for each element
});

// The following line is commented out, so 'doubles' is not logged
// console.log(doubles); // Would output: [46, 48, 30, 60, 90, 4, 846, 8, 4668]

// Define an array 'names' containing strings with mixed case
var names = ["rohAn", "joHn", "naKul", "kuNal", "arJun", "suMit"];

// Use map to create a new array where each name has its first letter capitalized and the rest lowercase
var res = names.map(
  (name) => name[0].toUpperCase() + name.slice(1).toLowerCase() // For each 'name':
  // name[0].toUpperCase() gets the first character and capitalizes it (e.g., 'r' -> 'R')
  // name.slice(1).toLowerCase() gets the rest of the string (from index 1) and converts it to lowercase
  // Concatenate the two parts to form the formatted name
);

// Log the resulting array of formatted names
console.log(res); // Output: ["Rohan", "John", "Nakul", "Kunal", "Arjun", "Sumit"]

// Initialize an empty array to store numbers divisible by both 3 and 5
var div_bt_3_and_5 = [];

// Use forEach to iterate over 'marks' and find numbers divisible by both 3 and 5
marks.forEach((mark) => {
  if (mark % 3 === 0 && mark % 5 === 0) {
    // Check if the current number is divisible by both 3 and 5
    div_bt_3_and_5.push(mark); // If true, push the number to 'div_bt_3_and_5'
  }
});

// Log the array of numbers divisible by both 3 and 5
console.log(div_bt_3_and_5); // Output: [15, 30, 45]

// Use filter to create a new array containing only numbers divisible by both 3 and 5
var res = marks.filter((mark) => mark % 5 === 0 && mark % 3 === 0); // Filter 'marks':
// The callback returns true for elements divisible by both 3 and 5 (using modulo operator)
// Only elements that return true are included in the new array

// Log the filtered array
console.log(res); // Output: [15, 30, 45]

// Define an array 'nums' containing a list of numbers
var nums = [2, 4, 6, 8, 10, 13];

// Use every to check if all elements in 'nums' are even
var areEvens = nums.every((num) => num % 2 === 0); // Returns true only if every element satisfies the condition
// For each 'num', check if it is divisible by 2 (i.e., num % 2 === 0)
// Since 13 is odd, 'every' returns false

// Use some to check if at least one element in 'nums' is even
var areSomeEvens = nums.some((num) => num % 2 === 0); // Returns true if at least one element satisfies the condition
// Since most numbers (2, 4, 6, 8, 10) are even, 'some' returns true

// Log the results of 'every' and 'some'
console.log(areEvens); // Output: false (because not all numbers are even)
console.log(areSomeEvens); // Output: true (because some numbers are even)

//====================== tasks

// Define new arrays for the tasks
var scores = [85, 92, 78, 95, 88, 65, 72, 90, 81, 99];
var fruits = ["Apple", "banana", "ORANGE", "Mango", "kiwi", "PINEAPPLE"];

// Task 1: Sum of Scores Above 80
// Calculate the sum of all scores in the `scores` array that are greater than 80 using a `for` loop.
// Expected output: 540 (85 + 92 + 95 + 88 + 90 + 81 + 99)

// Task 2: Count Scores Above 90 with `forEach`
// Use `forEach` to count how many scores in `scores` are above 90.
// Expected output: 3

// Task 3: Percentage Scores with `map`
// Use `map` to create a new array where each score in `scores` is converted to a percentage (multiply by 100 and append '%').
// Expected output: ["8500%", "9200%", "7800%", "9500%", "8800%", "6500%", "7200%", "9000%", "8100%", "9900%"]

// Task 4: Increase Scores by 5 with `for` Loop
// Create an array where each score in `scores` is increased by 5 using a `for` loop.
// Expected output: [90, 97, 83, 100, 93, 70, 77, 95, 86, 104]

// Task 5: Filter Scores Below 70
// Use `filter` to create an array of scores from `scores` that are below 70.
// Expected output: [65]

// Task 6: Collect Scores Divisible by 3 with `forEach`
// Use `forEach` to create an array of scores from `scores` that are divisible by 3.
// Expected output: [78, 72, 81, 99]

// Task 7: Add 'Fruit: ' Prefix with `map`
// Use `map` to create an array where each fruit in `fruits` has the prefix "Fruit: " added.
// Expected output: ["Fruit: Apple", "Fruit: banana", "Fruit: ORANGE", "Fruit: Mango", "Fruit: kiwi", "Fruit: PINEAPPLE"]

// Task 8: Check for Scores Above 95
// Use `some` to check if any score in `scores` is above 95.
// Expected output: true

// Task 9: Check if All Fruits Have More Than 3 Characters
// Use `every` to check if all fruits in `fruits` have more than 3 characters.
// Expected output: true

// Task 10: Halve Scores Below 80 with `map`
// Use `map` to create an array where scores below 80 in `scores` are halved, and others remain unchanged.
// Expected output: [85, 92, 39, 95, 88, 32.5, 36, 90, 81, 99]

// Task 11: Filter Fruits Starting with 'M'
// Use `filter` to create an array of fruits from `fruits` that start with the letter 'M' (case-insensitive).
// Expected output: ["Mango"]

// Task 12: Sum of Scores Ending in 5 with `forEach`
// Calculate the sum of scores in `scores` that end in 5 (e.g., 85, 95) using `forEach`.
// Expected output: 180

// Task 13: Alternate Case Fruits with `map`
// Use `map` to create an array where each fruit in `fruits` alternates case (e.g., 'Apple' becomes 'aPpLe').
// Expected output: ["aPpLe", "bAnAnA", "oRaNgE", "mAnGo", "kIwI", "pInEaPpLe"]

// Task 14: Filter Scores Between 70 and 90
// Use `filter` to create an array of scores from `scores` that are between 70 and 90 (inclusive).
// Expected output: [85, 78, 88, 72, 81]

// Task 15: Check for Perfect Square Scores
// Use `some` to check if any score in `scores` is a perfect square (e.g., 81 = 9²).
// Expected output: true

// Task 16: Append '!' to Fruits with `map`
// Use `map` to create an array where each fruit in `fruits` has an exclamation mark appended.
// Expected output: ["Apple!", "banana!", "ORANGE!", "Mango!", "kiwi!", "PINEAPPLE!"]

// Task 17: Count Scores Divisible by 10 with `forEach`
// Use `forEach` to count how many scores in `scores` are divisible by 10.
// Expected output: 1

// Task 18: Check if All Scores Are Even
// Use `every` to check if all scores in `scores` are even.
// Expected output: false

// Task 19: Filter Fruits with Even Length
// Use `filter` to create an array of fruits from `fruits` whose names have an even number of characters.
// Expected output: ["Apple", "Mango", "kiwi"]

// Task 20: Multiply Scores by Index with `map`
// Use `map` to create an array where each score in `scores` is multiplied by its index in the array.
// Expected output: [0, 92, 156, 285, 352, 325, 432, 630, 648, 891]

// reduce : return a single value

// Create a list of numbers called 'marks'
var marks = [23, 1, 23, 43, 4, 2, 3, 34, 80, 67, 45, 88, 90, 100];

// Show the whole list in the console
console.log(marks); // Output: [23, 1, 23, 43, 4, 2, 3, 34]

// Use 'reduce' to add all numbers in the list and get one final number
// 'reduce' uses a function with two parts:
// - acc (accumulator): Keeps the running total
// - cv (current value): The number being added in each step
// Since we didn't give a starting value, 'reduce' uses the first number (23) as 'acc'
// and starts adding from the second number (1)
var x = marks.reduce((acc, cv) => {
  // Show the current 'acc' and 'cv' to understand what's happening
  console.log("acc", acc, "cv", cv);

  // Add 'acc' and 'cv', and return the result for the next step
  return acc + cv;
});

// Show the final sum
console.log(x); // Output: 133

//  2. when the value of acc is specified explicitly

// Show the whole list in the console
console.log(marks); // Output: [23, 1, 23, 43, 4, 2, 3, 34]

// Use 'reduce' to add all numbers in the list and get one final number
// The '0' at the end sets the starting total to 0
// So, 'acc' starts at 0, and 'cv' starts with the first number (23)
var x = marks.reduce((acc, cv) => {
  // Show the current 'acc' and 'cv' to understand what's happening
  console.log("acc", acc, "cv", cv);

  // Add 'acc' and 'cv', and return the result for the next step
  return acc + cv;
}, 0);

// Show the final sum
console.log(x); // Output: 133

// Declare a variable 'maxi' and set it to the first element of the 'marks' array (assumes array has at least one element)
// This variable will store the largest number found as we loop through the array
var maxi = marks[0];

// Use the forEach method to loop through each element in the 'marks' array
// forEach takes a function that runs for each element; 'mark' is the current element in each iteration
// The arrow function syntax '=> ' is a concise way to define the function
marks.forEach((mark) => {
  // Check if the current element 'mark' is greater than the current maximum 'maxi'
  if (mark > maxi) {
    // If true, update 'maxi' to the current 'mark' because we found a larger value
    maxi = mark;
  }
  // If 'mark' is not greater than 'maxi', do nothing and continue to the next element
});

// Output the final value of 'maxi' to the console, which is the largest number in the array
console.log(maxi);

// Declare a variable 'max' to store the maximum value found using the reduce method
// The reduce method processes the array to produce a single value (here, the largest number)
// It takes a callback function with two parameters: 'largest' (the accumulator, or running maximum) and 'cv' (current value)
// The second argument to reduce, 'marks[0]', sets the initial value of 'largest'
var max = marks.reduce((largest, cv) => {
  // Check if the current value 'cv' is greater than the current maximum 'largest'
  if (cv > largest) {
    // If true, return 'cv' as the new maximum for the next iteration of reduce
    // The commented line 'largest = cv' is unnecessary because returning 'cv' updates the accumulator
    return cv;
  } else {
    // If 'cv' is not greater, return 'largest' to keep it as the maximum for the next iteration
    // The commented line 'largest = largest' is redundant since returning 'largest' achieves the same
    return largest;
  }
}, marks[0]); // Initialize the accumulator 'largest' with the first element of the array

// Output the final value of 'max' to the console, which is the largest number in the array
console.log(max);

// Declare a variable 'mini' and set it to the first element of the 'marks' array
// This variable will store the smallest number found as we loop through the array
var mini = marks[0];

// Use the forEach method to loop through each element in the 'marks' array
// 'mark' represents the current element in each iteration
marks.forEach((mark) => {
  // Check if the current element 'mark' is less than the current minimum 'mini'
  if (mark < mini) {
    // If true, update 'mini' to the current 'mark' because we found a smaller value
    mini = mark;
  }
  // If 'mark' is not less than 'mini', do nothing and continue to the next element
});

// Output the final value of 'mini' to the console, which is the smallest number in the array
console.log(mini);

// Declare a variable 'min' to store the minimum value found using the reduce method
// The reduce method will find the smallest number by comparing each element
// The callback function takes 'smallest' (the accumulator, or running minimum) and 'cv' (current value)
var min = marks.reduce((smallest, cv) => {
  // Check if the current value 'cv' is less than the current minimum 'smallest'
  if (cv < smallest) {
    // If true, return 'cv' as the new minimum for the next iteration
    // The commented line 'smallest = cv' is unnecessary because returning 'cv' updates the accumulator
    return cv;
  } else {
    // If 'cv' is not less, return 'smallest' to keep it as the minimum for the next iteration
    // The commented line 'smallest = smallest' is redundant since returning 'smallest' achieves the same
    return smallest;
  }
}, marks[0]); // Initialize the accumulator 'smallest' with the first element of the array

// Output the final value of 'min' to the console, which is the smallest number in the array
console.log(min);

// Filter numbers greater than or equal to 60 (representing passing scores).
// Map these numbers to their squared values (e.g., for a math-related transformation).
// Use reduce to calculate the sum of the squared values.

// Define a variable 'res' to store the result of the chained operations on the 'marks' array
// 'marks' is assumed to be an array of numbers representing student scores
var res = marks
  // filter: Creates a new array with elements that pass the test in the provided function
  // Here, it keeps only scores >= 60 (representing passing scores)
  // Arrow function (mark) => mark > 60 checks if each score is >= 60
  .filter((mark) => mark >= 60)
  // map: Creates a new array by applying the provided function to each element
  // Here, it squares each filtered score (e.g., 70 becomes 4900) for a math-related transformation
  // Arrow function (mark) => mark ** 2 uses the exponentiation operator (**) to square the score
  .map((mark) => mark ** 2)
  // reduce: Combines all elements into a single value using the provided function
  // Here, it sums the squared scores, starting with an initial value of 0
  // Arrow function (acc, cv) => { return acc + cv; } adds the current value (cv) to the accumulator (acc)
  .reduce((acc, cv) => {
    return acc + cv;
  }, 0);

// Log the result to the console to display the sum of squared passing scores
console.log(res);

// Define a variable 'greater_than_60' to store the filtered array of passing scores
// filter: Creates a new array with scores >= 60
// The function uses a traditional function body with 'return' for clarity
var greater_than_60 = marks.filter((mark) => {
  return mark >= 60; // Only include scores >= 60 (passing scores)
});

// Define a variable 'squares' to store the array of squared passing scores
// map: Creates a new array by squaring each score in 'greater_than_60'
// The function uses a traditional function body with 'return' for clarity
var squares = greater_than_60.map((mark) => {
  return mark ** 2; // Square each score using the exponentiation operator (**)
});

// Define a variable 'total' to store the sum of the squared scores
// reduce: Sums all squared scores, starting with an initial value of 0
// The function uses a traditional function body with 'return' for clarity
var total = squares.reduce((acc, cv) => {
  return acc + cv; // Add the current squared score (cv) to the accumulator (acc)
}, 0);

// Log the result to the console to display the sum of squared passing scores
console.log(total);
