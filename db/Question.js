const { Sequelize } = require("sequelize");
const db = require("./database");

const Question = db.define('question',{
        id:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
        },
        title:{
                type: Sequelize.STRING,
                allowNull: false,
        },
        description:{
                type: Sequelize.TEXT,
                allowNull: false,
        }
});

Question.sync({force: false}).then(() => console.log('tabela criada'))

module.exports = Question;