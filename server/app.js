const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use("/", (req, res) => res.send("hello"));

mongoose
  .connect(
    "mongodb+srv://dsmeshilmaring13_db_user:7G4IAenOiglH0csG@cluster0.hgdnbwo.mongodb.net/"
  )
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.listen(8000, () => console.log("Port : 8000"));
