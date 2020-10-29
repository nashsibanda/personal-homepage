const mongoose = require("mongoose");
const GaleryObjectSchema = require("./Gallery_Object");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  gallery: [GaleryObjectSchema],
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
