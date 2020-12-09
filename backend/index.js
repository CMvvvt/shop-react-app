import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import ProductRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("API is running......");
});

app.use("/api/products", ProductRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
