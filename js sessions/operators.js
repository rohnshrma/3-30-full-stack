// Arithmetic Operators: Perform mathematical operations on numbers
var a = 23; // Declare variable 'a' and assign it the value 23
var b = 3; // Declare variable 'b' and assign it the value 3

console.log(a + b); // Addition: Adds 'a' and 'b' (23 + 3 = 26)
console.log(a - b); // Subtraction: Subtracts 'b' from 'a' (23 - 3 = 20)
console.log(a * b); // Multiplication: Multiplies 'a' by 'b' (23 * 3 = 69)
console.log(a / b); // Division: Divides 'a' by 'b' and returns quotient (23 / 3 ≈ 7.666...)
console.log(a % b); // Modulus: Returns remainder of 'a' divided by 'b' (23 % 3 = 2)
console.log(a ** b); // Exponentiation: Raises 'a' to the power of 'b' (23^3 = 12167)

// Assignment Operators: Assign values to variables, often with arithmetic operations
var x = 23; // Basic assignment: Assigns 23 to variable 'x'

console.log(x); // Logs current value of 'x' (23)
x += 10; // Addition assignment: Adds 10 to 'x' and assigns result (x = 23 + 10 = 33)
console.log(x); // Logs updated 'x' (33)
x -= 5; // Subtraction assignment: Subtracts 5 from 'x' and assigns result (x = 33 - 5 = 28)
console.log(x); // Logs updated 'x' (28)
x *= 10; // Multiplication assignment: Multiplies 'x' by 10 and assigns result (x = 28 * 10 = 280)
console.log(x); // Logs updated 'x' (280)
x /= 3; // Division assignment: Divides 'x' by 3 and assigns quotient (x = 280 / 3 ≈ 93.333...)
console.log(x); // Logs updated 'x' (≈ 93.333...)
x %= 10; // Modulus assignment: Divides 'x' by 10 and assigns remainder (x = 93.333... % 10 ≈ 3.333...)
console.log(x); // Logs updated 'x' (≈ 3.333...)
x **= 2; // Exponentiation assignment: Raises 'x' to power 2 and assigns result (x = 3.333...^2 ≈ 11.111...)
console.log(x); // Logs updated 'x' (≈ 11.111...)

// Comparison Operators: Compare values and return true or false
var a = 23; // Reassign 'a' to 23
var b = 3; // Reassign 'b' to 3

console.log(a > b); // Greater than: Returns true if 'a' is greater than 'b' (23 > 3 = true)
console.log(a < b); // Less than: Returns true if 'a' is less than 'b' (23 < 3 = false)
console.log(a <= b); // Less than or equal to: Returns true if 'a' is less than or equal to 'b' (23 <= 3 = false)
console.log(a >= b); // Greater than or equal to: Returns true if 'a' is greater than or equal to 'b' (23 >= 3 = true)

console.log(a == b); // Loose equality: Checks if 'a' equals 'b' in value (23 == 3 = false)
console.log(a != b); // Loose inequality: Checks if 'a' is not equal to 'b' in value (23 != 3 = true)

console.log(12 == "12"); // Loose equality with type coercion: Converts string "12" to number 12, compares values (12 == 12 = true)
console.log(12 != "12"); // Loose inequality with type coercion: Converts string "12" to number 12, compares values (12 != 12 = false)

console.log(12 === "12"); // Strict equality: Checks value and type (number 12 !== string "12" = false)
console.log(12 !== "12"); // Strict inequality: Checks value and type (number 12 !== string "12" = true)

// Logical Operators: Combine multiple conditions to return true or false
var a = 23; // Reassign 'a' to 23
var b = 3; // Reassign 'b' to 3

// Logical AND (&&): Returns true if both conditions are true, else false
console.log(a > b && b < a); // true && true = true (23 > 3 and 3 < 23)
console.log(a < b && b < a); // false && true = false (23 < 3 is false, short-circuits)
console.log(a < b && b > a); // false && false = false (both conditions false)

// Logical OR (||): Returns true if at least one condition is true, else false
console.log(a > b || b < a); // true || true = true (23 > 3 or 3 < 23)
console.log(a < b || b < a); // false || true = true (3 < 23 is true)
console.log(a < b || b > a); // false || false = false (both conditions false)

// Logical NOT (!): Reverses the boolean result of a condition
console.log(!a > b); // Negates condition: !(23 > 3) = !true = false
console.log(!true); // Negates true: !true = false
console.log(!false); // Negates false: !false = true

// ========================= TASKS

// Practical Assignment Tasks: Practice arithmetic, assignment, comparison, and logical operators
// Instructions: Create a JavaScript program to perform the following tasks without using if-else or other control structures.
// Use console.log to display results for each task. Test with different values to explore outcomes.

// Task 1: Basic Arithmetic Calculations
// - Declare two variables, price and quantity, with numeric values
// - Calculate and log the total cost using multiplication (*)
// - Calculate and log the discounted price using subtraction (-) with a fixed discount (e.g., 5)
// - Calculate and log the price per item using division (/)
// - Calculate and log the remainder of total cost divided by 10 using modulus (%)
// - Calculate and log the square of the quantity using exponentiation (**)

// Task 2: Assignment Operator Manipulations
// - Declare a variable total with an initial value (e.g., 100)
// - Increase total by 20 using addition assignment (+=) and log the result
// - Decrease total by 15 using subtraction assignment (-=) and log the result
// - Multiply total by 2 using multiplication assignment (*=) and log the result
// - Divide total by 4 using division assignment (/=) and log the result
// - Apply modulus 3 to total using modulus assignment (%=) and log the result
// - Raise total to power 2 using exponentiation assignment (**=) and log the result

// Task 3: Comparison Operator Checks
// - Declare two variables, item1Price and item2Price, with numeric values
// - Log whether item1Price is greater than item2Price using >
// - Log whether item1Price is less than or equal to item2Price using <=
// - Log whether item1Price equals item2Price using loose equality (==)
// - Log whether item1Price does not equal item2Price using loose inequality (!=)
// - Log whether item1Price strictly equals a string version of item1Price using ===
// - Log whether item1Price strictly does not equal a string version of item1Price using !==

// Task 4: Logical Operator Combinations
// - Declare two variables, stock and demand, with numeric values
// - Log result of stock > demand AND stock >= 10 using &&
// - Log result of stock < demand OR demand <= 5 using ||
// - Log result of NOT (stock > demand) using !
// - Log result of stock >= demand AND demand != 0 using &&
// - Log result of stock <= demand OR stock == demand using ||
// - Log result of NOT (demand === "0") using !
