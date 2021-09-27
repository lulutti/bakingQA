const db = require('../db/database');
const { Sequelize } = require('sequelize');
const Question = require("../db/Question");
const Answer = require("../db/Answer");


module.exports = {
        open(req, res){
                const id = req.params.id;
                Question.findOne({
                        where: {id: id}
                }).then(question => {
                        if(question != undefined){
                                Answer.findAll({
                                        where: {questionId: req.params.id},
                                        raw: true,
                                }).then(answer => res.render("question", {question: question, answer: answer}))
                                
                        } else {
                                res.redirect("/")
                        }
                })
        },
        create(req, res){
                Question.create({
                      title: req.body.title,
                      description: req.body.description
                }).then(() => {
                        res.redirect("/");
                });
}
}



        