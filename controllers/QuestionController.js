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
                                        order: [['id', 'DESC']]
                                }).then(answer => res.render("question", {question: question, answer: answer}))
                                
                        } else {
                                res.redirect("/")
                        }
                })
        },
        async create(req, res){
                try{
                      const questionSave = 
                      await Question.create({
                      title: req.body.title,
                      description: req.body.description
                })
                res.redirect("/")
                }catch(err){
                        console.log(err.message)
                        res.redirect("/ask")
                }
        }
}



        