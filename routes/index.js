const express = require("express");
const router = express.Router();

import { renderToString } from "react-dom/server";
import Portfolio from "../public/javascripts/components/portfolio";
import React from "react";

/* GET home page. */
router.get("/", function(req, res) {
  const markup = renderToString(<Portfolio />);

  res.render("index", {
    title: "Express",
    markup: markup
  });
});

module.exports = router;
