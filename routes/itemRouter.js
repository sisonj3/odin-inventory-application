const itemController = require("../controllers/itemController");

const { Router } = require("express");

const itemRouter = Router();

// Render views/item.ejs
itemRouter.get("/", itemController.getItems);

// Render new item form
itemRouter.get("/new", itemController.newItemForm);

// Update database and redirect to "/item"
itemRouter.post("/new", itemController.addToItemDatabase);

// Router to edit item form for item with itemID
itemRouter.get("/edit/:itemID", itemController.editItemForm);

// Update database with new informationn
itemRouter.post("/edit/:itemID", itemController.updateItemDatabase);

// Router to delete item
itemRouter.get("/delete/:itemID", itemController.deleteItemFromDatabase);

module.exports = itemRouter;