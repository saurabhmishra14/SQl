import services from "../services/blogServices";
import { Request, Response } from "express";
import { Message as message } from "../constant/message";

async function postBlog(req: Request, res: Response) {
  try {
    const user = req.body.user;
    await services.insertBlog(
      req.body.title,
      req.body.description,
      user.userID
    );
    res.send(message.blogSaved);
  } catch (error) {
    res.send(`${message.errorPostBlog} \n ${error}`);
  }
}

async function readBlogs(_req: Request, res: Response) {
  try {
    const blogs = await services.getBlogs();
    res.send(blogs);
  } catch (error) {
    res.send(`${message.unFetch} \n ${error}`);
  }
}

async function readBlog(req: Request, res: Response) {
  try {
    const user = req.body.user;
    const blog = await services.getBlog(user.userID);
    if (!blog) {
      throw new Error(message.notFound);
    }
    res.send(blog);
  } catch (error) {
    res.send(`${message.unFetch}\n ${error}`);
  }
}

async function removeBlog(req: Request, res: Response) {
  try {
    const user = req.body.user;
    if (!user) {
      throw new Error(message.notFound);
    }
    const userID = user.userID;
    const blogID = +req.params.blogID;
    const blog: any = await services.findBlog(blogID);
    if (!blog) {
      throw new Error(message.blogNotFound);
    }
    const userID1 = blog.userID;
    if (userID === userID1) {
      const result = await services.deleteBlog(blogID);
      if (!result) {
        throw new Error(message.Deleted);
      }
      res.send(message.blogDeleted);
    }
    else{
      throw new Error(message.cannotDeleteElse);
    }
  } catch (error) {
    res.send(`${message.notDeleted} \n ${error}`);
  }
}

async function editBlog(req: Request, res: Response) {
  try {
    const user = req.body.user;
    if (!user) {
      throw new Error(message.notFound);
    }
    const userID = user.userID;
    const blogID = +req.params.blogID;
    const blog: any = await services.findBlog(blogID);
    if (!blog) {
      throw new Error(message.blogNotFound);
    }
    const userID1 = blog.userID;
    if (userID === userID1) {
      await services.updateBlog(blogID, req.body.title, req.body.description);
      res.send(message.updated);
    } else {
      throw new Error(message.cannotEdit);
    }
  } catch (error) {
    res.send(`${message.cannotUpdate} \n ${error}`);
  }
}

function fileUpload(req: Request, res: Response) {
  try {
    res.send(req.file);
  } catch (error) {
    res.send(error);
  }
}

export default {
  postBlog,
  readBlog,
  readBlogs,
  removeBlog,
  editBlog,
  fileUpload,
};
