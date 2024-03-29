import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connecDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
//configure env
dotenv.config();
connecDB();
//rest object
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "welcome to krishil shah",
  });
});
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
