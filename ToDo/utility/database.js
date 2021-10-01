const Sequelize = require("sequelize");

const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize("ToDoList", "root",process.env.password, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
