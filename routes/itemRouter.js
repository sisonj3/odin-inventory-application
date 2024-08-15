const { Router } = require("express");

const itemRouter = Router();

// Render views/item.ejs
itemRouter.get("/", (req, res) => res.render("item"));

module.exports = itemRouter;