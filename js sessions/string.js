// TOPIC: Checking Data Type with 'typeof'
// The 'typeof' operator returns the data type of a value or variable as a string
console.log(typeof "hello world"); // Outputs: "string" - checks type of string literal
console.log(typeof 123); // Outputs: "number" - checks type of number literal
console.log(typeof undefined); // Outputs: "undefined" - checks type of undefined value

// TOPIC: String Definition
// A string is a sequence of characters (letters, numbers, symbols, whitespace) enclosed in single quotes ('), double quotes ("), or backticks (`)
var txt = "hello world this is john donny lee."; // Declares variable 'txt' and assigns it a string value
// var txt1 = "hello world this is john doe."; // Declares variable 'txt1' with a string using single quotes (commented out)
// var txt2 = `hello world this is john doe.`; // Declares variable 'txt2' with a string using backticks (commented out)

// TOPIC: String Length
// The 'length' property returns the number of characters in a string
// console.log(txt.length); // Outputs: 35 - counts all characters, including spaces and punctuation (commented out)

// TOPIC: Input with 'prompt' and Type Conversion
// The 'prompt' function collects user input as a string, which can be converted to other data types
// var age = parseInt(prompt("Enter your age :")); // Prompts user for input, converts input string to an integer using parseInt, stores in 'age' (commented out)
// console.log(typeof age, age); // Outputs: type of 'age' ("number" if uncommented) and its value (commented out)

// TOPIC: String Indexing
// Indexing starts at 0 for the first character; negative indexing counts from the end (-1 for last character)
// Example string: "hello"
// Positive indices: 0(h), 1(e), 2(l), 3(l), 4(o)
// Negative indices: -5(h), -4(e), -3(l), -2(l), -1(o)
// console.log(txt[0]); // Outputs: "h" - accesses the first character of 'txt' using index 0 (commented out)
// console.log(txt[txt.length - 1]); // Outputs: "." - accesses the last character of 'txt' using index (length - 1) (commented out)

// TOPIC: String Concatenation
// Concatenation combines strings using the "+" operator
// var fName = prompt("Enter your first name : "); // Prompts user for first name and stores as string in 'fName' (commented out)
// var lName = prompt("Enter your last name : "); // Prompts user for last name and stores as string in 'lName' (commented out)
// var age = parseInt(prompt("Enter your age : ")); // Prompts user for age, converts to integer, stores in 'age' (commented out)
// console.log(typeof age, typeof fName, typeof lName); // Outputs: types of 'age' ("number"), 'fName' ("string"), 'lName' ("string") (commented out)
// console.log("Hello world my name is " + fName + " " + lName + " and i am " + age + " years old."); // Concatenates strings and variables to form a sentence (commented out)

// TOPIC: Template Literals
// Template literals use backticks (`) to create strings and embed variables/expressions using ${}
// console.log(`Hello world my name is ${fName} ${lName} and i am ${age * 2} years old.`); // Outputs: concatenated string with embedded variables and expression (age * 2) (commented out)

// TOPIC: String Methods
var txt = "Hello World"; // Declares variable 'txt' with string "Hello World"

// TOPIC: charAt Method
// charAt(index) returns the character at the specified positive index
var chr = txt.charAt(6); // Gets character at index 6 of 'txt' ("W")
console.log(chr); // Outputs: "W" - prints the character stored in 'chr'
console.log(txt.charAt(6)); // Outputs: "W" - directly gets character at index 6
console.log(txt.charAt(-1)); // Outputs: "" (empty string) - charAt does not support negative indices, returns empty string

// TOPIC: at Method
// at(index) returns the character at the specified index (supports both positive and negative indices)
console.log(txt.at(6)); // Outputs: "W" - gets character at index 6
console.log(txt.at(-1)); // Outputs: "d" - gets last character using negative index -1

// TOPIC: concat Method
// concat() combines the string with other strings and returns a new string
var res = txt.concat(" this is ", "john doe."); // Concatenates 'txt' with " this is " and "john doe."
console.log(res); // Outputs: "Hello World this is john doe." - prints the concatenated string

// TOPIC: toLowerCase Method
// toLowerCase() returns a new string with all characters in lowercase
console.log(txt.toLowerCase()); // Outputs: "hello world" - converts 'txt' to lowercase

// TOPIC: toUpperCase Method
// toUpperCase() returns a new string with all characters in uppercase
console.log(txt.toUpperCase()); // Outputs: "HELLO WORLD" - converts 'txt' to uppercase

// TOPIC: slice Method
// slice(start, end) returns a substring from start index (inclusive) to end index (exclusive)
console.log(txt.slice(3, 8)); // Outputs: "lo Wo" - extracts characters from index 3 to 7

// TOPIC: trim, trimStart, trimEnd Methods
// trim() removes leading and trailing whitespace from a string
console.log("          hello world           ".trim()); // Outputs: "hello world" - removes all leading/trailing spaces
// trimStart() removes leading whitespace
console.log("          hello world           ".trimStart()); // Outputs: "hello world           " - removes only leading spaces
// trimEnd() removes trailing whitespace
console.log("          hello world           ".trimEnd()); // Outputs: "          hello world" - removes only trailing spaces

