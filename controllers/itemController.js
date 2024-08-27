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

const editItemForm = asyncHandler(async (req, res) => {
    // Wait for database to get all categories from table
    const categories = await db.getAllCategories();
    // Wait for database to retrieve item with id#
    const item = await db.getItem(req.params.itemID);

    // Output item to terminal
    console.log(item[0]);

    res.render("editItemForm", { categories: categories, item: item[0] });
});

const addToItemDatabase = asyncHandler(async (req, res) => {
    console.log(req.body);

    await db.addItem(req.body.itemName, req.body.category, req.body.price);

    res.redirect("/item");
});

const updateItemDatabase = asyncHandler(async (req, res) => {
    console.log(req.body);

    await db.editItem(req.params.itemID, req.body.itemName, req.body.category, req.body.price);

    res.redirect("/item");
});

const deleteItemFromDatabase = asyncHandler(async (req, res) => {
    await db.deleteItem(req.params.itemID);
    res.redirect("/item");
});

module.exports = {
    getItems,
    newItemForm,
    addToItemDatabase,
    editItemForm,
    updateItemDatabase,
    deleteItemFromDatabase
};