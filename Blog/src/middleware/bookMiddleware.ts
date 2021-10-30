import { Request, Response, NextFunction } from "express";
import bookServices from "../services/bookServices";
import userServices from "../services/userServices";
import jwt from "jsonwebtoken";
import config from "../config/default";
import { Message as message } from "../constant/message";

async function validateBookSchema(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    await bookServices.validateBookSchema(
      req.body.bookName,
      req.body.authorName,
      req.body.bookSummary 
    );
    next();
  } catch (e) {
    next(`${e}`);
  }
}

async function validateChangedBookSchema(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    await bookServices.validateChangedBookSchema(
      req.body.bookName,
      req.body.authorName,
      req.body.bookSummary 
    );
    next();
  } catch (e) {
    next(`${e}`);
  }
}

async function authenticateToken(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const token: any = req.body.token || req.headers.authorization?.split(" ")[1]|| req.headers.token;
  if (!token) {
    throw new Error(message.tokenRequired);
  }
  try {
    const decoded = jwt.verify(token, config.SECRET);
    const userName = Object.values(decoded)[0];
    const user: any = await userServices.verifyUser(userName);
    req.body.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

export default{
  validateBookSchema,
  validateChangedBookSchema,
  authenticateToken
}