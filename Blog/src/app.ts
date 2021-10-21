import express, { Application } from "express";
import { sequelizeConnection as db } from "./utility/database";
import config from "../src/config/default";
import { router as blog } from "./router/blogRoutes";
import { router as user } from "./router/userRoutes";
import { router as upload } from "./router/uploadRoutes";
import ejs from "ejs";

const app: Application = express();
const Port = config.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

db.sync({
  alter: true,
});

app.use("/blog", blog);
app.use("/user", user);
app.use("/upload",upload);
app.listen(Port, () => {
  console.log(`The server is running at http://localhost:${Port}/`);
});
