import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to DB =>", conn.connection.host);
  } catch (err) {
    console.log("Error while connecting to db", err);
    process.exit(1);
  }
};

export default connectDB;
