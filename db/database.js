const { Sequelize } = require('sequelize');
const db = new Sequelize('bakingqa','root','DevLuiza',{
        host: 'localhost',
        dialect: 'mysql'
});

module.exports = db;