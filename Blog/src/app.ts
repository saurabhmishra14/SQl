import express, { Application } from "express";
import dotenv from "dotenv";
import { sequelizeConnection as db } from "./utility/database";
import middleware from "./middleware/middleware";
import controller from "./controller/blogcontrollers"

dotenv.config();
const app: Application = express();
const Port = process.env.DB_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sync({
    alter: true
}).then(() => console.log("Connected to the database"))
    .catch((err: Error) => console.log(err));

app.post('/blog', middleware.validateSchema, controller.postBlog);
app.get('/blog', controller.readBlogs);
app.get('/blog/:blogID',middleware.validateBlogID,controller.readBlog);
app.put('/blog/:blogID', middleware.validateBlogID, controller.editBlog);
app.delete('/blog/:blogID', middleware.validateBlogID, controller.removeBlog);

app.listen(Port, () => {
    console.log(`The server is running at http://localhost:${Port}/`);
});
