import middleware from "../middleware/blogMiddleware";
import controller from "../controller/blogControllers"
import { Router, Request ,Response } from "express";

export const router: Router = Router();
/**
    * @swagger
    * /blog:
    *  get:
    *    description: Use to request all customers
    *    requestBody:
    *       required: true
    *    responses:
    *      '200':
    *        description: A successful response
    */
 
router.post('/', middleware.authenticateToken, middleware.validateBlogSchema, controller.postBlog);
router.get('/',middleware.authenticateToken, controller.readBlogs);
router.put('/:blogID', middleware.authenticateToken,middleware.validateChangedBlogSchema, controller.editBlog);
router.delete('/:blogID', middleware.authenticateToken, controller.removeBlog);
