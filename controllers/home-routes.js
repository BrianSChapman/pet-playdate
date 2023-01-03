const router = require("express").Router();

router.get("/home", (req, res) => {
  res.render("homepage");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/playdateform", (req, res) => {
  res.render("playdateform");
});
module.exports = router;
