import schemas from "../validator/schema";
import { BlogInstance as Blog } from "../model/blogModel";
import bcrypt from "bcrypt";

function validateBlogs(title: string, description: string) {
  const post = {
    title: title,
    description: description,
  };
  return schemas.blogPOST.validateAsync(post);
}

function validateChangedBlogs(title: string, description: string) {
  const post = {
    title: title,
    description: description,
  };
  return schemas.blogPOST1.validateAsync(post);
}

function validateID(blogID: Number) {
  const post = {
    blogID: blogID,
  };
  return schemas.blogID.validateAsync(post);
}

function insertBlog(title: string, description: Text, userID: number) {
  return Blog.create({
    userID: userID,
    title: title,
    description: description,
  });
}

function deleteBlog(blogID: number) {
  return Blog.destroy({
    where: {
      blogID: blogID,
    },
  });
}

function getBlogs() {
  return Blog.findAll();
}

function getBlog(blogID: number) {
  return Blog.findOne({
    where: {
      blogID: blogID,
    },
  });
}

function updateBlog(blogID: number, title?: string, description?: Text) {
  if (typeof title === undefined) {
    return Blog.update(
      {
        description: description,
      },
      {
        where: {
          blogID: blogID,
        },
      }
    );
  } else if (typeof description === undefined) {
    return Blog.update(
      {
        title: title,
      },
      {
        where: {
          blogID: blogID,
        },
      }
    );
  } else
    return Blog.update(
      {
        title: title,
        description: description,
      },
      {
        where: {
          blogID: blogID,
        },
      }
    );
}

function encryption(password: string) {
  return bcrypt.hash(password, 10);
}

function findBlog(blogID: number){
  return Blog.findOne({
    where:{
      blogID: blogID
    }
  })
}

export default {
  validateBlogs,
  validateChangedBlogs,
  validateID,
  insertBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
  encryption,
  findBlog
};
