import services from "../services/blogFunc";
import { Request, Response } from "express";

function postBlog(req: Request, res: Response) {
        services.insertBlog(
                req.body.title,
                req.body.description)
                .then(() => res.send("Created"))
                .catch((error) => res.send(error));

}

function readBlog(req: Request, res: Response) {
        services.getBlog()
                .then((blog) => res.send(blog));
}

function removeBlog(req: Request, res: Response) {
        let blogID: number = +req.params.blogID;
        services.deleteBlog(blogID)
                .then(() => res.send("Deleted"));
}

function editBlog(req: Request, res: Response) {
        const blogID = +req.params.blogID;
        services.updateBlog(blogID, req.body.title,
                req.body.description)
                .then(() => res.send("Updated"));
}



export default {
        postBlog,
        readBlog,
        removeBlog,
        editBlog
}
