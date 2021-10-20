import  { Request } from "express";
import config from "../config/default";
import { Message as message } from "../constant/message";
import multer from "multer";
import AWS from "aws-sdk";
import multerS3 from "multer-s3";
import path from "path";

function fileUploads(){
  const s3 = new AWS.S3({
    accessKeyId: config.AWS_ACCESS_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  });
  
  const storage = multerS3({
    s3: s3,
    bucket: "fileuploading12",
    metadata: (_req: Request, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req: Request, file, cb) => {
      const user = req.body.user;
      cb(
        null,
        user + Date.now().toString() + path.extname(file.originalname)
      );
    },
  });
  
  const fileUpload = multer({
    storage: storage,
    limits: {
      fileSize: 1000000, // 1000000 Bytes = 1 MB
    },
    fileFilter: (_req: Request, file, cb) => {
      if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
        // upload only png and jpg format
        return cb(new Error(message.errUploading));
      }
      cb(null, true);
    },
  });
  return fileUpload.single('avatar');
  }
  
  export default {
    fileUploads
  }