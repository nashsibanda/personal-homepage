const express = require("express");
const { model } = require("mongoose");
const projectsRouter = express.Router();

const Project = require("../models/Project");

// GET all projects
projectsRouter.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// GET a single project
projectsRouter.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).end();
  }
});

// POST a new project
projectsRouter.post("/", async (req, res, next) => {
  const body = req.body;
  const newProject = new Project({
    title: body.title,
    description: body.description,
    repositoryUrl: body.repositoryUrl,
    deployedUrl: body.deployedUrl,
    gallery: body.gallery,
    technologies: body.technologies,
    dateCompleted: body.dateCompleted,
  });

  try {
    const result = await newProject.save();
    res.status(201).json(result);
  } catch (err) {
    return next(err);
  }
});

module.exports = projectsRouter;

/*  */
