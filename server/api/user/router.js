const express = require("express");
const router = express.Router();
const userAuth = require("./userAuth");

router.post("/register", userAuth.registerNewUser);
router.post("/login", userAuth.loginUser);
module.exports = router;
