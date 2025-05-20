const express = require("express");
const { createItem, getAllItem } = require("../controllers/ItemController");

const ItemRoute = express.Router();

ItemRoute.post("/createItem", createItem);
ItemRoute.get("/getAllItems", getAllItem);

module.exports = ItemRoute;
