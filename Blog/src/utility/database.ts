import { Dialect, Sequelize } from "sequelize";

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbDialect = process.env.DB_DIALECT as Dialect;

export const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDialect,
  host: dbHost,
});

