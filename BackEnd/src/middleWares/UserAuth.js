const jwt = require("jsonwebtoken");
const User = require("../modals/user");

const USER_JWT_SECRET = "Jatin@33";

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decodedObj = await jwt.verify(token, USER_JWT_SECRET);
    const user = await User.findById(decodedObj._id);

    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = userAuth;
