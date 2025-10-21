const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const mainRoutes = require("./routes/main-routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", mainRoutes);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://dsmeshilmaring13_db_user:7G4IAenOiglH0csG@cluster0.hgdnbwo.mongodb.net/myDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.listen(8000, () => console.log("🚀 Server running on port 8000"));
