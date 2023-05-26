import mongoose from "mongoose";

const connecDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to DB ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connecDB;
