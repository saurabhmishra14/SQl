import nodemailer from "nodemailer";
import config from "../config/default";

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

export default {
  transporter
}