import controller from "../controller/bookControllers";
import  { Router } from "express";
import middleware from "../middleware/bookMiddleware";

export const router: Router = Router(); 

router.post("/",middleware.validateBookSchema,middleware.authenticateToken,controller.insertBookDetails);
router.get('/',middleware.authenticateToken,controller.getBookDetails);
router.delete('/:bookID',middleware.authenticateToken,controller.deleteBookDetails);
router.put('/:bookID',middleware.authenticateToken,middleware.validateChangedBookSchema,controller.updateBookDetails);