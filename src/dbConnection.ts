import mongoose from "mongoose";


mongoose.set("strictQuery", false);
export const connectDatabase = async () => {
  try {
    const uri = await mongoose.connect(process.env.DATABASE_URL);
    console.log("database connected");
  } catch (err) {
    console.log(`Database connection failed : ${err}`);
  }
};
