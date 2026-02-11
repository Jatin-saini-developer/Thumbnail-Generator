const express = require("express");
const connectDB = require("./config/Database");
const User = require("./modals/user");
const app = express();
const PORT = process.env.PORT || 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser") 

app.use(express.json());
app.use(cookieParser());

app.post("/signUp", async (req, res) => {
  try {
    const { name, emailId, password } = req.body;
    if (!emailId || !password) {
      return res
        .status(400)
        .json({ message: "emailId and password are required" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({ name, emailId, password: passwordHash });
    await user.save();
    return res.status(201).json({ message: "user added successfully" });
  } catch (err) {
    if (err && err.code === 11000) {
      return res.status(409).json({ message: "emailId already exists" });
    }
    return res
      .status(500)
      .json({ message: "failed to create user", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    if (!emailId || !password) {
      return res.status(400).json({
        message: "emailId and password are required",
      });
    }
   
    const user = await User.findOne({ emailId });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { _id: user._id },
      "Jatin@33",
      { expiresIn: "7d" }
    );  
    res.cookie("token", token);

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        emailId: user.emailId,
      },
    });

  } catch (err) {
    return res.status(500).json({
      message: "Login failed",
      error: err.message,
    });
  }
});


app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});


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
