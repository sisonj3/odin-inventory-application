const itemController = require("../controllers/itemController");

const { Router } = require("express");

const itemRouter = Router();

// Render views/item.ejs
itemRouter.get("/", itemController.getItems);

module.exports = itemRouter;