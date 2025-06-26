// how to check the data type of a value / variable
// The 'typeof' operator returns the data type of a value or variable as a string
// console.log(typeof "hello world"); // Outputs: "string" - checks type of string literal
// console.log(typeof 123); // Outputs: "number" - checks type of number literal
// console.log(typeof undefined); // Outputs: "undefined" - checks type of undefined value

// a sequence of characters (alpha, num, special symbols and whitespace) enclosed in single, double quotes or backticks.
// Strings can be defined using single quotes ('), double quotes ("), or backticks (`)

var txt = "hello world this is john donny lee.";
// Declares variable 'txt' and assigns it a string value
// var txt1 = "hello world this is john doe.";
// Declares variable 'txt1' with a string (commented out)
// var txt2 = `hello world this is john doe.`;
// Declares variable 'txt2' with a string using backticks (commented out)

// // find out the length of a string (number of characters)
// console.log(txt.length);
// Outputs: 35 - the 'length' property returns the number of characters in the string

// note: input collected using prompt is always of type "String", but can be changed to a supported data type.
// The 'prompt' function collects user input as a string

// var age = parseInt(prompt("Enter your age :"));
// Prompts user for input, converts it to an integer using parseInt, stores in 'age' (commented out)
// console.log(typeof age, age);
// Outputs: the type of 'age' (would be "number" if uncommented) and its value (commented out)

// indexing: counting starting from 0, used to access characters of a string
// String characters are accessed using their index (position) starting from 0

// 1 2 3 4 5  : normal counting used for length
// h e l l o
// 0 1 2 3 4 : positive indexing
// Comments explaining indexing: first character is at index 0, last at index (length - 1)

console.log(txt[0]);
// Outputs: "h" - accesses the first character of 'txt' using index 0
console.log(txt[txt.length - 1]);
// Outputs: "." - accesses the last character of 'txt' using index (length - 1)