// TOPIC: String Length (Repeated)
// The 'length' property returns the number of characters in 'txt'
console.log(txt.length); // Outputs: 11 - counts characters in "Hello World"

// TOPIC: padEnd Method
// padEnd(targetLength, padString) pads the string at the end to reach targetLength using padString
console.log(txt.padEnd(21, "-")); // Outputs: "Hello World----------" - pads 'txt' to length 21 with "-"

// TOPIC: padStart Method
// padStart(targetLength, padString) pads the string at the start to reach targetLength using padString
console.log(txt.padStart(21, "-")); // Outputs: "----------Hello World" - pads 'txt' to length 21 with "-"

// TOPIC: Chaining padEnd and padStart
// Methods can be chained to apply multiple operations
console.log(txt.padEnd(21, "*").padStart(31, "-")); // Outputs: "-----Hello World************" - pads end to 21 with "*", then start to 31 with "-"

// TOPIC: includes Method
// includes(substring) returns true if the substring is found in the string, false otherwise (case-sensitive)
console.log(txt.includes("w")); // Outputs: false - "w" (lowercase) is not in "Hello World"
console.log(txt.includes("W")); // Outputs: true - "W" (uppercase) is in "Hello World"

// TOPIC: indexOf Method
// indexOf(substring, start) returns the index of the first occurrence of substring, starting from start index; returns -1 if not found
console.log(txt.indexOf("l")); // Outputs: 2 - first "l" is at index 2
console.log(txt.indexOf("l", 4)); // Outputs: 3 - first "l" after index 4 is at index 3

// TOPIC: Finding Multiple Occurrences with indexOf
// Uses indexOf to find successive occurrences of a substring
var first = txt.indexOf("l"); // Gets index of first "l" (2)
var second = txt.indexOf("l", first + 1); // Gets index of next "l" after index 2 (3)
var third = txt.indexOf("l", second + 1); // Gets index of next "l" after index 3 (returns -1, no more "l")
console.log(third); // Outputs: -1 - no more "l" found after index 3

// TOPIC: lastIndexOf Method
// lastIndexOf(substring, end) returns the index of the last occurrence of substring, searching backward from end index
console.log(txt.lastIndexOf("l", 7)); // Outputs: 3 - last "l" before or at index 7

// ASSIGNMENT: Practice Tasks
// Task 1: Data Types and typeof
// Create three variables with different data types (e.g., string, number, boolean). Use the 'typeof' operator to print their types to the console.

// Task 2: String Creation and Length
// Declare a string variable using backticks (`) with at least 20 characters. Print its length to the console.

// Task 3: User Input and Type Conversion
// Use prompt() to collect a user's birth year as input. Convert the input to a number using parseInt(). Print the type of the variable and calculate the user's age based on the current year (2025).

// Task 4: String Indexing
// Using the string "JavaScript", print the first character, the last character (using both positive and negative indexing), and the character at index 4.

// Task 5: String Concatenation
// Create two string variables for a city and a country. Concatenate them using the "+" operator to form a sentence like "I live in [city], [country]." and print it.

// Task 6: Template Literals
// Using the city and country variables from Task 5, create a template literal to print the same sentence as Task 5, but include the length of the city name in the sentence (e.g., "I live in [city], [country], and my city name has [length] characters.").

// Task 7: String Methods - charAt and at
// Using the string "Programming", print the character at index 3 using both charAt() and at(). Also, use at() with a negative index to print the last character.

// Task 8: String Methods - Case Conversion
// Create a string with mixed case (e.g., "HeLLo WoRLd"). Use toLowerCase() and toUpperCase() to print the string in all lowercase and all uppercase.

// Task 9: String Methods - slice
// Using the string "I love to code", extract and print the substring "love" using the slice() method.

// Task 10: String Methods - trim
// Create a string with leading and trailing spaces (e.g., "   JavaScript is fun!   "). Use trim(), trimStart(), and trimEnd() to print the string with all spaces removed, only leading spaces removed, and only trailing spaces removed.

// Task 11: String Methods - padStart and padEnd
// Using the string "Code", pad it to a length of 10 with "*" at the start and "#" at the end. Print the result.

// Task 12: String Methods - includes
// Using the string "Learning JavaScript is awesome", check if it includes the substrings "Java" and "java". Print the results and explain why they differ.

// Task 13: String Methods - indexOf and lastIndexOf
// Using the string "banana", find and print the index of the first and last occurrence of the letter "a". Use indexOf() for the first and lastIndexOf() for the last.

// Task 14: Combining Methods
// Create a string with spaces and mixed case (e.g., "   JavaScript Coding   "). Trim the spaces, convert it to uppercase, and pad the result to a length of 20 with "=" on both sides. Print the final string.

// Task 15: Creative Challenge
// Use prompt() to collect a user's first name, last name, and favorite number. Create a template literal that includes their full name (concatenated), the number doubled, and a substring of their first name (first 3 characters). Convert the substring to uppercase and pad it to length 10 with "-". Print the result.
