const express = require("express");
const bodyParser = require("body-parser");
const override = require("method-override");

var port = process.env.PORT || 3000;
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
const routes = require("./controllers/books_controller.js");
app.use("/", routes);

app.listen(port);

console.log(`Listening at port ${port}`);