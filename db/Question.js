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
                validate:       {
                        notEmpty: true,
                        len: [4,50],
                }
        },
        description:{
                type: Sequelize.TEXT,
                allowNull: false,
                validate:       {
                        notEmpty: true,
                        max: 500,
                }
        }
});

Question.sync({force: false}).then(() => console.log('tabela criada'))

module.exports = Question;