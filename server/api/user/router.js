const express = require("express");
const router = express.Router();
const userVal = require("./userAuth");

router.post("/register", userVal.registerNewUser);
router.post("/login", userVal.loginUser);
module.exports = router;
