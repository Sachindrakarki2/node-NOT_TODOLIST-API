import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "sachindra Karki",
  });
});

router.post("/", (req, res) => {
  try {
    console.log(req.body);
    res.json({
      message: "Karki",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});
router.put("/", (req, res) => {
  res.json({
    message: "Karki sadas sad asd sa ws",
  });
});
export default router;
