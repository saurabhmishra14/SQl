"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConnection = void 0;
const sequelize_1 = require("sequelize");
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbDialect = process.env.DB_DIALECT;
exports.sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    dialect: dbDialect,
    host: dbHost,
});
