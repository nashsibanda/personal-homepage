const express = require("express");
const { model } = require("mongoose");
const blogRouter = express.Router();

const BlogPost = require("../models/Blog_Post");

// GET all blog posts
blogRouter.get("/", async (req, res) => {
  const blogPosts = await BlogPost.find().sort({ createdAt: -1 });
  res.json(blogPosts);
});

// GET a single blog post
blogRouter.get("/:id", async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);
  if (blogPost) {
    res.json(blogPost);
  } else {
    res.status(404).end();
  }
});

// POST a new blog post
// blogRouter.post("/", async (req, res, next) => {
//   const body = req.body;
//   const newBlogPost = new BlogPost({
//     title: body.title,
//     body: body.body,
//     gallery: body.gallery,
//   });

//   try {
//     const result = await newBlogPost.save();
//     res.status(201).json(result);
//   } catch (err) {
//     return next(err);
//   }
// });

module.exports = blogRouter;
