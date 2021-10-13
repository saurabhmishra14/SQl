import services from "../services/blogServices";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/default";

async function insertUser(req: Request, res: Response) {
  try {
    const userInformation: object = {
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };

    await services.insertUser(userInformation);
    res.send("Congratulation You are Sucessfully Register!");
  } catch (error) {
    res.send(`Error get caught! \n ${error}`);
  }
}

async function postBlog(req: Request, res: Response) {
  try {
    const token = req.body.token || req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, config.SECRET);
    const userName = Object.values(decoded)[0];
    const user: any = await services.verifyUser(userName);
    await services.insertBlog(
      req.body.title,
      req.body.description,
      user.userID
    );
    res.send("Your Blog is Sucessfully Save!");
  } catch (error) {
    res.send(`Error get caught! \n ${error}`);
  }
}

async function readBlogs(_req: Request, res: Response) {
  try {
    const blogs = await services.getBlogs();
    res.send(blogs);
  } catch (error) {
    res.send(`Error get caught! \n ${error}`);
  }
}

async function readBlog(req: Request, res: Response) {
  try {
    const token = req.body.token || req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, config.SECRET);
    const userName = Object.values(decoded)[0];
    const user: any = await services.verifyUser(userName);
    const blog = await services.getBlog(user.userID);
    if (!blog) {
      throw new Error("Blog with this user ID is not Present");
    }
    res.send(blog);
  } catch (error) {
    res.send(`Error get caught! \n ${error}`);
  }
}

async function removeBlog(req: Request, res: Response) {
  try {
    const token = req.body.token || req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, config.SECRET);
    const userName = Object.values(decoded)[0];
    const user: any = await services.verifyUser(userName);
    if (!user) {
      throw new Error("No user Found");
    }
    const result = await services.deleteBlog(user.userID);
    if (!result) {
      throw new Error("Blog is already deleted or not Present!");
    }
    res.send("Sucessfully Deleted!");
  } catch (error) {
    res.send(`Error get caught! \n ${error}`);
  }
}

async function editBlog(req: Request, res: Response) {
  try {
    const token = req.body.token || req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, config.SECRET);
    const userName = Object.values(decoded)[0];
    const user: any = await services.verifyUser(userName);
    if (!user) {
      throw new Error("No user Found");
    }
    await services.updateBlog(
      user.userID,
      req.body.title,
      req.body.description
    );
    res.send("Sucessfully Updated!");
  } catch (error) {
    res.send(`Error get caught! \n ${error}`);
  }
}

async function blogLogin(_req: Request, res: Response) {
  res.send("Welcome to Your Daily Blogging Account 🙏🏻");
}

export default {
  postBlog,
  readBlog,
  readBlogs,
  removeBlog,
  editBlog,
  insertUser,
  blogLogin,
};
