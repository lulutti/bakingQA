const db = require('../db/database');
const { Sequelize } = require('sequelize');
const Question = require("../db/Question");
const Answer = require("../db/Answer");


module.exports = {
        async save(req, res){
                const questionId = req.params.id;
                 try{ await Answer.create({
                        body: req.body.body,
                        questionId: questionId,
                })
                res.redirect(`/question/${questionId}`)
                }catch(err){
                        console.log(err.message)
                        res.redirect(`/question/${questionId}`)
                }
        },
}