const express = require("express");
const route = express();
const db = require("./db/database");
const Question = require("./db/Question");
const Answer = require("./db/Answer");
const QuestionController = require("./controllers/QuestionController");
const AnswerController = require("./controllers/AnswerController")
const TopicController = require("./controllers/TopicController")

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
route.get("/", TopicController.numbers)

route.get('/ask', (req, res) => res.render("ask"));

// Salvando dados do formulário de pergunta
route.post("/saveQuestion", QuestionController.create);
route.get("/question/:id", QuestionController.open);
route.post("/question/:id/saveAnswer", AnswerController.save);

module.exports = route;
