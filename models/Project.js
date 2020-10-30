const mongoose = require("mongoose");
const GaleryObjectSchema = require("./Gallery_Object");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    oneLineDescription: {
      type: String,
      required: true,
      maxlength: 80,
    },
    description: {
      type: String,
      required: true,
    },
    repositoryUrl: {
      type: String,
    },
    deployedUrl: {
      type: String,
    },
    gallery: [GaleryObjectSchema],
    mainImage: { type: String },
    technologies: [{ type: String }],
    dateCompleted: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Project = mongoose.model("Project", ProjectSchema);
