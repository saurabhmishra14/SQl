import nodemailer from "nodemailer";
import config from "../config/default";
import schemas from "../validator/schema";
import { UserInstance as User } from "../model/userModel";
import bcrypt from "bcrypt";

function transporter(){
  const transporter = nodemailer.createTransport({
    host: "smtp.googlemail.com",
    port: 465,
    secure: true,
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
 return transporter;  
}

function validateUserLogin(userName: string, password: string) {
  const post = {
    userName: userName,
    password: password,
  };
  return schemas.userINFO.validateAsync(post);
}

function validateUserDetails(userInformation: any) {
  const post = {
    userName: userInformation.userName,
    password: userInformation.password,
    firstName: userInformation.firstName,
    lastName: userInformation.lastName,
    email: userInformation.email,
  };
  return schemas.userINFO.validateAsync(post);
}

async function insertUser(userInformation: any) {
  const password = await encryption(userInformation.password);
  return User.create({
    userName: userInformation.userName,
    password: password,
    firstName: userInformation.firstName,
    lastName: userInformation.lastName,
    email: userInformation.email,
  });
}

function verifyUser(userName: string) {
  return User.findOne({
    where: {
      userName: userName,
    },
  });
}

function encryption(password: string) {
  return bcrypt.hash(password, 10);
}

export default {
  transporter,
  validateUserLogin,
  validateUserDetails,
  insertUser,
  verifyUser
}