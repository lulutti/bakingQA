const { Sequelize } = require("sequelize");
const db = require("./database");
const Question = require("./Question");

const Answer = db.define("answers", {
        body: {
                type: Sequelize.TEXT,
                allowNull: false,
                validate: {
                        notEmpty: true,
                }
        },
        id:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                notEmpty: true
        },
});

Question.hasMany(Answer, {
        foreightkey: 'questionId'
});

Answer.belongsTo(Question, {
        foreignKey: "questionId"
});

Answer.sync({force: false});

module.exports = Answer;