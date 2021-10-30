import userServices from "../services/userServices";
import { Request, Response } from "express";
import { Message as message } from "../constant/message";
import ejs from "ejs";

async function insertUser(req: Request, res: Response) {
  try {
    const userInformation: object = {
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };
    const token = req.body.token;
    await userServices.insertUser(userInformation);
    res.header("auth-token",token).send(message.registered);
    ejs.renderFile(
      __dirname + "/../view/email.ejs",
      { name: req.body.firstName },
      function (_err, data) {
        var mainOptions = {
          from: "saurabh@newput.com",
          to: req.body.email,
          subject: "Welcome Mail",
          html: data,
        };
        userServices.transporter().sendMail(mainOptions, function (_err, info) {
          console.log("Message sent: " + info.response);
        });
      }
    );
  } catch (error) {
    res.send(message.unregister + "\n" + error);
  }
}

async function userLogin(req: Request, res: Response) {
  try {
    const token = req.body.token;
    res.header("auth-token",token).send(message.welcome);
  } catch (error) {
    res.send(`${message.unlogged} \n ${error}`);
  }
}

export default{
  insertUser,
  userLogin
}
