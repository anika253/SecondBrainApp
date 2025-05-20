import express from "express";
import mongoose from "mongoose";
import { UserModel } from "./db";
import { ContentModel } from "./db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";

const app = express();

app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    await UserModel.create({
      username: username,
      password: password,
    });
    res.json({
      message: "user created successfully",
    });
  } catch (error) {
    res.status(411).json({
      message: "user already exists",
    });
  }
});
app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const existingUser = await UserModel.findOne({
      username,
      password,
    });

    if (existingUser) {
      const token = jwt.sign(
        {
          id: existingUser._id,
        },
        JWT_PASSWORD
      );

      res.json({
        token,
      });
    } else {
      res.status(403).json({
        message: "Incorrect credentials",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const { link, type } = req.body;

  try {
    const content = await ContentModel.create({
      link,
      type,
      userId: req.userId, // set by middleware
    });

    res.json({
      message: "Content created successfully",
      content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create content" });
  }
});

app.delete("./api/v1/content", (req, res) => {});
app.post("api/v1/brain/share", (req, res) => {});
app.get("api/v1/brain/:shareLink", (req, res) => {});
app.listen(3000);
