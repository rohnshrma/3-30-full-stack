// Functions are reusable blocks of code designed to perform a specific task.
// They only execute when called, promoting code modularity and reusability.

// ================ Function declaration

// Function declaration syntax:
// function functionName(parameters) {
//   // Code block to be executed
// }

// Declaring a function named 'greeting' with no parameters.
function greeting() {
  // console.log outputs text to the console, useful for debugging or displaying information.
  console.log("Hello world");
}

// Calling the 'greeting' function multiple times.
// Each call executes the function's code, printing "Hello world" to the console.
greeting(); // Output: Hello world
greeting(); // Output: Hello world
greeting(); // Output: Hello world
greeting(); // Output: Hello world

// Declaring a function named 'calcBmi' to calculate Body Mass Index (BMI).
function calcBmi() {
  // Prompt displays a dialog box for user input; parseInt converts the input string to an integer.
  var weight = parseInt(prompt("Enter your weight in kg's : "));
  // Prompt for height; parseFloat converts the input string to a floating-point number for decimal precision.
  var height = parseFloat(prompt("Enter your height in meter's : "));
  // Calculate BMI using the formula: weight (kg) / (height (m) squared).
  var bmi = weight / height ** 2;
  // Conditional statements (if, else if, else) evaluate BMI to determine weight category.
  if (bmi < 18.5) console.log(`Underweight as your bmi is ${bmi}`);
  // Template literals (`) allow embedding expressions like ${bmi} for string interpolation.
  else if (bmi >= 18.5 && bmi <= 24.9)
    console.log(`Normal weight as your bmi is ${bmi}`);
  // Logical AND (&&) checks if BMI is within the normal range (18.5 to 24.9).
  else if (bmi >= 25 && bmi <= 29.9)
    console.log(`Over weight as your bmi is ${bmi}`);
  else console.log(`Obesse as your bmi is ${bmi}`);
  // Note: "Obesse" is a typo; it should be "Obese".
}

// Calling 'calcBmi' multiple times; each call prompts the user for input and calculates BMI.
calcBmi(); // Prompts for weight and height, then logs the BMI category.
calcBmi(); // Repeats the process.
calcBmi(); // Repeats the process.
calcBmi(); // Repeats the process.

// Declaring a function named 'addition' with two parameters: x and y.
// Parameters are placeholders for values passed when the function is called.
function addition(x, y) {
  // Outputs the sum of x and y to the console.
  // JavaScript is loosely typed, so x and y can be numbers or strings.
  console.log(x + y);
}

// Calling 'addition' with arguments (actual values).
// Arguments are the real values passed to the function's parameters.
addition(23, 45); // Output: 68 (numeric addition)
addition("john", "doe"); // Output: "johndoe" (string concatenation due to + operator with strings)

// Declaring another 'calcBmi' function with parameters for weight and height.
// This version takes direct arguments instead of prompting the user.
function calcBmi(weight, height) {
  // Calculate BMI using the same formula as before.
  var bmi = weight / height ** 2;
  // Same conditional logic to categorize BMI, identical to the previous 'calcBmi' function.
  if (bmi < 18.5) console.log(`Underweight as your bmi is ${bmi}`);
  else if (bmi >= 18.5 && bmi <= 24.9)
    console.log(`Normal weight as your bmi is ${bmi}`);
  else if (bmi >= 25 && bmi <= 29.9)
    console.log(`Over weight as your bmi is ${bmi}`);
  else console.log(`Obesse as your bmi is ${bmi}`);
  // Again, "Obesse" is a typo; it should be "Obese".
}

// Calling 'calcBmi' with specific weight and height arguments.
// No user prompts; values are passed directly.
calcBmi(100, 1.8); // BMI = 100 / (1.8^2) ≈ 30.86, Output: Obesse as your bmi is 30.864197530864196
calcBmi(80, 1.6); // BMI = 80 / (1.6^2) ≈ 31.25, Output: Obesse as your bmi is 31.249999999999996
calcBmi(56, 1.87); // BMI = 56 / (1.87^2) ≈ 16.01, Output: Underweight as your bmi is 16.013705767833703
calcBmi(120, 1.6); // BMI = 120 / (1.6^2) ≈ 46.88, Output: Obesse as your bmi is 46.87499999999999

