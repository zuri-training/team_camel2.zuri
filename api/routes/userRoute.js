const express = require("express");
const router = express.Router()
const userController = require("../controllers/userController");


//POST request to /user to register as a new user
router.post("/signup", userController.createUser);

//login as a user
router.post("/login", userController.loginUser);

//forget password
router.post("/forgot", userController.forgetPassword); 

module.exports = router;