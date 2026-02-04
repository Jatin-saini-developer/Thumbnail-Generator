const express = require('express');
const connectDB = require("./config/Database");
const User = require("./modals/user")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/signUp', async (req, res) => {
  const user = new User(req.body );
  await user.save()
  res.send('user added sucessfully')
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