// Task 1: Calculate Area of a Rectangle
// Create two functions to calculate the area of a rectangle given its length and width.
// The first function should use prompt to get length and width from the user, calculate the area (length * width), and output it to the console.
// The second function should accept length and width as parameters and output the area.
// Call each function at least twice with different inputs.

// Task 2: Determine Age Group
// Write two functions to classify a person's age group based on their age.
// The first function should use prompt to get the age and classify it into "Child" (0–12), "Teen" (13–19), "Adult" (20–59), or "Senior" (60+).
// The second function should accept age as a parameter and output the same categories.
// Call each function at least twice with different inputs.

// Task 3: Convert Temperature
// Create two functions to convert temperature from Celsius to Fahrenheit.
// The first function should prompt the user for a Celsius temperature, convert it to Fahrenheit (F = C * 9/5 + 32),
// and output the result.
// The second function should accept a Celsius temperature as a parameter and output the Fahrenheit equivalent.
// Call each function at least twice with different values.

function tempConverter() {
  let temp = parseInt(prompt("Enter temperature in celsius : "));
  let res = (temp * 9) / 5 + 32;
  console.log(res);
}

function tempConverter(temp) {
  console.log((temp * 9) / 5 + 32);
}

// Task 4: Check Even or Odd
// Write two functions to determine if a number is even or odd.
// The first function should prompt the user for a number and output "Even" or "Odd" based on divisibility by 2.
// The second function should accept a number as a parameter and output the same.
// Call each function at least twice with different inputs.

// Task 5: Calculate Simple Interest
// Create two functions to calculate simple interest given principal, rate, and time.
// The first function should prompt the user for principal (dollars), rate (percentage), and time (years), calculate interest (SI = (principal * rate * time) / 100), and output the result.
// The second function should accept principal, rate, and time as parameters and output the interest.
// Call each function at least twice with different inputs.

// Task 6: Determine Grade
// Write two functions to assign a letter grade based on a numeric score (0–100).
// The first function should prompt the user for a score and output a grade: A (90–100), B (80–89), C (70–79), D (60–69), F (below 60).
// The second function should accept a score as a parameter and output the same grade.
// Call each function at least twice with different inputs.

// Task 7: Calculate Distance
// Create two functions to calculate the distance traveled given speed and time.
// The first function should prompt the user for speed (km/h) and time (hours), calculate distance (distance = speed * time), and output the result.
// The second function should accept speed and time as parameters and output the distance.
// Call each function at least twice with different inputs.

function calcDist() {
  let speed = parseInt(prompt("Enter speed (km/h) : "));
  let time = parseInt(prompt("Enter time (hours) : "));
  let distance = speed * time;
  console.log(distance);
}

function calcDist(speed, time) {
  console.log(speed * time);
}

// Task 8: Check Positive, Negative, or Zero
// Write two functions to determine if a number is positive, negative, or zero.
// The first function should prompt the user for a number and output "Positive", "Negative", or "Zero".
// The second function should accept a number as a parameter and output the same.
// Call each function at least twice with different inputs.

// Task 9: Calculate Circle Area
// Create two functions to calculate the area of a circle given its radius.
// The first function should prompt the user for the radius, calculate the area (area = 3.14 * radius * radius), and output the result.
// The second function should accept radius as a parameter and output the area.
// Call each function at least twice with different inputs.

