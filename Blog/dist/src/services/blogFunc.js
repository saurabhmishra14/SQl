"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../validator/schema"));
const model_1 = require("../model/model");
function validate(title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = {
            title: title,
            description: description
        };
        yield schema_1.default.blogPOST.validateAsync(post);
    });
}
function validateID(blogID) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = {
            blogID: blogID
        };
        yield schema_1.default.blogID.validateAsync(post);
    });
}
function insertBlog(title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        yield model_1.BlogInstance.create({
            title: title,
            description: description
        });
    });
}
function deleteBlog(blogID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield model_1.BlogInstance.destroy({
            where: {
                blogID: blogID
            }
        });
    });
}
function getBlog() {
    return __awaiter(this, void 0, void 0, function* () {
        const blog = yield model_1.BlogInstance.findAll();
        console.log("Blogs  are", JSON.stringify(blog, null, 2));
        return blog;
    });
}
function updateBlog(blogID, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        yield model_1.BlogInstance.update({
            title: title,
            description: description
        }, {
            where: {
                blogID: blogID
            }
        });
    });
}
exports.default = {
    validate,
    validateID,
    insertBlog,
    deleteBlog,
    getBlog,
    updateBlog
};
