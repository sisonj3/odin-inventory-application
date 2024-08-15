const { Router } = require("express");

const categoryRouter = Router();

// Render views/category.ejs
categoryRouter.get("/", (req, res) => res.render("category"));

module.exports = categoryRouter;