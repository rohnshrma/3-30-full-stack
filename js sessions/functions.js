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
// 1. Stop the function from running further (it terminates the function).
// 2. Send a value back to the place where the function was called.

// Defining a function named `add` that takes two parameters: `a` and `b`.
// A function is like a set of instructions you can reuse. This one adds two numbers.
function add(a, b) {
  return a + b; // Adds `a` and `b` (e.g., 3 + 23 = 26) and sends the result back.
  // Any code after `return` won’t run because `return` stops the function.
}

// Calling the `add` function with arguments 3 and 23, and storing the result in a variable `res`.
// Variables are like labeled boxes that hold data (like numbers or text).
let res = add(3, 23); // `add(3, 23)` returns 26, so `res` holds 26.

// Printing the value of `res` to the console (a tool to display output in JavaScript).
// `console.log` is like writing a message to a screen for debugging or showing results.
console.log("response => ", res); // Outputs: response => 26

// ==================== function expressions
// A function expression is when you define a function by assigning it to a variable.
// Unlike regular functions (like `add` above), function expressions aren’t available until they’re defined.

// // anonymous (without name) function
// An anonymous function is a function without a name, often used in function expressions or as callbacks.

// 1. Assigning an anonymous function to a variable named `sum`.
// This function takes two parameters, `a` and `b`, and logs their sum.
let sum = function (a, b) {
  // `console.log` uses a template literal (text with variables inside) to display a message.
  // `${a}` and `${b}` insert the values of `a` and `b` into the text.
  console.log(`the sum of ${a} and ${b} is ${a + b}`);
  // This function doesn’t use `return`, so it just prints and doesn’t send a value back.
};

// Calling the `sum` function with arguments 12 and 34.
// This runs the function, which prints the sum to the console.
sum(12, 34); // Outputs: the sum of 12 and 34 is 46

// // 2. Using a function as a callback function
// A callback function is a function passed as an argument to another function.
// The receiving function can call the callback function later.

// The commented-out code below defines and uses a `calcAge` function.
// It’s commented out (using `//`), so it won’t run, but I’ll explain it for clarity.
// let calcAge = function () {
//   return new Date().getFullYear() - parseInt(prompt("Enter year of birth"));
// };
// This would calculate age by asking for a birth year via a pop-up (`prompt`).

// function calcAge() {
//   return new Date().getFullYear() - parseInt(prompt("Enter year of birth"));
// }
// This is a regular function doing the same thing (not used in the final code).

// var age = calcAge();
// console.log("your age =>", age);
// This would call `calcAge`, store the age, and print it (e.g., your age => 35).

// Defining a function named `lifeSpan` that takes three parameters:
// - `average_age`: The expected lifespan (e.g., 90 years).
// - `yob`: Year of birth (e.g., 1999).
// - `ageFn`: A callback function that calculates the age.
let lifeSpan = function (average_age, yob, ageFn) {
  // Calls the callback function `ageFn` with `yob` as its argument, storing the result in `age`.
  let age = ageFn(yob); // `ageFn(yob)` calculates age (e.g., 2025 - 1999 = 26).
  // Calculates years left by subtracting the age from the average lifespan.
  let years_left = average_age - age; // e.g., 90 - 26 = 64.
  // Prints the years left to the console.
  console.log("years left : ", years_left); // Outputs: years left : 64
};

// Calling `lifeSpan` with an average age of 90, birth year 1999, and an anonymous function.
// The anonymous function calculates age by subtracting the birth year from the current year.
lifeSpan(90, 1999, function (yob) {
  return new Date().getFullYear() - yob; // Returns 2025 - 1999 = 26
}); // Outputs: years left : 64

// Calling `lifeSpan` again with birth year 2004 and another anonymous function.
// Same calculation, but for a different birth year.
lifeSpan(90, 2004, function (yob) {
  return new Date().getFullYear() - yob; // Returns 2025 - 2004 = 21
}); // Outputs: years left : 69

// ==================== arrow functions
// Arrow functions are a shorter way to write function expressions, introduced in modern JavaScript.
// They use `=>` instead of the `function` keyword and have some differences (e.g., no `this` binding).

// 1. Assigning an arrow function to a variable named `subtract`.
// This function takes two parameters, `a` and `b`, and returns their difference.
let subtract = (a, b) => {
  return a - b; // Returns `a` minus `b` (e.g., 12 - 3 = 9).
};

// Calling `subtract` with arguments 12 and 3, storing the result in `dif`.
let dif = subtract(12, 3); // `subtract(12, 3)` returns 9, so `dif` holds 9.

// Printing the value of `dif` to the console.
console.log(dif); // Outputs: 9

// 1.1. Arrow function with exactly one parameter: parentheses can be omitted.
// Defining an arrow function named `greetings` that takes one parameter, `name`.
let greetings = (name) => {
  // Prints a welcome message with the provided name.
  console.log("welcome", name);
};

// Calling `greetings` with the argument "sumit".
greetings("sumit"); // Outputs: welcome sumit

// 1.2. Arrow function with a single return statement: `return` and `{}` can be omitted.
// Defining an arrow function named `sq` that takes one parameter, `n`, and returns its square.
let sq = (n) => n ** 2; // `n ** 2` means `n` raised to the power of 2 (e.g., 2 * 2 = 4).

// Calling `sq` with argument 2, storing the result in `sqres`.
let sqres = sq(2); // `sq(2)` returns 4, so `sqres` holds 4.

