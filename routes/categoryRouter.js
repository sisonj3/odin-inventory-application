const categoryController = require("../controllers/categoryController");

const { Router } = require("express");

const categoryRouter = Router();

// Render views/category.ejs
categoryRouter.get("/", categoryController.getCategories);

// Render new category form
categoryRouter.get("/new", categoryController.newCategoryForm);

// Update database and redirect to "/category"
categoryRouter.post("/new", categoryController.addToCategoryDatabase);

// Router to edit category form
categoryRouter.get("/edit/:typeID", categoryController.editCategoryForm);

// Update database with new informationn
categoryRouter.post("/edit/:typeID", categoryController.updateCategoryDatabase);

// Router to delete category
categoryRouter.get("/delete/:typeID", categoryController.deleteCategoryFromDatabase);

module.exports = categoryRouter;