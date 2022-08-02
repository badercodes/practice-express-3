// import express
const express = require("express");
const server = express();

// enable env variables + setup port to listen to connections
require("dotenv").config();
const port = process.env.PORT || 3030;

server.get("/", (req, res) => res.send("<h1>You landed on home</h1>"));

server.listen(port, () => console.log(`Listening on Port ${port} `));
