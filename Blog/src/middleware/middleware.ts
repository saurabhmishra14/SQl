import schema from "../validator/schema";
import services from "../services/blogServices";
import express, { Request, Response, Application, NextFunction } from "express";

async function validateSchema(req: Request, res: Response, next: NextFunction) {
    try {
        const results = await services.validateBlogs(req.body.title, req.body.description);
        next();
    }
    catch (e) {
        res.send(`Error get caught! \n ${e}`);
    }
}

async function validateBlogID(req: Request, res: Response, next: NextFunction) {
    try {
        await services.validateID(+req.params.blogID);
        next();
    }
    catch (e) {
        res.send(`Error get caught! \n ${e}`);
    }
}
 
export default {
    validateSchema,
    validateBlogID
}
