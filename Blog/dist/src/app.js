"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./utility/database");
const middleware_1 = __importDefault(require("./middleware/middleware"));
const controllers_1 = __importDefault(require("./controller/controllers"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.DB_PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
database_1.sequelizeConnection.sync({
    alter: true
}).then(() => console.log("Connected to the database"))
    .catch((err) => console.log(err));
app.post('/', middleware_1.default.validateSchema, controllers_1.default.postBlog);
app.get('/', controllers_1.default.readBlog);
app.put('/:blogID', middleware_1.default.validateRequired, controllers_1.default.editBlog);
app.delete('/:blogID', middleware_1.default.validateRequired, controllers_1.default.removeBlog);
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});
