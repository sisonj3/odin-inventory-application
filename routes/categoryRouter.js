const categoryController = require("../controllers/categoryController");

const { Router } = require("express");

const categoryRouter = Router();

// Render views/category.ejs
categoryRouter.get("/", categoryController.getCategories);

// Render new category form
categoryRouter.get("/new", categoryController.newCategoryForm);

// Update database and redirect to "/category"
categoryRouter.post("/new", categoryController.updateCategoryDatabase);

module.exports = categoryRouter;