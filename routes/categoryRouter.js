const categoryController = require("../controllers/categoryController");

const { Router } = require("express");

const categoryRouter = Router();

// Render views/category.ejs
categoryRouter.get("/", categoryController.getCategories);

module.exports = categoryRouter;