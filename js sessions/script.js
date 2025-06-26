// =================== output

// ✅
// console.log() is a method that outputs data to the console, useful for debugging or displaying information
console.log("hello world"); // Outputs the string "hello world" to the console
console.log(23 ** 23); // Calculates 23 raised to the power of 23 (exponentiation) and outputs the result to the console

// ❌
// window.alert() is a browser-specific method that displays a popup alert with a message
window.alert("hello world"); // Would display a popup with "hello world" in a browser (commented out, so it won't run)
// alert() is a shorthand for window.alert(), also displays a popup alert
alert("hello world"); // Would display a popup with "hello world" in a browser (commented out, so it won't run)

// document.write() writes content directly to the HTML document, often used for simple output
document.write("<h1>Hello world</h1>"); // Would write "<h1>Hello world</h1>" to the HTML document (commented out, so it won't run)

// ==================== input

// prompt() is a browser-specific method that displays a dialog box for user input, with an optional default value
// prompt("Enter your name : ", "john doe"); // Would show a prompt with "Enter your name :" and default value "john doe" (commented out, so it won't run)

// ==================== variables
// Variables are named containers for storing data, with names called identifiers
// They are called variables because their values can change during program execution

// How to create a variable ?
// Variables are declared using "var", "let", or "const" followed by a variable name

var age; // Declares a variable named "age" using "var" (no value assigned, so it's undefined)
age = 23; // Assigns the value 23 to the variable "age" (initializes it)
console.log(age); // Outputs 23 to the console, the current value of "age"

var yourage = 23; // Declares and initializes a variable "yourage" with the value 23 in one step

// variable naming conventions

// rules
// 1. No Space
// var my name; // ❌ Invalid: variable names cannot contain spaces
// var myname; // ✅ Valid: no spaces, single word

// 2. a variable name cannot start with a number but can include or end with a number
// var 1name; // ❌ Invalid: variable name cannot start with a number
// var na1me; // ✅ Valid: number in the middle of the name
// var name1; // ✅ Valid: number at the end of the name

// 3. a variable name cannot include or end with a special symbol except "_" and "$"
// var #name; // ❌ Invalid: # is not an allowed special character
// var _name_; // ✅ Valid: underscore (_) is allowed
// var $name_; // ✅ Valid: dollar sign ($) is allowed

// suggestions
// 1. start variable name with a lowercase letter
// 2. in case of multiword variable name use:
// ------- camelCasing : helloWorldMyNameIs (first word lowercase, subsequent words capitalized)
// ------- snake_casing : hello_world_my_name_is (words separated by underscores)

// ==================== data types

// primitive data types
// Primitive data types are basic building blocks in JavaScript, holding simple values

// - String : A sequence of characters enclosed in single quotes, double quotes, or backticks
// Examples of strings: "hello@1223", 'hello@1223', `hello@1223` (all valid string formats representing text)

// - Number : Represents numeric values, including integers and floating-point numbers
// ---- int : Whole numbers, e.g., 0123456789 (note: leading zeros are ignored in JavaScript)
// ---- float : Decimal numbers, e.g., 1.234

// - Boolean | Bool : Represents logical values, either true or false
// Examples: true, false (used for logical conditions or flags)

// undefined : Represents the unintentional absence of a value (default for uninitialized variables)
var x; // Declares a variable "x" without assigning a value (defaults to undefined)
console.log(x); // Outputs "undefined" to the console because "x" has no value

// null : Represents the intentional absence of a value
var y = null; // Declares a variable "y" and explicitly assigns it the value null
console.log(y); // Outputs "null" to the console, indicating an intentional empty value

var x = 23; // Declares and initializes variable "x" with the number 23
var y = x; // Copies the value of "x" (23) to variable "y" (y now holds 23)
console.log("x =>", x, "y =>", y); // Outputs "x => 23 y => 23" to the console

x = 100; // Reassigns the value of "x" to 100 (y remains 23 because numbers are primitive and copied by value)
console.log("x =>", x, "y =>", y); // Outputs "x => 100 y => 23" to the console
