const express = require("express");
const route = express();
const db = require("./db/database");
const Question = require("./db/Question");

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
route.get("/", (req, res) => {
        Question.findAll({raw: true, attributes: ['title','description','id'], order:[['id','DESC']]}).then(questions => {
                res.render("index", {questions: questions})
        });
});

route.get('/ask', (req, res) => res.render("ask"));

// Salvando dados do formulário de pergunta
route.post("/saveQuestion", (req, res) => {
        Question.create({
              title: req.body.title,
              description: req.body.description
        }).then(() => {
                res.redirect("/");
        });
});

route.get("/question/:id", (req, res) => {
        let id = req.params.id;
        Question.findOne({
                where: {id: id}
        }).then(question => {
                if(question != undefined){
                        res.render("question", {question: question});
                } else {
                        res.redirect("/")
                }
        })
})

module.exports = route;
