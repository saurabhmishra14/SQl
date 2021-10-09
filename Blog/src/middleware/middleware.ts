import schema from "../validator/schema";
import services from "../services/blogServices";
import express, { Request, Response, Application, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/default"


async function validateBlogSchema(req: Request, res: Response, next: NextFunction) {
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

async function validateUserDetails(req: Request, res: Response, next: NextFunction) {
    try {

        const userInformation = {
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }

        await services.validateUserDetails(userInformation);
        const token = jwt.sign(
            {
                userName: userInformation.userName,
                email: userInformation.email
            },
            config.SECRET);
        console.log(token);
        next();
    }
    catch (e) {
        res.send(`Error get caught! \n ${e}`);
    }
}


async function authenticateLoginCredential(req: Request, res: Response, next: NextFunction) {

    try {
        const userName = req.body.userName;
        const password = req.body.password;
        const email = req.body.email;
        if (!(userName && password)) {
            res.send("All input is required");
        }

        const user = await services.verifyUser(userName, await services.encryption(password));

        const token = jwt.sign(
            {
                userName: userName,
                email: email
            },
            config.SECRET,
        )
        next();

    } catch (err) {
        res.send("Your Error get Caught:" + err);
    }
}

async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.SECRET);
        const userName = decoded;
        console.log(userName);
        res.send(`Welcome to DailyBloging Your Details are '\n'${JSON.stringify(decoded)}`);
        next();
    }

    catch (err) {
        res.send("Invalid Token:"+err);
    }

}

export default {
    validateBlogSchema,
    validateBlogID,
    validateUserDetails,
    authenticateToken,
    authenticateLoginCredential
}
