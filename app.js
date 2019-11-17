var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", function(req, res) {
  res.render("index");
  console.log(req.body.city);
});

app.listen(3000, function() {
  console.log(`Server Running on Port 3000`);
});
