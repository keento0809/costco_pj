import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  try {
    const connect = await mongoose.connect(uri!);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
