import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import mainRoutes from "./src/routes/main-routes";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/", mainRoutes);

// Mongodb connection
mongoose
  .connect(
    "mongodb+srv://dsmeshilmaring13_db_user:7G4IAenOiglH0csG@cluster0.hgdnbwo.mongodb.net/test" // change DB name if needed
  )
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
