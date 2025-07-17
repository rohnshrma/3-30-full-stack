// Functions are reusable blocks of code designed to perform a specific task.
// They only execute when called, promoting code modularity and reusability.

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
// The first function should prompt the user for a Celsius temperature, convert it to Fahrenheit (F = C * 9/5 + 32), and output the result.
// The second function should accept a Celsius temperature as a parameter and output the Fahrenheit equivalent.
// Call each function at least twice with different values.

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
// The first function should prompt the user for a year and output "Leap Year" if divisible by 4 (and not by 100 unless also by 400), else "Not a Leap Year".
// The second function should accept a year as a parameter and output the same.
// Call each function at least twice with different inputs.
