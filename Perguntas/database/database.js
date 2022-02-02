const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas",'root','Buzato42', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;