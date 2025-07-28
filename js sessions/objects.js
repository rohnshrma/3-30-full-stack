// Creating an object literal called 'car' to represent a car with properties and methods
var car = {
  // Property 'model': stores the car model as a string
  model: "figo",
  // Property 'brand': stores the car brand as a string
  brand: "ford",
  // Property 'year': stores the manufacturing year as a number
  year: 2020,
  // Property 'colors': stores an array of possible colors for the car
  colors: ["red", "green", "blue"],
  // Method 'start': a function that logs a message when the car starts
  start: function () {
    console.log("Engine Started");
  },
  // Method 'stop': an arrow function that logs a message when the car stops
  stop: () => {
    console.log("Engine Stop");
  },
};

// Concept: Objects in JavaScript are collections of key-value pairs.
// Here, 'car' is an object with properties (model, brand, year, colors) and methods (start, stop).

// Print the entire 'car' object to the console
console.log(car);
// Output: { model: 'figo', brand: 'ford', year: 2020, colors: ['red', 'green', 'blue'], start: [Function: start], stop: [Function: stop] }

// Access and print the 'model' property using dot notation
console.log(car.model);
// Output: figo
// Concept: Dot notation (object.property) is used to access object properties.

// Access and print the 'model' property using bracket notation
console.log(car["model"]);
// Output: figo
// Concept: Bracket notation (object["property"]) is another way to access properties, useful when property names are dynamic or contain special characters.

// Update the 'model' property to a new value
car.model = "mustang";
// Concept: Objects are mutable, so you can change their property values.

// Print the updated 'car' object
console.log(car);
// Output: { model: 'mustang', brand: 'ford', year: 2020, colors: ['red', 'green', 'blue'], start: [Function: start], stop: [Function: stop] }

// Add a new property 'isAvailable' to the 'car' object using bracket notation
car["isAvailable"] = false;
// Concept: You can add new properties to an object at any time.

// Print the 'car' object with the new property
console.log(car);
// Output: { model: 'mustang', brand: 'ford', year: 2020, colors: ['red', 'green', 'blue'], start: [Function: start], stop: [Function: stop], isAvailable: false }

// Call the 'start' method of the 'car' object
car.start();
// Output: Engine Started
// Concept: Methods are functions stored as object properties. Dot notation calls them.

// Call the 'stop' method of the 'car' object
car.stop();
// Output: Engine Stop

// Define a constructor function 'Student' to create student objects
function Student(name, age, course) {
  // 'this' refers to the new object being created
  // Assign the 'name' parameter to the 'name' property of the new object
  this.name = name;
  // Assign the 'age' parameter to the 'age' property
  this.age = age;
  // Assign the 'course' parameter to the 'course' property
  this.course = course;

  // Define a method 'info' for the new object to display its details
  this.info = function () {
    // Use template literals (``) for string formatting with variables
    console.log(
      `Name : ${this.name}\nAge : ${this.age}\nCourse : ${this.course}`
    );
  };
}
// Concept: A constructor function is a blueprint for creating objects with similar properties and methods.
// The 'new' keyword creates a new object, sets 'this' to it, and returns it.

// Create a new 'Student' object for Arjun
var arjun = new Student("Arjun Bakshi", 21, "full stack web development");
// Create a new 'Student' object for Daksh
var daksh = new Student("Daksh Khurana", 21, "Python Programming");

// Print the 'arjun' object
console.log(arjun);
// Output: Student { name: 'Arjun Bakshi', age: 21, course: 'full stack web development', info: [Function] }

// Print the 'daksh' object
console.log(daksh);
// Output: Student { name: 'Daksh Khurana', age: 21, course: 'Python Programming', info: [Function] }

// Call the 'info' method for 'arjun'
arjun.info();
// Output:
// Name : Arjun Bakshi
// Age : 21
// Course : full stack web development

// Call the 'info' method for 'daksh'
daksh.info();
// Output:
// Name : Daksh Khurana
// Age : 21
// Course : Python Programming

// Define a class 'Teacher' to create teacher objects (modern alternative to constructor functions)
class Teacher {
  // Constructor method runs when a new object is created
  constructor(name, age, className) {
    // 'this' refers to the new object being created
    // Assign the 'name' parameter to the 'name' property
    this.name = name;
    // Assign the 'age' parameter to the 'age' property
    this.age = age;
    // Assign the 'className' parameter to the 'class_name' property
    this.class_name = className;
  }

  // Define a method 'info' to display teacher details
  info() {
    // Use template literals for formatted output
    console.log(
      `Name : ${this.name}\nAge : ${this.age}\nClass :  : ${this.class_name}`
    );
  }
}
// Concept: Classes are a modern, cleaner syntax for creating objects, introduced in ES6 (2015).
// They are syntactic sugar over constructor functions but work similarly.

// Create a new 'Teacher' object for Rohan
var rohan = new Teacher("Rohan sharma", 21, "web development");

// Print the 'rohan' object
console.log(rohan);
// Output: Teacher { name: 'Rohan sharma', age: 21, class_name: 'web development' }

// Call the 'info' method for 'rohan'
rohan.info();
// Output:
// Name : Rohan sharma
// Age : 21
// Class :  : web development
