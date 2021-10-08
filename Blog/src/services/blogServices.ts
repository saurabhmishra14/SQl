import schemas from "../validator/schema";
import { BlogInstance as Blog } from "../model/blogModel"


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

async function insertBlog(title: string, description: Text) {
    return (Blog.create({
        title: title,
        description: description
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

export default {
    validateBlogs,
    validateID,
    insertBlog,
    deleteBlog,
    getBlog,
    getBlogs,
    updateBlog
}