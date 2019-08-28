var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/controller.js");

var PORT = process.env.PORT || 8889;

var app = express();


app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" +PORT);
});
