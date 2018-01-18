var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./models/Article");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/nytreact");
mongoose.connect("mongodb://heroku_xn79311z:h5jdrnq70898n4bpu2ea2oump9@ds123084.mlab.com:23084/heroku_xn79311z");
var db = mongoose.connection;

db.on("error", (err) => {
  console.log("Mongoose Error: ", err);
});

db.once("open", () => {
  console.log("Mongoose connection successful.");
});

require("./controller/routes.js")(app, bodyParser, logger, Article);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
