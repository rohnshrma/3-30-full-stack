// Concept: The `if` statement executes a block of code if a specified condition evaluates to true.
// Syntax: if (condition) { code to execute }

// Example 1: Checking if there is water in a bottle
// `prompt` displays a dialog box to get user input as a string
// `toLowerCase()` converts the input to lowercase to handle case-insensitive comparison
var water_in_bottle = prompt(
  "Is there water in the bottle 'yes' or 'no' : "
).toLowerCase();

// Concept: `else` executes a block of code if all preceding conditions (if/else if) are false
// Example 2: Checking voting eligibility based on age
// `parseInt` converts the string input from prompt to an integer
var age = parseInt(prompt("Enter your age : "));
if (age >= 18) {
  // If age is 18 or greater, this block runs
  console.log("Eligible to vote");
} else {
  // If age is less than 18, this block runs
  console.log("Not Eligible to vote");
}

// Example 3: Using `else if` to check multiple conditions for days of the week
// `parseInt` converts the input string to an integer (0-6 for days)
var today = parseInt(prompt("What is the day today 0-6 : "));
if (today === 0) {
  // `===` checks for strict equality (value and type)
  console.log("Sunday");
} else if (today === 1) {
  // If previous condition is false, check if today is 1
  console.log("Monday");
} else if (today === 2) {
  console.log("Tuesday");
} else if (today === 3) {
  console.log("Wednesday");
} else if (today === 4) {
  console.log("Thursday");
} else if (today === 5) {
  console.log("Friday");
} else if (today === 6) {
  console.log("Saturday");
} else {
  // If none of the above conditions are true, handle invalid input
  console.log(`${today} is not a valid day`);
}

// Example 4: Using logical operators in conditions
// `&&` (AND) checks if both conditions are true
// var age = parseInt(prompt("Enter your age: "));
// if (age >= 18 && age <= 60) {
// Runs if age is between 18 and 60 (inclusive)
//   console.log("Eligible to vote");
// } else if (age > 60) {
// Runs if age is greater than 60
//   console.log("not fit to vote");
// } else {
// Runs if age is less than 18
//   console.log("not eligible to vote");
// }

// Example 5: Simplified version of the above with reordered conditions
var age = parseInt(prompt("Enter your age: "));
if (age >= 60) {
  // Check if age is 60 or more first
  console.log("Not Fit");
} else if (age >= 18) {
  // If age is less than 60, check if 18 or more
  console.log("Eligible");
} else {
  // If age is less than 18
  console.log("Not Eligible");
}

// Example 6: Nested conditions (conditions within conditions)
// Check if a person qualifies for a job based on degree and experience
var degree = prompt("Do Your Have a Degree ? : ").toLowerCase();
if (degree === "yes") {
  // Outer condition: runs if user has a degree
  var experience = parseInt(prompt("Years of experience : "));
  if (experience >= 2) {
    // Nested condition: runs if experience is 2 or more years
    console.log("You Got the Job");
  } else {
    // Runs if experience is less than 2 years
    console.log("Min Experience required is 2 years");
  }
} else {
  // Runs if user does not have a degree
  console.log("This Job Needs a Degree");
}

// Task 1: Traffic Light System
// Prompt user for a traffic light color ("red", "yellow", or "green").
// Convert input to lowercase for case-insensitive comparison.
// Use if, else if, and else to display:
//   "Stop" for red.
//   "Prepare to stop" for yellow.
//   "Go" for green.
//   "Invalid color" for any other input.

// Task 2: Temperature Check
// Prompt user for current temperature in Celsius.
// Use parseInt or parseFloat to handle numeric input.
// Use if, else if, and else to display:
//   "Freezing" if temperature < 0.
//   "Cool" if temperature is 0 to 15.
//   "Warm" if temperature is 16 to 30.
//   "Hot" if temperature > 30.

// Task 3: Grade Calculator
// Prompt user for a test score (0-100).
// Use parseInt to convert input to an integer.
// Use if, else if, and else to display letter grade:
//   A: 90-100
//   B: 80-89
//   C: 70-79
//   D: 60-69
//   F: Below 60
//   "Invalid score" for scores outside 0-100.

// Task 4: Movie Ticket Pricing
// Prompt user for their age.
// Use parseInt to convert input to an integer.
// Use if, else if, and else to display ticket price:
//   Free for age < 5.
//   $5 for age 5 to 12.
//   $10 for age 13 to 64.
//   $8 for age ≥ 65.
//   Handle invalid age inputs (e.g., negative numbers).

// Task 5: Login System
// Prompt user for a username and password.
// Use nested conditions to check:
//   If username is "admin", then check if password is "1234".
//   Display "Login successful" if both are correct.
//   Display "Incorrect username or password" otherwise.

// Task 6: BMI Calculator
// Prompt user for weight (kg) and height (m).
// Use parseFloat for decimal inputs.
// Calculate BMI: weight / (height * height).
// Use if, else if, and else to display:
//   "Underweight" if BMI < 18.5.
//   "Normal" if BMI is 18.5 to 24.9.
//   "Overweight" if BMI is 25 to 29.9.
//   "Obese" if BMI ≥ 30.

// Task 7: Store Discount
// Prompt user for total purchase amount and membership status ("yes" or "no").
// Convert membership input to lowercase.
// Use nested conditions:
//   If membership is "yes", apply 10% discount.
//   If purchase amount > $100, apply additional 5% discount.
//   Display final amount after discounts.

// Task 8: Weather Clothing Suggestion
// Prompt user for temperature (Celsius) and whether it’s raining ("yes" or "no").
// Use parseFloat for temperature and toLowerCase for rain input.
// Use nested conditions:
//   Suggest "Jacket" if temperature < 10.
//   Suggest "Sweater" if temperature is 10 to <20.
//   Suggest "T-shirt" if temperature ≥ 20.
//   If raining, add "Bring an umbrella" to suggestion.

// Task 9: Exam Eligibility
// Prompt user for attendance percentage and whether assignments are submitted ("yes" or "no").
// Use parseFloat for attendance and toLowerCase for assignment input.
// Use nested conditions:
//   Display "Eligible for exam" if attendance ≥ 75% and assignments submitted.
//   Otherwise, display reason(s) for ineligibility (e.g., "Low attendance" or "Assignments not submitted").

// Task 10: Restaurant Order System
// Prompt user for order type ("veg" or "non-veg") and whether they want it spicy ("yes" or "no").
// Convert inputs to lowercase.
// Use nested conditions:
//   For "veg": Display "Paneer Curry" if spicy, "Veg Biryani" if not.
//   For "non-veg": Display "Chicken Curry" if spicy, "Chicken Biryani" if not.
//   Display "Invalid order type" for other order types.

var marks = parseInt(prompt("Enter your marks : "));

if (marks >= 90 && marks <= 100) {
  console.log("A");
} else if (marks >= 80 && marks <= 89) {
  console.log("B");
} else if (marks >= 70 && marks <= 79) {
  console.log("C");
} else if (marks >= 60 && marks <= 69) {
  console.log("D");
} else if (marks < 60 && marks >= 0) {
  console.log("Fail");
} else {
  console.log("Invalid marks");
}
