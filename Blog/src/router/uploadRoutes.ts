import controller from "../controller/blogControllers";
import  { Router } from "express";
import uploadServices from "../services/uploadServices";

export const router: Router = Router(); 

router.post("/",uploadServices.fileUploads(),controller.fileUpload);
