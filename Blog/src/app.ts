import express, { Application, Request , Response } from "express";
import { sequelizeConnection as db } from "./utility/database";
import config from "../src/config/default";
import { router as blog } from "./router/blogRoutes";
import { router as user } from "./router/userRoutes";
import { router as upload } from "./router/uploadRoutes";
import { router as books }  from "./router/bookRoutes"
import run from "./utility/bookDatabase";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
   
const app: Application = express();
const Port = config.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

/* db.sync({
  alter: true,
});
 */

run().catch(err => console.log(err));

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: '1.0.0',
      contact: {
        name: "Saurabh Mishra", 
        email: "msaurabh451@gmail.com", 
      },
    },
  },
  apis: ["./src/swagger.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/blog", blog);
app.use("/user", user);
app.use("/upload",upload);
app.use("/books",books);

app.listen(Port, () => {
  console.log(`The server is running at http://localhost:${Port}/`);
});

export default app;