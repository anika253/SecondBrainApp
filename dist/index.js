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
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const db_2 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const db_3 = require("./db");
const utils_1 = require("./utils");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        yield db_1.UserModel.create({
            username: username,
            password: password,
        });
        res.json({
            message: "user created successfully",
        });
    }
    catch (error) {
        res.status(411).json({
            message: "user already exists",
        });
    }
}));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const existingUser = yield db_1.UserModel.findOne({
            username,
            password,
        });
        if (existingUser) {
            const token = jsonwebtoken_1.default.sign({
                id: existingUser._id,
            }, config_1.JWT_PASSWORD);
            res.json({
                token,
            });
        }
        else {
            res.status(403).json({
                message: "Incorrect credentials",
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
}));
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { link, type } = req.body;
    try {
        const content = yield db_2.ContentModel.create({
            link,
            type,
            userId: req.userId, // set by middleware
        });
        res.json({
            message: "Content created successfully",
            content,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create content" });
    }
}));
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const content = yield db_2.ContentModel.find({ userId: req.userId });
        res.json(content);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch content" });
    }
}));
app.delete("./api/v1/content", middleware_1.userMiddleware, (req, res) => { });
app.post("api/v1/brain/share", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const share = req.body.share;
    if (share) {
        yield db_3.LinkModel.create({
            userId: req.userId,
            hash: (0, utils_1.random)(10),
        });
    }
    else {
        db_3.LinkModel.deleteOne({
            userId: req.userId,
        });
    }
    res.json({
        message: "Link created successfully",
    });
}));
app.get("api/v1/brain/:shareLink", (req, res) => { });
app.listen(3000);
