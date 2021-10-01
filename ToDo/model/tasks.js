const Sequelize = require("sequelize");

const sequence = require("../utility/database");

const Todo = sequence.define("tasks", {
    id: {
        type: Sequelize.INTEGER,
        autoIncreament: true,
        primaryKey: true
    },

    task: {
        type: Sequelize.STRING,
        allowNull: false
    },

});

module.exports = Todo;