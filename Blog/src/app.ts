import express, { Application } from "express";
import dotenv from "dotenv";
import { sequelizeConnection as db } from "./utility/database";
import middleware from "./middleware/middleware";
import controller from "./controller/blogcontrollers";
import bcrypt from "bcrypt";

dotenv.config();
const app: Application = express();
const Port = process.env.DB_PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sync({
    alter: true
}).then(() => console.log("Connected to the database"))
    .catch((err: Error) => console.log(err));

app.post('/blog/register',middleware.validateUserDetails,controller.insertUser);
app.post('/blog/login',middleware.authenticateLoginCredential,middleware.authenticateToken);
app.post('/blog/create',[ middleware.authenticateToken,middleware.validateBlogSchema],controller.postBlog);
app.get('/blog/read',middleware.authenticateToken ,controller.readBlogs);
app.get('/blog/:blogID',[middleware.authenticateToken,middleware.validateBlogID],controller.readBlog);
app.put('/blog/:blogID', [middleware.authenticateToken,middleware.validateBlogID], controller.editBlog);
app.delete('/blog/:blogID',[middleware.authenticateToken ,middleware.validateBlogID], controller.removeBlog);

app.listen(Port, () => {
    console.log(`The server is running at http://localhost:${Port}/`);
});
