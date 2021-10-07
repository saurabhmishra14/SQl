"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogFunc_1 = __importDefault(require("../services/blogFunc"));
function postBlog(req, res) {
    blogFunc_1.default.insertBlog(req.body.title, req.body.description)
        .then(() => res.send("Created"))
        .catch((error) => res.send(error));
}
function readBlog(req, res) {
    blogFunc_1.default.getBlog()
        .then((blog) => res.send(blog));
}
function removeBlog(req, res) {
    let blogID = +req.params.blogID;
    blogFunc_1.default.deleteBlog(blogID)
        .then(() => res.send("Deleted"));
}
function editBlog(req, res) {
    const blogID = +req.params.blogID;
    blogFunc_1.default.updateBlog(blogID, req.body.title, req.body.description)
        .then(() => res.send("Updated"));
}
exports.default = {
    postBlog,
    readBlog,
    removeBlog,
    editBlog
};
