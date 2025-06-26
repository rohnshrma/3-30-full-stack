// =================== output

// ✅
// console.log() is a method that outputs data to the console, useful for debugging or displaying information
// console.log("hello world"); // Prints the string "hello world" to the console
// console.log(23 ** 23); // Calculates 23 raised to the power of 23 and prints the result to the console

// ❌
// window.alert() is a browser-specific method that displays a popup alert with a message
// window.alert("hello world"); // Would display a popup alert with "hello world" (commented out, so it won't run)
// alert() is a shorthand for window.alert(), also displays a popup alert
// alert("hello world"); // Would display a popup alert with "hello world" (commented out, so it won't run)

// document.write() writes content directly to the HTML document, often used for simple output
// document.write("<h1>Hello world</h1>"); // Would write "<h1>Hello world</h1>" to the HTML document (commented out, so it won't run)

// ==================== input

// prompt() is a browser-specific method that displays a dialog box for user input, with an optional default value
// prompt("Enter your name : ", "john doe"); // Would show a prompt asking for a name with "john doe" as the default (commented out, so it won't run)

// ==================== variables
// Variables are named containers for storing data, with names called identifiers
// They are called variables because their values can change during program execution

// How to create a variable ?
// Variables are declared using "var", "let", or "const" followed by a variable name

// var age; // Declares a variable named "age" using "var" (no value assigned yet, so it's undefined)
// age = 23; // Assigns the value 23 to the variable "age" (initialization)
// console.log(age); // Prints the value of "age" (23) to the console

// var yourage = 23; // Declares and initializes a variable named "yourage" with the value 23 in one step

// ==================== data types

// primitive data types
// Primitive data types are basic building blocks in JavaScript, holding simple values

// - String : A sequence of characters enclosed in single quotes, double quotes, or backticks
// Examples of strings: "hello@1223", 'hello@1223', `hello@1223` (all represent text data)

// - Number : Represents numeric values, including integers and floating-point numbers
// ---- int : Whole numbers, e.g., 0123456789 (note: leading zeros are ignored in JavaScript)
// ---- float : Decimal numbers, e.g., 1.234

// - Boolean | Bool : Represents logical values, either true or false
// Examples: true, false (used for logical conditions or flags)

// undefined : Represents the unintentional absence of a value (default for uninitialized variables)
// var x; // Declares a variable "x" without assigning a value, so it is undefined
// console.log(x); // Prints "undefined" to the console because "x" has no value

// null : Represents the intentional absence of a value
// var y = null; // Declares a variable "y" and explicitly assigns it the value null
// console.log(y); // Prints "null" to the console, indicating an intentional empty value

// var x = 23; // Declares and initializes variable "x" with the number 23
// var y = x; // Copies the value of "x" (23) to variable "y" (y now holds 23)
// console.log("x =>", x, "y =>", y); // Prints "x => 23 y => 23" to the console

// x = 100; // Reassigns the value of "x" to 100 (y remains unchanged because numbers are primitive and copied by value)
// console.log("x =>", x, "y =>", y); // Prints "x => 100 y => 23" to the console
