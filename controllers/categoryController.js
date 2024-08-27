const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const getCategories = asyncHandler(async (req, res) => {
    // Wait for database to get all categories from table
    const categories = await db.getAllCategories();

    // Output categories to terminal
    console.log(categories);
    
    // Pass db query result to category
    res.render("category", { categories: categories });
});

const newCategoryForm = (req, res) => {
    res.render("categoryForm");
};

const editCategoryForm = asyncHandler(async (req, res) => {
    // Wait for db to get category with id#
    const type = await db.getCategory(req.params.typeID);

    res.render("editCategoryForm", { type: type[0] });
});

const addToCategoryDatabase = asyncHandler(async (req, res) => {
    console.log(req.body);

    await db.addCategory(req.body.categoryName);

    res.redirect("/category");
});

const updateCategoryDatabase = asyncHandler(async (req, res) => {
    await db.editCategory(req.params.typeID, req.body.categoryName);

    res.redirect("/category");
});

module.exports = {
    getCategories,
    newCategoryForm,
    editCategoryForm,
    addToCategoryDatabase,
    updateCategoryDatabase
};