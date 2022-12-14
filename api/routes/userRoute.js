const express = require("express");
const router = express.Router()
const userController = require("../controllers/userController");


//POST request to /users to register as a new user
router.post("/signup", userController.createUser);

//login as a user
router.post("/login", userController.loginUser);

// //access to platform as user
// router.post("/", userController.permission)

module.exports = router;