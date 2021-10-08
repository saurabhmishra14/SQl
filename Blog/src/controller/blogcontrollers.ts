import services from "../services/blogServices";
import { Request, Response } from "express";

async function postBlog(req: Request, res: Response) {
        try {
                await services.insertBlog(
                        req.body.title,
                        req.body.description)
                res.send("Created");

        }
        catch (error) {
                res.send(`Error get caught! \n ${error}`)
        }
}

async function readBlogs(req: Request, res: Response) {

        try {
                const blogs = await services.getBlogs()
                res.send(blogs);
        }
        catch (error) {
                res.send(`Error get caught! \n ${error}`);
        }
}

async function readBlog(req: Request, res: Response) {
        try {
                const blogID = +req.params.blogID;
                const blog = await services.getBlog(blogID);
                if(blog === null){
                        throw new SyntaxError("Blog with this Blog ID is not Present");
                }
                res.send(blog);

        }
        catch (error) {
                res.send(`Error get caught! \n ${error}`);
        }
}

async function removeBlog(req: Request, res: Response) {
        try {
                const blogID: number = +req.params.blogID;
                const result = await services.deleteBlog(blogID);
                if (result === 0) {
                        throw new SyntaxError("Blog is already deleted")
                }
                res.send("Deleted");
        }
        catch (error) {

                res.send(`Error get caught! \n ${error}`);
        }
}

async function editBlog(req: Request, res: Response) {
        try {
                const blogID = +req.params.blogID;
                await services.updateBlog(blogID, req.body.title,
                        req.body.description)
                res.send("Updated");
        }
        catch (error) {

                res.send(`Error get caught! \n ${error}`);
        }
}


export default {
        postBlog,
        readBlog,
        readBlogs,
        removeBlog,
        editBlog
}
