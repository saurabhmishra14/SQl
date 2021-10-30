import services from "../services/blogServices";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/default";
import { Message as message } from "../constant/message";
import userServices from "../services/userServices";

async function validateBlogSchema(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    await services.validateBlogs(req.body.title, req.body.description);
    next();
  } catch (e) {
    next(`${e}`);
  }
}

async function validateChangedBlogSchema(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    await services.validateChangedBlogs(req.body.title, req.body.description);
    next();
  } catch (e) {
    next(`Error: ${e}`);
  }
}

async function validateBlogID(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    await services.validateID(+req.params.blogID);
    next();
  } catch (e) {
    next(e);
  }
}

async function authenticateToken(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const token: any =
    req.body.token ||
    req.headers.authorization?.split(" ")[1] ||
    req.params.token ||
    req.headers.token;
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

export default {
  validateBlogSchema,
  validateChangedBlogSchema,
  validateBlogID,
  authenticateToken,
};
