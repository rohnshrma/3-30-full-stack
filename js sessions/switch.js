// Prompt the user to input a number (0-6) representing the day of the week and convert it to an integer
var today = parseInt(prompt("What is the day today 0-6 : "));

// Use a switch statement to evaluate the value of 'today'
switch (today) {
  // If today is 0, print "Sunday" to the console
  case 0:
    console.log("Sunday");
    // Exit the switch statement
    break;
  // If today is 1, print "Monday" to the console
  case 1:
    console.log("Monday");
    // Exit the switch statement
    break;
  // If today is 2, print "Tuesday" to the console
  case 2:
    console.log("Tuesday");
    // Exit the switch statement
    break;
  // If today is 3, print "Wedesday" to the console (Note: Typo in "Wednesday")
  case 3:
    console.log("Wedesday");
    // Exit the switch statement
    break;
  // If today is 4, print "Thursday" to the console
  case 4:
    console.log("Thursday");
    // Exit the switch statement
    break;
  // If today is 5, print "Friday" to the console
  case 5:
    console.log("Friday");
    // Exit the switch statement
    break;
  // If today is 6, print "Saturday" to the console
  case 6:
    console.log("Saturday");
    // Exit the switch statement
    break;
  // If today doesn't match any case (e.g., not 0-6), print "Invalid Day"
  default:
    console.log("Invalid Day");
    // Exit the switch statement
    break;
}

// Task 3: Grade Calculator
// Prompt user for a test score (0-100) and convert it to an integer
var marks = parseInt(prompt("Enter Marks :"));

// Use a switch statement with boolean expressions to evaluate the score range
switch (true) {
  // If marks is between 90 and 100 (inclusive), print "A"
  case marks >= 90 && marks <= 100:
    console.log("A");
    // Exit the switch statement
    break;
  // If marks is between 80 and 89 (inclusive), print "B"
  case marks >= 80 && marks <= 89:
    console.log("B");
    // Exit the switch statement
    break;
  // If marks is between 70 and 79 (inclusive), print "C"
  case marks >= 70 && marks <= 79:
    console.log("C");
    // Exit the switch statement
    break;
  // If marks is between 60 and 69 (inclusive), print "D"
  case marks >= 60 && marks <= 69:
    console.log("D");
    // Exit the switch statement
    break;
  // If marks is between 0 and 59 (inclusive), print "Fail"
  case marks >= 0 && marks <= 59:
    console.log("Fail");
    // Exit the switch statement
    break;
  // If marks doesn't match any valid range (e.g., negative or >100), print "Invalid Marks"
  default:
    console.log("Invalid Marks");
    // Exit the switch statement
    break;
}

// Prompt the user to input their age and convert it to an integer
var age = parseInt(prompt("Enter your age : "));

// Use a switch statement to evaluate the age for pricing
switch (age) {
  // If age is 0, print "Free"
  case 0:
  // If age is 1, print "Free" (falls through from case 0)
  case 1:
  // If age is 2, print "Free" (falls through from case 1)
  case 2:
  // If age is 3, print "Free" (falls through from case 2)
  case 3:
  // If age is 4, print "Free" (falls through from case 3)
  case 4:
    console.log("Free");
    // Exit the switch statement
    break;

  // If age is 5, print "$2"
  case 5:
  // If age is 6, print "$2" (falls through from case 5)
  case 6:
  // If age is 7, print "$2" (falls through from case 6)
  case 7:
  // If age is 8, print "$2" (falls through from case 7)
  case 8:
  // If age is 9, print "$2" (falls through from case 8)
  case 9:
  // If age is 10, print "$2" (falls through from case 9)
  case 10:
    console.log("$2");
    // Exit the switch statement
    break;
  // If age is 11, print "$5"
  case 11:
  // If age is 12, print "$5" (falls through from case 11)
  case 12:
  // If age is 13, print "$5" (falls through from case 12)
  case 13:
  // If age is 14, print "$5" (falls through from case 13)
  case 14:
    console.log("$5");
    // Exit the switch statement
    break;
  // If age doesn't match any case (e.g., age >= 15 or negative), print "$10"
  default:
    console.log("$10");
  // Exit the switch statement (optional, as default is the last case)
}

// Task 1: Traffic Light Indicator
// Prompt user for a traffic light color (e.g., 1 for Red, 2 for Yellow, 3 for Green).
// Use switch to display:
//   1: "Stop"
//   2: "Prepare to Stop"
//   3: "Go"
//   Default: "Invalid Color"

// Task 2: Month Name Converter
// Prompt user for a month number (1-12).
// Use switch to display the month name (e.g., 1: "January", 2: "February", etc.).
// Default: "Invalid Month"

// Task 3: Simple Calculator Operation Selector
// Prompt user for an operation code (1 for Add, 2 for Subtract, 3 for Multiply, 4 for Divide).
// Use switch to display the operation name (e.g., 1: "Addition", 2: "Subtraction", etc.).
// Default: "Invalid Operation"

// Task 4: Season Finder
// Prompt user for a month number (1-12).
// Use switch to display the season:
//   12, 1, 2: "Winter"
//   3, 4, 5: "Spring"
//   6, 7, 8: "Summer"
//   9, 10, 11: "Fall"
//   Default: "Invalid Month"

// Task 5: Clothing Size Converter
// Prompt user for a size code (1 for S, 2 for M, 3 for L, 4 for XL).
// Use switch to display the size name (e.g., 1: "Small", 2: "Medium", etc.).
// Default: "Invalid Size"

// Task 6: Day Type Classifier
// Prompt user for a day number (0-6).
// Use switch to display:
//   0, 6: "Weekend"
//   1, 2, 3, 4, 5: "Weekday"
//   Default: "Invalid Day"

// Task 7: Priority Level Indicator
// Prompt user for a priority code (1 for High, 2 for Medium, 3 for Low).
// Use switch to display the priority (e.g., 1: "High Priority", 2: "Medium Priority", etc.).
// Default: "Invalid Priority"

// Task 8: Membership Level Benefits
// Prompt user for a membership level (1 for Basic
