import { Dialect, Sequelize } from "sequelize";

const DBNAME = process.env.DB_NAME as string;
const DBUSER = process.env.DB_USER as string;
const DBHOST = process.env.DB_HOST as string;
const DBPASSWORD = process.env.DB_PASSWORD as string;
const DBDIALECT = process.env.DB_DIALECT as Dialect;

export const sequelizeConnection = new Sequelize(DBNAME, DBUSER, DBPASSWORD, {
  dialect: DBDIALECT,
  host: DBHOST,
});

