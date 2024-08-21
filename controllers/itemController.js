const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const getItems = asyncHandler(async (req, res) => {
    // Wait for database to get all items from table
    const items = await db.getAllItems();

    // items output to terminal
    console.log(items);

    // Pass db query result to item view
    res.render("item", { items: items });

});

module.exports = {
    getItems,
};