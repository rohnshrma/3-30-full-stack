// Log the entire document object to the console
console.log(document);

// Selectors summary:
// Ways to select elements in the DOM: by id, class, tagname, querySelector, querySelectorAll, etc.

// Select element by id "heading" (returns a single element)
console.log(document.getElementById("heading"));

// Select elements by class name "para" (returns an HTMLCollection - array-like)
console.log(document.getElementsByClassName("para"));

// Select elements by tag name "button" (returns an HTMLCollection - array-like)
console.log(document.getElementsByTagName("button"));

// Select first matching element by CSS selector
console.log(document.querySelector("#heading")); // first element with id "heading"
console.log(document.querySelector(".para")); // first element with class "para"
console.log(document.querySelector("button")); // first <button> element

// Select all matching elements by CSS selector (returns a NodeList - array-like)
console.log(document.querySelectorAll(".para")); // all elements with class "para"
console.log(document.querySelectorAll("button")); // all <button> elements

// Store the element with id "heading" in a variable for reuse
var heading = document.getElementById("heading");

// Accessing inner text of the heading element
console.log(heading.innerText); // Gets the visible text inside the element
console.log(heading.innerHTML); // Gets the HTML content inside the element

// Setting inner text - replaces all content and treats content as plain text
heading.innerText = "hello sumit";
heading.innerText = "hello <u>sumit</u>"; // "<u>sumit</u>" shown literally as text, not interpreted as HTML

// Setting inner HTML - allows inserting HTML tags inside element
heading.innerHTML = "bye <u>Sumit</u>"; // "Sumit" will be underlined since <u> tags interpreted as HTML

// Getting the inline CSS style object of heading element (empty unless styles set inline)
console.log(heading.style);

// Set CSS inline properties directly on element style object

// Set text color to red
heading.style.color = "red";
// Add red border 1px solid
heading.style.border = "1px solid red";

// Setting the entire style attribute as a CSS string (replaces previous inline styles)
heading.style = "background-color:grey; color:red;";

console.log(heading.style); // Logs the CSSStyleDeclaration object with current inline styles

// Get all attributes of the heading element (NamedNodeMap)
console.log(heading.attributes);

// Get the value of a specific attribute, here "id"
console.log(heading.getAttribute("id"));

// Set (or change) the value of a specific attribute, here changes id from "heading" to "patanhi"
heading.setAttribute("id", "patanhi");

// Select first <img> element in document - two ways shown (commented and active)
var img = document.querySelector("img");

// Change the image source attribute to a new image URL (Keanu Reeves picture)
img.setAttribute(
  "src",
  "https://media.gettyimages.com/id/1146735001/photo/london-england-keanu-reeves-attends-the-john-wick-special-screenings-at-ham-yard-hotel-on-may.jpg?s=612x612&w=gi&k=20&c=geiWTqqPovlLDo1tm6t3bjEDLm3lGoRv-P2b1nlRwpE="
);

// Select the first element with class "para"
var para_one = document.getElementsByClassName("para")[0];

// Log the list of all classes applied to the element as a DOMTokenList
console.log(para_one.classList);

// Add a class "jw-1" to the element’s class list
para_one.classList.add("jw-1");
// Remove the class "jw-1" from the element’s class list
para_one.classList.remove("jw-1");

// Add an event listener to the first <button> element for click events
document.querySelector("button").addEventListener("click", () => {
  console.log("clicked"); // Log "clicked" on button click
});

// Add mouseover event listener to the image element
img.addEventListener("mouseover", () => {
  // On mouse hover over the image, change the source URL to a different image (a wallpaper)
  img.setAttribute("src", "https://images6.alphacoders.com/637/637352.jpg");
});

// Add mouseout event listener to the image element
img.addEventListener("mouseout", () => {
  // On mouse leaving the image, revert the source to the original Keanu Reeves image URL
  img.setAttribute(
    "src",
    "https://media.gettyimages.com/id/1146735001/photo/london-england-keanu-reeves-attends-the-john-wick-special-screenings-at-ham-yard-hotel-on-may.jpg?s=612x612&w=gi&k=20&c=geiWTqqPovlLDo1tm6t3bjEDLm3lGoRv-P2b1nlRwpE="
  );
});
