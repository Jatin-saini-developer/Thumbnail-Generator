require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/Database");
const authRoutes = require("./routes/authRouter");
const thumbnailRoutes = require("./routes/thumbnailRouter");
const profileRouter = require("./routes/profileRouter");
const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL =
  (process.env.FRONTEND_URL || "https://thumbnail-generator-uins.vercel.app" || "http://localhost:5173" ).trim();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    // origin: FRONTEND_URL,
    origin: true,
    credentials: true,
  }),
);

app.use("/", authRoutes);
app.use("/", thumbnailRoutes);

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });
