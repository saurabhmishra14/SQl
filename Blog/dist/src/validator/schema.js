"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schemas = {
    blogPOST: joi_1.default.object().keys({
        title: joi_1.default.string().min(4).required(),
        description: joi_1.default.string().min(4).required()
    }),
    blogID: joi_1.default.object().keys({
        blogID: joi_1.default.number().required()
    })
};
exports.default = schemas;
