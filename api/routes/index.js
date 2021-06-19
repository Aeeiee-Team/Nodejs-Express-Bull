const express = require("express");
const bodyParser = require("body-parser");
const { createUser } = require("../controllers/register");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/register", createUser);

app.get("/", (req, res) => {
	res.send("Hello  World");
});

module.exports = app;
