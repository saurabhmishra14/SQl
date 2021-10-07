"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogInstance = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../utility/database");
class BlogInstance extends sequelize_1.Model {
}
exports.BlogInstance = BlogInstance;
BlogInstance.init({
    blogID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: database_1.sequelizeConnection,
    tableName: "DailyBlogging",
});
