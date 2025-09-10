// Import Mongoose, a MongoDB object modeling tool for Node.js
import mongoose from "mongoose";

// Import bcryptjs, a library for hashing passwords
import bcrypt from "bcryptjs";

// Define the user schema (blueprint for the 'user' collection in MongoDB)
const userSchema = new mongoose.Schema({
  // Define the 'username' field
  username: {
    type: "String", // Data type is String
    required: true, // Field is mandatory
    unique: true, // Ensures no two users can have the same username
    minLength: 8, // Minimum length of the username is 8 characters
  },
  // Define the 'password' field
  password: {
    type: "String", // Data type is String
    minLength: 6, // Minimum length of the password is 6 characters
  },
  googleId: {
    type: String,
    unqiue: true,
  },
  name: { type: String },
});

// Define a pre-save hook that runs before a user document is saved to the database
userSchema.pre("save", async function (next) {
  // Check if the password field has been modified (e.g., during creation or update)
  if (this.isModified("password")) {
    // Hash the password using bcrypt with a salt factor of 11
    this.password = await bcrypt.hash(this.password, 11);
  }
  // Call the next middleware/function in the stack
  next();
});

// Add a custom method to the user schema for comparing passwords
userSchema.methods.comparePassword = async function (password) {
  // Compare the provided password with the stored (hashed) password using bcrypt
  return await bcrypt.compare(password, this.password);
};

// Create a Mongoose model named 'user' based on the userSchema
// This represents the 'user' collection in the database
const User = new mongoose.model("user", userSchema);

// Export the User model to be used in other parts of the application
export default User;
