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
const blogFunc_1 = __importDefault(require("../services/blogFunc"));
function validateSchema(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            blogFunc_1.default.validate(req.body.title, req.body.description);
        }
        catch (e) {
            console.log("Error in the validate" + e);
        }
        next();
    });
}
function validateRequired(req, res, next) {
    try {
        blogFunc_1.default.validateID(+req.params.blogID);
    }
    catch (e) {
        console.log("Error in the validate" + e);
    }
    next();
}
exports.default = {
    validateSchema,
    validateRequired
};
