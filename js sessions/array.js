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
