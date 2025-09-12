import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB", conn.connection.host);
  } catch (err) {
    console.log("error while connecting to db", err);
    process.exit(1);
  }
};
