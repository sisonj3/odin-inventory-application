const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/indexRouter.js");
const itemRouter = require("./routes/itemRouter.js");
const categoryRouter = require("./routes/categoryRouter.js");

// Set up ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/item", itemRouter);
app.use("/category", categoryRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
