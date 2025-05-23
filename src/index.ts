import express from "express";
import mongoose from "mongoose";
import { UserModel } from "./db";
import { ContentModel } from "./db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";
import { LinkModel } from "./db";
import { random } from "./utils";

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

app.get("/api/v1/content", userMiddleware, async (req, res) => {
  try {
    const content = await ContentModel.find({ userId: req.userId });
    res.json(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch content" });
  }
});

app.delete("./api/v1/content", userMiddleware, (req, res) => {});
app.post("api/v1/brain/share", async (req, res) => {
  const share = req.body.share;
  if (share) {
    await LinkModel.create({
      userId: req.userId,
      hash: random(10),
    });
  } else {
    LinkModel.deleteOne({
      userId: req.userId,
    });
  }
  res.json({
    message: "Link created successfully",
  });
});
app.get("api/v1/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;
  const link = await LinkModel.findOne({
    hash: hash,
  });
  if (!link) {
    res.status(411).json({
      message: "sorry incorrect input!",
    });
    return; // Early return
  } else {
    const content = await ContentModel.find({
      userId: link.userId,
    });
    const user = await UserModel.findOne({
      _id: link.userId,
    });
    res.json({
      username: user?.username,
      content: content,
    });
  }
});
app.listen(3000);
