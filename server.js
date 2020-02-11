const express = require("express");
const expars = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();
const mongojs = require("mongojs");

app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./stuff/scripts/router")(app);
require("./stuff/scripts/connection")(app, mongojs);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});