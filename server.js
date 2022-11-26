import express from "express";
const app = express();
const PORT = 8000;

// middlewares
app.use(express.json());

import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/tasks", taskRouter);
//handle all uncaught router request
app.use("*", (res, req) => {
  //   res.statusCode(400).json({
  //     status: "error",
  //     message: " 404 page not found",
  //   });
  // });
  const error = {
    status: "error",
    message: " 404 page not found",
  };

  next(error);
});
//global error Hadeler

app.use((error, req, res, next) => {
  const statusCode = error.body || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
