const express = require("express");
const { reset } = require("nodemon");
const router = express.Router();

const NewProductModel = require("../models/NewProductModel");

router.post("/add", (req, res) => {
  const productDetails = {
    name: req.body.name,
    price: req.body.price,
  };
  // res.send(
  //   `You posted name: ${productDetails.name} and price: ${productDetails.price}`
  // );
  NewProductModel.create(productDetails)
    .then((response) => {
      console.log(response);
      res.send("I created some data!");
    })
    .catch((e) => console.log(e));
});

module.exports = router;
