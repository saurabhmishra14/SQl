import schemas from "../validator/schema";
import { BlogInstance as Blog } from "../model/model"


async function validate(title: string, description: string) {
    const post = {
        title: title,
        description: description
    };
    await schemas.blogPOST.validateAsync(post);
}

async function validateID(blogID: Number) {
    const post = {
        blogID: blogID
    };
    await schemas.blogID.validateAsync(post);
}

async function insertBlog(title: string, description: Text) {
    await Blog.create({
        title: title,
        description: description
    });
}

async function deleteBlog(blogID: number) {
    await Blog.destroy({
        where: {
            blogID: blogID
        }
    });
}

async function getBlog() {
    const blog = await Blog.findAll();
    console.log("Blogs  are", JSON.stringify(blog, null, 2));
    return blog;
}

async function updateBlog(blogID: number, title: string, description: Text) {
    await Blog.update({
        title: title,
        description: description
    }, {
        where: {
            blogID: blogID
        }
    });
}

export default {
    validate,
    validateID,
    insertBlog,
    deleteBlog,
    getBlog,
    updateBlog
}