// Task 10: Determine Leap Year
// Write two functions to check if a year is a leap year.
// The first function should prompt the user for a year and output "Leap Year"
// if divisible by 4 (and not by 100 unless also by 400), else "Not a Leap Year".
// The second function should accept a year as a parameter and output the same.
// Call each function at least twice with different inputs.
//================= return keyword
// The `return` keyword is used inside a function to:
// 1. Stop the function from running further (terminate it).
// 2. Send a value back to the place where the function was called.

// Defining a function named `add` that takes two parameters: `a` and `b`.
// A function is like a recipe that performs a specific task. Here, it adds two numbers.
function add(a, b) {
  return a + b; // Adds `a` and `b` and sends the result back to where the function is called.
  // Any code after `return` won’t run because `return` stops the function.
}

// Calling the `add` function with arguments 3 and 23, and storing the result in a variable `res`.
// Variables are like labeled boxes that hold data (like numbers, text, etc.).
let res = add(3, 23); // The function `add(3, 23)` returns 26 (3 + 23), so `res` holds 26.

// Printing the value of `res` to the console (a tool to display output in JavaScript).
// `console.log` is like writing a message to a screen for debugging or showing results.
console.log("response => ", res); // Outputs: response => 26

// ==================== function expressions
// A function expression is a way to define a function by assigning it to a variable.
// Unlike regular functions (like `add` above), function expressions are not "hoisted" (can’t be used before they’re defined).

// // anonymous (without name) function
// An anonymous function is a function without a name, often used in function expressions.

// 1. Assigning an anonymous function to a variable named `sum`.
// The function takes two parameters, `a` and `b`, and logs their sum.
let sum = function (a, b) {
  // `console.log` here uses a template literal (text with embedded variables) to display a message.
  // `${a}` and `${b}` insert the values of `a` and `b` into the text.
  console.log(`the sum of ${a} and ${b} is ${a + b}`);
  // This function doesn’t use `return`, so it doesn’t send any value back; it just prints.
};

// Calling the `sum` function with arguments 12 and 34.
// This runs the function, which prints the sum to the console.
sum(12, 34); // Outputs: the sum of 12 and 34 is 46

// // 2. Using a function as a callback function
// A callback function is a function passed as an argument to another function.
// The receiving function can call the callback function later.

// Defining a function named `calcAge` that calculates a person’s age.
// It uses `prompt` to ask the user for their birth year (a pop-up input box in browsers).
function calcAge() {
  // `new Date().getFullYear()` gets the current year (e.g., 2025).
  // `prompt("Enter year of birth")` asks the user to type their birth year (e.g., "1990").
  // `parseInt` converts the user’s input (a string) into a number.
  return new Date().getFullYear() - parseInt(prompt("Enter year of birth"));
  // Returns the age (e.g., 2025 - 1990 = 35).
}

// The commented-out code below shows how to call `calcAge` and store the result.
// It’s commented out (using `//`), so it won’t run, but I’ll explain it for clarity.
// let age = calcAge(); // Calls `calcAge`, asks for birth year, calculates age, and stores it in `age`.
// console.log("your age =>", age); // Prints the age (e.g., your age => 35).

// Defining a function named `lifeSpan` that takes two parameters:
// - `average_age`: The expected lifespan (e.g., 90 years).
// - `ageFn`: A function (the callback) that will calculate the user’s age.
let lifeSpan = function (average_age, ageFn) {
  // Calls the callback function `ageFn` (which is `calcAge`) and stores the result in `age`.
  let age = ageFn(); // Runs `calcAge`, which prompts for birth year and returns the age.
  // Calculates years left by subtracting the current age from the average lifespan.
  let years_left = average_age - age;
  // Prints the years left to the console.
  console.log("years left : ", years_left); // E.g., if age is 35 and average_age is 90, outputs: years left : 55
};

// Calling the `lifeSpan` function with 90 (average lifespan) and `calcAge` (the callback function).
// `calcAge` is passed as an argument but not called here (no `()` after `calcAge`).
lifeSpan(90, calcAge); // Prompts for birth year, calculates age, and prints years left.

// The comment below just labels the concept of a callback function for clarity.