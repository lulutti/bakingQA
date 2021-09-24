const express = require("express");
const route = express();

route.get("/", (req, res) => res.render("index", {page: 'questions'}));

route.get('/ask', (req, res) => res.render("index", {page: 'ask'}))

route.post("/saveQuestion", (req, res) => res.send("Formulário recebido"))

module.exports = route;
