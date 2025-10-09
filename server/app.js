const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// middlewares
app.use(cors());
app.use(express.json()); // important if you send/receive JSON

// simple route
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://dsmeshilmaring13_db_user:7G4IAenOiglH0csG@cluster0.hgdnbwo.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected ✅");
  })
  .catch((err) => console.error("MongoDB connection error ❌:", err));

app.listen(8000, () => console.log("Server running on port 8000"));
