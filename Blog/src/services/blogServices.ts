import schemas from "../validator/schema";
import { BlogInstance as Blog } from "../model/blogModel"
import { UserInstance as User } from "../model/userModel"
import { useInflection } from "sequelize/types";
import bcrypt from "bcrypt";

async function validateUserLogin(userName: string, password: string) {
    const post = {
        userName: userName,
        password: password
    };
    return (schemas.userINFO.validateAsync(post));
}

async function validateUserDetails(userInformation: any) {
    const post = {
        userName: userInformation.userName,
        password: userInformation.password,
        firstName: userInformation.firstName,
        lastName: userInformation.lastName,
        email: userInformation.email
    };
    return (schemas.userINFO.validateAsync(post));
}


async function validateBlogs(title: string, description: string) {
    const post = {
        title: title,
        description: description
    };
    return (schemas.blogPOST.validateAsync(post));
}

async function validateID(blogID: Number) {
    const post = {
        blogID: blogID
    };
    return (schemas.blogID.validateAsync(post));
}

async function insertBlog(title: string, description: Text, userID: number) {
    return (Blog.create({
        userID: userID,
        title: title,
        description: description
    }));
}

async function insertUser(userInformation: any) {
    const password = await encryption(userInformation.password);
    return (User.create({
        userName: userInformation.userName,
        password: password,
        firstName: userInformation.firstName,
        lastName: userInformation.lastName,
        email: userInformation.email
    }));
}

async function deleteBlog(blogID: number) {
    return (Blog.destroy({
        where: {
            blogID: blogID
        }
    }));
}

async function getBlogs() {
    return (Blog.findAll());
}

async function getBlog(blogID: number) {
    return (Blog.findOne({
        where: {
            blogID: blogID
        }
    }));
}

async function verifyUser(userName: string,password: string) {
    return (User.findOne({
        where: {
            userName: userName,
            password: password
        }
    }));
}


async function updateBlog(blogID: number, title?: string, description?: Text) {
    if (typeof (title) === undefined) {
        return (Blog.update({
            description: description
        }, {
            where: {
                blogID: blogID
            }
        }));
    }

    else
        if (typeof (description) === undefined) {
            return (Blog.update({
                title: title,

            }, {
                where: {
                    blogID: blogID
                }
            }));
        }

        else
            return (Blog.update({
                title: title,
                description: description
            }, {
                where: {
                    blogID: blogID

                }
            }));
}


async function encryption(password: string) {

    return (bcrypt.hash(password, 10))
}

async function decryption(password: string) {

    return (bcrypt.hash(password, 10))

}

export default {
    validateBlogs,
    validateID,
    insertBlog,
    deleteBlog,
    getBlog,
    getBlogs,
    updateBlog,
    validateUserLogin,
    validateUserDetails,
    insertUser,
    encryption,
    verifyUser
}