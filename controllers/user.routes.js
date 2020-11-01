const express = require("express");
const { model } = require("mongoose");
const userRouter = express.Router();

const User = require("../models/User");

// GET user
userRouter.get("/", async (req, res) => {
  const user = await User.findOne();
  res.json(user);
});

// POST a new user
// userRouter.post("/", async (req, res, next) => {
//   const body = req.body;
//   const newUser = new User({
//     name: body.name,
//     headline: body.headline,
//     bio: body.bio,
//     resumes: body.resumes,
//     siteUrl: body.siteUrl,
//     links: body.links,
//     profilePicture: body.profilePicture,
//     logo: body.logo,
//   });

//   try {
//     const result = await newUser.save();
//     res.status(201).json(result);
//   } catch (err) {
//     return next(err);
//   }
// });

module.exports = userRouter;
