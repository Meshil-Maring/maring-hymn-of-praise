const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const mainRoutes = require("./routes/main-routes");

const app = express();
dotenv.config();

// env variable
const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", mainRoutes);

// MongoDB connection
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.listen(port, () => console.log("Server running on port", port));
