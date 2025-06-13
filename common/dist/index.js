"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogSchema = exports.BlogSchema = exports.SigninSchema = exports.SingupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.SingupSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    name: zod_1.default.string(),
    password: zod_1.default.string(),
});
exports.SigninSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string()
});
exports.BlogSchema = zod_1.default.object({
    title: zod_1.default.string().min(1),
    content: zod_1.default.string().min(1),
});
exports.UpdateBlogSchema = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string().min(1),
    content: zod_1.default.string().min(1),
});
