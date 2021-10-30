import middleware from "../middleware/userMiddleware";
import controller from "../controller/userControllers";
import { Router } from "express";

export const router: Router = Router();
router.post('/register', middleware.validateUserDetails,middleware.emailAuthentication, controller.insertUser);
router.post('/login', middleware.authenticateLoginCredential, controller.userLogin);
