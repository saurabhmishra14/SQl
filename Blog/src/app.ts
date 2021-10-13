import express, { Application } from "express";
import { sequelizeConnection as db } from "./utility/database";
import middleware from "./middleware/middleware";
import controller from "./controller/blogcontrollers";
import config from "../src/config/default";

const app: Application = express();
const Port = config.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sync({
    alter: true
})

app.post('/blog/register', middleware.validateUserDetails, controller.insertUser);
app.post('/blog/login', middleware.authenticateLoginCredential, controller.blogLogin);
app.post('/blog/create', [middleware.authenticateToken, middleware.validateBlogSchema], controller.postBlog);
app.get('/blog/readBlogs', middleware.authenticateToken, controller.readBlogs);
app.get('/blog/read/', middleware.authenticateToken, controller.readBlog);
app.put('/blog/update/', middleware.authenticateToken, controller.editBlog);
app.delete('/blog/delete/', middleware.authenticateToken, controller.removeBlog);

app.listen(Port, () => {
    console.log(`The server is running at http://localhost:${Port}/`);
});
