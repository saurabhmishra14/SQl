import schema from "../validator/schema";
import services from "../services/blogFunc";
import express, { Request, Response, Application, NextFunction } from "express";

async function validateSchema(req: Request, res: Response, next: NextFunction) {
    try {
            services.validate(req.body.title, req.body.description);
    }
    catch (e) {
        console.log("Error in the validate"+e);
    }

    next();
}

function validateRequired(req: Request,res: Response,next: NextFunction){
    try {
        services.validateID(+req.params.blogID);
}
catch (e) {
    console.log("Error in the validate"+e);
}
next();
}

export default {
    validateSchema,
    validateRequired
}
