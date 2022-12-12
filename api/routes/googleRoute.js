const express = require("express");
const router = express.Router();
const googleAuth = require("../controllers/googleController.js");

// Auth
router.get("/", googleAuth.auth);

// Auth Callback
router.get("/callback", googleAuth.callback);

// Success
router.get("/callback/success", googleAuth.success);

// failure
router.get("/callback/failure", googleAuth.failure);

module.exports= router
