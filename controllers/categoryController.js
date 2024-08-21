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

module.exports = {
    getCategories,
};