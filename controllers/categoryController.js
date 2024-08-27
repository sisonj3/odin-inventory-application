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

const updateCategoryDatabase = asyncHandler(async (req, res) => {
    console.log(req.body);

    await db.addCategory(req.body.categoryName);

    res.redirect("/category");
});

module.exports = {
    getCategories,
    newCategoryForm,
    updateCategoryDatabase
};