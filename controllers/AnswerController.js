const db = require('../db/database');
const { Sequelize } = require('sequelize');
const Question = require("../db/Question");
const Answer = require("../db/Answer");


module.exports = {
        save(req, res){
                const questionId = req.params.id;
                Answer.create({
                        body: req.body.body,
                        questionId: questionId,
                })
                res.redirect(`/question/${questionId}`)
        },
}