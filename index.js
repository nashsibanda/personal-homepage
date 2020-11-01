require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const errorHandlers = require("./utils/error_middlewares");

const projectsRouter = require("./controllers/projects.routes");
const blogRouter = require("./controllers/blog.routes");
const userRouter = require("./controllers/user.routes");

// App setup
const app = express();
const db = process.env.MONGODB_URI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => console.error(err));

// App middleware
app.use(bodyParser.json(), cors());
app.use(express.static("build"));
// -- Server logging
app.use(
  morgan((tokens, req, res) =>
    [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ")
  )
);
app.use(express.static("build"));

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world! It's NASH!");
});
app.use("/api/projects", projectsRouter);
app.use("/api/blog", blogRouter);
app.use("/api/user", userRouter);

// Error handling
app.use(errorHandlers.unknownEndpoint);
app.use(errorHandlers.errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
