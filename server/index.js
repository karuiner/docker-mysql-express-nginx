require("dotenv").config();
var express = require("express");
var app = express();
const port = process.env.PORT;

var server = app.listen(port, function () {
  console.log("Express server has started on port : " + port);
});

app.get("/", function (req, res) {
  res.send("Hello?");
});
