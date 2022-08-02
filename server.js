// import express & mongoose (tool for MongoDB)
const express = require("express");
const server = express();
const mongoose = require("mongoose");

// enable env variables + setup port to listen to connections
require("dotenv").config();
const port = process.env.PORT || 3030;

// Server needs to be parse data that's posted
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// mongoDB url and config
const dbURL = process.env.DB_URL;
const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

// connect to mongoDB
mongoose
  .connect(dbURL, dbConfig)
  .then(() => console.log("Successfully Connected to Database!"))
  .catch((err) => console.log(err));

// import custom routes
const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");

//  invoke custom created routes
server.use("/user", userRoutes);
server.use("/product", productRoutes);

server.get("/", (req, res) => res.send("<h1>You landed on home</h1>"));

server.listen(port, (e) => console.log(`Listening on Port ${port} `));
