import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

// Extend Express Request interface to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}
export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res
      .status(403)
      .json({ message: "Authorization header missing or malformed" });
    return; // ✅ just return void
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_PASSWORD) as { id: string };
    req.userId = decoded.id;
    next(); // ✅ allowed
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
    return; // ✅ return void, not a Response
  }
};

