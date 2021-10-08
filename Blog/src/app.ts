import express, { Application } from "express";
import dotenv from "dotenv";
import { sequelizeConnection as db } from "./utility/database";
import middleware from "./middleware/middleware";
import controller from "./controller/controllers"

dotenv.config();
const app: Application = express();
const port = process.env.DB_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sync({
    alter: true
}).then(() => console.log("Connected to the database"))
    .catch((err: Error) => console.log(err));

app.post('/', middleware.validateSchema, controller.postBlog);
app.get('/', controller.readBlog);
app.put('/:blogID', middleware.validateRequired, controller.editBlog);
app.delete('/:blogID', middleware.validateRequired, controller.removeBlog);

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/  `);
});
