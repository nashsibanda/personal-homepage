const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    links: [
      {
        url: { type: String, required: true },
        title: { type: String, required: true },
      },
    ],
    resumes: [
      {
        url: { type: String, required: true },
        title: { type: String, required: true },
      },
    ],
    profilePicture: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    siteUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("User", UserSchema);
