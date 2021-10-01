const db = require('../db/database');
const { Sequelize, col } = require('sequelize');
const Question = require("../db/Question");
const Answer = require("../db/Answer");
const { count } = require('../db/Question');


module.exports = {
        async numbers(req, res){
        const totalAnswers = await Answer.count({
                col: 'id'
        });
        const totalQuestions= await Question.count({
                col: 'id'
        });
        const questions = await Question.findAll({raw: true, attributes: ['title','description','id',], order:[['id','DESC']]})

        res.render("index",{totalAnswers: totalAnswers, questions: questions, totalQuestions: totalQuestions})
}
}