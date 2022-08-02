const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("<h2>You landed on user</h2>"));

module.exports = router;
