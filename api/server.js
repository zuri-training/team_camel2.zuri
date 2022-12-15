const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/userRoute")
const mongoose = require("mongoose");
let DB_CONNECT = process.env.DB_CONNECT;

const passport = require("passport");
const session = require("express-session");
const googleRoute = require("./routes/googleRoute");

app.use(
  cors({
    origin: "*",
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "somethingsecretgoeshere",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());


//database
// (async function connection() {
//   try {
//     mongoose.connect(
//       DB_CONNECT,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       },
//       (error) => {
//         if (error) {
//           throw new Error("Failed to connect to database");
//         }
//         console.log("Successfuly connected to the database");
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// })()

//Routes
app.use("/user", userRoute);
app.use("/auth", googleRoute);

//welcome note
app.get("/", (req, res) => {
  res.send("Here you get you get appropriate T &C, you are welcome to Termstree 🙌");
});


//404 error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Ohh you are lost, go back now!!!!",
  });
});


PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
