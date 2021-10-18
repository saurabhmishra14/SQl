import middleware from "../middleware/middleware";
import controller from "../controller/blogcontrollers";
import { Router } from "express";

export const router: Router = Router();
router.post('/register', middleware.validateUserDetails, controller.insertUser);
router.post('/login', middleware.authenticateLoginCredential, controller.blogLogin);