// Printing the value of `sqres` to the console.
console.log(sqres); // Outputs: 4

// Defining a function named `yourLifeSpan`, similar to `lifeSpan`.
// It takes three parameters: `average_age`, `yob`, and `ageFn` (a callback).
let yourLifeSpan = function (average_age, yob, ageFn) {
  // Calls the callback function `ageFn` with `yob`, storing the result in `age`.
  let age = ageFn(yob); // `ageFn(yob)` calculates age (e.g., 2025 - 1999 = 26).
  // Calculates years left by subtracting the age from the average lifespan.
  let years_left = average_age - age; // e.g., 90 - 26 = 64.
  // Prints the years left to the console.
  console.log("years left : ", years_left); // Outputs: years left : 64
};

// Calling `yourLifeSpan` with an average age of 90, birth year 1999, and an arrow function.
// The arrow function calculates age by subtracting the birth year from the current year.
yourLifeSpan(90, 1999, (yob) => new Date().getFullYear() - yob); // Returns 2025 - 1999 = 26
// Outputs: years left : 64

// Calling `yourLifeSpan` again with birth year 2001 and another arrow function.
yourLifeSpan(90, 2001, (yob) => new Date().getFullYear() - yob); // Returns 2025 - 2001 = 24
// Outputs: years left : 66

//=============================== tasks

// Task 1: Basic Function with Return
// Concept: Using the `return` keyword to send a value back from a function.
// Instructions: Write a function called `multiply` that takes two numbers (`a` and `b`) as parameters,
// multiplies them, and returns the result. Store the result in a variable and print it.
// Expected Output: Product: 20

// Task 2: Function Expression for Subtraction
// Concept: Creating a function expression with an anonymous function.
// Instructions: Create a function expression assigned to a variable `subtractNumbers` that takes two numbers (`x` and `y`)
// and logs their difference using a template literal (e.g., `The difference of 10 and 3 is 7`).
// Call the function with arguments 10 and 3.
// Expected Output: The difference of 10 and 3 is 7

// Task 3: Arrow Function for Division
// Concept: Using an arrow function with a return statement.
// Instructions: Create an arrow function assigned to a variable `divide` that takes two numbers (`a` and `b`),
// divides `a` by `b`, and returns the result. Store the result for inputs 15 and 3, then print it.
// Expected Output: Division result: 5

// Task 4: Arrow Function with Single Parameter
// Concept: Arrow function with one parameter (omit parentheses).
// Instructions: Create an arrow function assigned to a variable `greetUser` that takes one parameter (`name`)
// and logs a greeting (e.g., `Hello, name!`). Call it with the argument "Alice".
// Expected Output: Hello, Alice!

// Task 5: Arrow Function with Implicit Return
// Concept: Arrow function with a single expression (omit `return` and `{}`).
// Instructions: Create an arrow function assigned to a variable `cube` that takes one number (`n`)
// and returns its cube (n * n * n). Store the result for input 3 and print it.
// Expected Output: Cube: 27

// Task 6: Callback Function for Age Calculation
// Concept: Using a callback function to calculate age.
// Instructions: Write a function `retirementAge` that takes two parameters: `retirement` (retirement age, e.g., 65)
// and `ageFn` (a callback function). The callback function takes a birth year (`yob`) and returns the age.
// `retirementAge` should calculate years until retirement (retirement - age) and log it.
// Pass an anonymous function as the callback that calculates age using the current year (2025).
// Call with retirement age 65 and birth year 1990.
// Expected Output: Years until retirement: 40

// Task 7: Arrow Function as Callback
// Concept: Using an arrow function as a callback.
// Instructions: Write a function `timeToGraduate` that takes two parameters: `gradAge` (graduation age, e.g., 22)
// and `ageFn` (a callback function). The callback takes a birth year (`yob`) and returns the age.
// `timeToGraduate` should log years until graduation (gradAge - age).
// Use an arrow function as the callback to calculate age. Call with gradAge 22 and birth year 2010.
// Expected Output: Years until graduation: 7

// Task 8: Function Expression with Conditional Return
// Concept: Combining `return` with conditionals in a function expression.
// Instructions: Create a function expression assigned to `isPositive` that takes a number (`num`)
// and returns `true` if the number is positive, `false` otherwise. Store and print the result for input -5.
// Expected Output: Is positive: false

// Task 9: Nested Callback Functions
// Concept: Using multiple callback functions.
// Instructions: Write a function `lifePlanner` that takes three parameters: `targetAge` (e.g., 80),
// `yob` (year of birth), and `calcFn` (a callback function that returns age).
// `lifePlanner` should call `calcFn` to get the age, then pass the age to another callback function
// (an anonymous function) that logs years left (targetAge - age).
// Call with targetAge 80, birth year 2000, and an anonymous function for `calcFn`.
// Expected Output: Years left to live: 55

// Task 10: Combining Arrow and Regular Functions
// Concept: Mixing arrow functions and regular functions with callbacks.
// Instructions: Write a regular function `calculateGoal` that takes two parameters: `goalAge` (e.g., 30)
// and `ageFn` (a callback). The callback calculates age from a birth year.
// `calculateGoal` logs years until the goal age (goalAge - age).
// Use an arrow function as the callback to calculate age.
// Call with goalAge 30 and birth year 1995.
// Expected Output: Years until goal: 5
