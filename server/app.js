const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://dsmeshilmaring13_db_user:7G4IAenOiglH0csG@cluster0.hgdnbwo.mongodb.net/"
  )
  .then(() => {
    console.log("Connect success");
  })
  .catch((err) => console.log("Connect Error: ", err));

app.use("/", (req, res, next) => {
  res.send("Hello from back end");
});

app.listen(8000, () => console.log("Server is port at: 8000"));
