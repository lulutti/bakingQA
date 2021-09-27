const { Sequelize } = require("sequelize");
const db = require("./database");

const Question = db.define('question',{
        id:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                notEmpty: true
        },
        title:{
                type: Sequelize.STRING,
                allowNull: false,
                notEmpty: true
        },
        description:{
                type: Sequelize.TEXT,
                allowNull: false,
                notEmpty: true
        }
});

Question.sync({force: false}).then(() => console.log('tabela criada'))

module.exports = Question;