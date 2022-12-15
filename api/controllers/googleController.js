const passport = require("passport");
require("../utils/passport.js");

exports.auth = passport.authenticate("google", { scope: ["email", "profile"] });

exports.callback = passport.authenticate("google", {
  successRedirect: "/auth/callback/success",
  failureRedirect: "/auth/callback/failure",
});

exports.success = (req, res) => {
  if (!req.user) res.redirect("/auth/callback/failure");
  res.send("Welcome " + req.user.email);
};

exports.failure = (req, res) => {
  res.send("Error");
};
