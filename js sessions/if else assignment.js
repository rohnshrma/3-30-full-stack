// Task 1: Traffic Light System
// Prompt user for a traffic light color ("red", "yellow", or "green").
// Convert input to lowercase for case-insensitive comparison.
// Use if, else if, and else to display:
//   "Stop" for red.
//   "Prepare to stop" for yellow.
//   "Go" for green.
//   "Invalid color" for any other input.

// var light = prompt("Enter Light : ", "red , yellow or green").toLowerCase();
// if (light === "red") {
//   console.log("Stop");
// } else if (light === "yellow") {
//   console.log("Prepare to stop");
// } else {
//   console.log("Go");
// }

// Task 2: Temperature Check
// Prompt user for current temperature in Celsius.
// Use parseInt or parseFloat to handle numeric input.
// Use if, else if, and else to display:
//   "Freezing" if temperature < 0.
//   "Cool" if temperature is 0 to 15.
//   "Warm" if temperature is 16 to 30.
//   "Hot" if temperature > 30.

// var temp = parseInt(prompt("Enter the temperature in celsius : "));
// if (temp < 0) {
//   console.log("Freezing");
// } else if (temp >= 0 && temp <= 15) {
//   console.log("Cool");
// } else if (temp >= 16 && temp <= 30) {
//   console.log("Warm");
// } else {
//   console.log("Hot");
// }

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

// var age = parseInt(prompt("Enter ticket price : "));
// if (age >= 0 && age < 5) {
//   console.log("Free");
// } else if (age >= 5 && age <= 12) {
//   console.log("$5");
// } else if (age >= 13 && age <= 64) {
//   console.log("$10");
// } else if (age >= 65) {
//   console.log("$8");
// } else {
//   console.log("invalid age input");
// }

// Task 5: Login System
// Prompt user for a username and password.
// Use nested conditions to check:
//   If username is "admin", then check if password is "1234".
//   Display "Login successful" if both are correct.
//   Display "Incorrect username or password" otherwise.

// var username = prompt("Enter username :").toLowerCase();

// if (username == "admin") {
//   var password = prompt("Enter password :").toLowerCase();
//   if (password == "1234") {
//     console.log("Correct Credentials");
//   } else {
//     console.log("Incorrect Password");
//   }
// } else {
//   console.log("Invalid Username");
// }

// Task 6: BMI Calculator
// Prompt user for weight (kg) and height (m).
// Use parseFloat for decimal inputs.
// Calculate BMI: weight / (height * height).
// Use if, else if, and else to display:
//   "Underweight" if BMI < 18.5.
//   "Normal" if BMI is 18.5 to 24.9.
//   "Overweight" if BMI is 25 to 29.9.
//   "Obese" if BMI ≥ 30.

// var weight = parseInt(prompt("Enter your weight in kg's : "));
// var height = parseFloat(prompt("Enter your height in meter's : "));

// var bmi = weight / height ** 2;

// if (bmi < 18.5) {
//   console.log(`Underweight as your bmi is ${bmi}`);
// } else if (bmi >= 18.5 && bmi < 24.9) {
//   console.log(`Normal weight as your bmi is ${bmi}`);
// } else if (bmi >= 25 && bmi < 29.9) {
//   console.log(`Overweight as your bmi is ${bmi}`);
// } else {
//   console.log(`Obesse as your bmi is ${bmi}`);
// }

// Task 7: Store Discount
// Prompt user for total purchase amount and membership status ("yes" or "no").
// Convert membership input to lowercase.
// Use nested conditions:
//   If membership is "yes", apply 10% discount.
//   If purchase amount > $100, apply additional 5% discount.
//   Display final amount after discounts.

// var pur_amt = parseInt(prompt("Enter Purchase Amount: "));
// var mem_status = prompt("Enter Membership Status (Yes/No): ").toLowerCase();

// if (mem_status === "yes") {
//   if (pur_amt > 100) {
//     var discount = (pur_amt * 15) / 100;
//     console.log(
//       `Additional Discount Applied\n Final Price : ${pur_amt} -  ${discount} = ${
//         pur_amt - discount
//       }`
//     );
//   } else {
//     var discount = (pur_amt * 10) / 100;
//     console.log(
//       `Additional Discount Applied\n Final Price : ${pur_amt} -  ${discount} = ${
//         pur_amt - discount
//       }`
//     );
//   }
// } else {
//   console.log("No Discount!, Final price", pur_amt);
// }

// Task 8: Weather Clothing Suggestion
// Prompt user for temperature (Celsius) and whether it’s raining ("yes" or "no").
// Use parseFloat for temperature and toLowerCase for rain input.
// Use nested conditions:
//   Suggest "Jacket" if temperature < 10.
//   Suggest "Sweater" if temperature is 10 to <20.
//   Suggest "T-shirt" if temperature ≥ 20.
//   If raining, add "Bring an umbrella.

// var temp = parseFloat(prompt("Enter Temperature : "));
// var isRaining = prompt("Is It Raining : ").toLowerCase();

// if (isRaining) {
//   if (temp < 10) {
//     console.log("Jacked and Bring an umbrella");
//   } else if (temp >= 10 && temp < 20) {
//     console.log("Sweater and Bring an umbrella");
//   } else if (temp >= 20) {
//     console.log("T-shirt and Bring an umbrella");
//   }
// } else {
//   if (temp < 10) {
//     console.log("Jacked");
//   } else if (temp >= 10 && temp < 20) {
//     console.log("Sweater");
//   } else if (temp >= 20) {
//     console.log("T-shirt");
//   }
// }

// Task 9: Exam Eligibility
// Prompt user for attendance percentage and whether assignments are submitted ("yes" or "no").
// Use parseFloat for attendance and toLowerCase for assignment input.
// Use nested conditions:
//   Display "Eligible for exam" if attendance ≥ 75% and assignments submitted.
//   Otherwise, display reason(s) for ineligibility (e.g., "Low attendance" or "Assignments not submitted").

// var isSubmitted = prompt("Is Assignement Submitted : ");

// if (isSubmitted === "yes") {
//   var attendance = parseInt(prompt("Enter Percentage : "));
//   if (attendance > 75) {
//     console.log("Eligible to Exam");
//   } else {
//     console.log("Cannot give exam due to less attendance");
//   }
// } else {
//   console.log("Cannot give exam due to non submission of assignment");
// }

// Task 10: Restaurant Order System
// Prompt user for order type ("veg" or "non-veg") and whether
// they want it spicy ("yes" or "no").
// Convert inputs to lowercase.
// Use nested conditions:
//   For "veg": Display "Paneer Curry" if spicy, "Veg Biryani" if not.
//   For "non-veg": Display "Chicken Curry" if spicy, "Chicken Biryani" if not.
//   Display "Invalid order type" for other order types.

// var order_type = prompt("Veg or Non-Veg :");
// var isSpicy = prompt("Spicy or Non-Spicy :");
// if (order_type === "veg") {
//   if (isSpicy == "yes") {
//     console.log("Paneer Curry");
//   } else {
//     console.log("Veg Biryani");
//   }
// } else {
//   if (isSpicy == "yes") {
//     console.log("Chicken Curry");
//   } else {
//     console.log("Chicken Biryani");
//   }
// }
