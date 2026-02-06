const express = require('express');
const connectDB = require("./config/Database");
const User = require("./modals/user")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/signUp', async (req, res) => {
  try {
    const { name, emailId, password } = req.body;
    if (!emailId || !password) {
      return res.status(400).json({ message: "emailId and password are required" });
    }
    const user = new User({ name, emailId, password });
    await user.save();
    return res.status(201).json({ message: "user added successfully" });
  } catch (err) {
    if (err && err.code === 11000) {
      return res.status(409).json({ message: "emailId already exists" });
    }
    return res.status(500).json({ message: "failed to create user", error: err.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      return res.status(400).json({ message: "emailId and password are required" });
    }

    const user = await User.findOne({ emailId }).lean();
    if (!user) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    return res.status(200).json({
      message: "login successful",
      user: { id: user._id, name: user.name, emailId: user.emailId },
    });
  } catch (err) {
    return res.status(500).json({ message: "login failed", error: err.message });
  }
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




