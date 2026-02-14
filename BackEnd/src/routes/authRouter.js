const express = require("express");

const authRouter = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../modals/user");

const JWT_SECRET = process.env.JWT_SECRET || "Jatin@33";
const isProduction = process.env.NODE_ENV === "production";

authRouter.post("/signup", async (req, res) => {
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

authRouter.post("/login", async (req, res) => {
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

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    const cookieOptions = {
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    res.cookie("token", token, cookieOptions);

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

authRouter.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  });
  return res.status(200).json({ message: "Logged out successfully" });
});

module.exports = authRouter;
