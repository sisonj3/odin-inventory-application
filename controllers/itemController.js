const db = require("../db/queries");
const asyncHandler = require("express-async-handler");
//const { body, validationResult } = require("express-validator");

const getItems = asyncHandler(async (req, res) => {
    // Wait for database to get all items from table
    const items = await db.getAllItems();

    // items output to terminal
    console.log(items);

    // Pass db query result to item view
    res.render("item", { items: items });

});

const newItemForm = asyncHandler(async (req, res) => {
    // Wait for database to get all categories from table
    const categories = await db.getAllCategories();

    // Output categories to terminal
    console.log(categories);

    res.render("itemForm", { categories: categories });
});

const updateItemDatabase = asyncHandler(async (req, res) => {
    console.log(req.body);
    res.redirect("/item");
});

module.exports = {
    getItems,
    newItemForm,
    updateItemDatabase
};