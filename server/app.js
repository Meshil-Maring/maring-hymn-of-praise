const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const mainRoutes = require("./src/routes/main-routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", mainRoutes);

// MongoDB connection
mongoose
  .connect(
<<<<<<< HEAD
    "mongodb+srv://dsmeshilmaring13_db_user:7G4IAenOiglH0csG@cluster0.hgdnbwo.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
=======
    "mongodb+srv://dsmeshilmaring13_db_user:7G4IAenOiglH0csG@cluster0.hgdnbwo.mongodb.net/myDatabase?retryWrites=true&w=majority"
>>>>>>> 1bfaddce134d21d9a8af6e0ff8dc066457742dd8
  )
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.listen(8000, () => console.log("🚀 Server running on port 8000"));
