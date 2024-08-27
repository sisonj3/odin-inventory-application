const itemController = require("../controllers/itemController");

const { Router } = require("express");

const itemRouter = Router();

// Render views/item.ejs
itemRouter.get("/", itemController.getItems);

// Render new item form
itemRouter.get("/new", itemController.newItemForm);

// Update database and redirect to "/item"
itemRouter.post("/new", itemController.addToItemDatabase);

// Edit item with id#
itemRouter.get("/edit/:itemID", itemController.editItemForm);


module.exports = itemRouter;