const express = require("express");
const route = express();
const db = require("./db/database");


//Database
db
        .authenticate()
        .then(() => {
                console.log("Conexão feita com sucesso")
        })
        .catch((msgErro) => {
                console.log(msgErro);
        })

// Rotas
route.get("/", (req, res) => res.render("index", {page: 'questions'}));

route.get('/ask', (req, res) => res.render("index", {page: 'ask'}));

route.post("/saveQuestion", (req, res) => {
        let title = req.body.title;
        let description = req.body.description;
        res.send(`Título: ${title}, Descrição: ${description}`)
});

module.exports = route;
