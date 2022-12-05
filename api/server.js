const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const userRoute = require("../routes/userRoute")

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/user", userRoute);

//welcome note
app.get("/", (req, res) => {
  res.send("Here you get you get appropriate T &C, you are welcome 🙌");
});

//404 error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Ohh you are lost, go back now!!!!",
  });
});

// Database
const dbURI = "";

port = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));