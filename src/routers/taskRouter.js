import express from "express";
const router = express.Router();

const fakeDb = [
  {
    _id: 1,
    task: "watching tv",
    hr: 40,
    type: "entry",
  },
];

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "List of the tasks",
    fakeDb,
  });
});

router.post("/", (req, res, next) => {
  try {
    const data = req.body;
    fakeDb.push(data);
    res.json({
      status: "success",
      message: "adding data to the db",
    });
  } catch (error) {
    error.code = 500;

    next(error);
  }
});

router.patch("/", (req, res, next) => {
  const { _id, type } = req.body;
  try {
    fakeDb.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
    });

    res.json({
      status: "success",
      message: "updating data to the db",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.delete("/", (req, res, next) => {
  const _idArg = req.body;
  console.log(_idArg);
  fakeDb = fakeDb.filter(({ _id }) => !_idArg.includes(_id));

  try {
    res.json({
      status: "success",
      message: "successfully deleted",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

export default router;
