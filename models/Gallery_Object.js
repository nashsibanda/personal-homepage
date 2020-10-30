const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GaleryObjectSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 160,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = GaleryObjectSchema;
