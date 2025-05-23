"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const userMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res
            .status(403)
            .json({ message: "Authorization header missing or malformed" });
        return; // ✅ just return void
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_PASSWORD);
        req.userId = decoded.id;
        next(); // ✅ allowed
    }
    catch (err) {
        res.status(403).json({ message: "Invalid token" });
        return; // ✅ return void, not a Response
    }
};
exports.userMiddleware = userMiddleware;
