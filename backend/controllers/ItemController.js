const Item = require("../models/ItemModel");

exports.createItem = async (req, res) => {
  try {
    const { name, description, lostLocation, contact } = req.body;

    if (!name || !description || !lostLocation || !contact) {
      return res.status(404).json("Something is missing.");
    }

    const createdItem = await Item.create({
      ItemName: name,
      description,
      lostLocation,
      ownerContact: contact,
    });

    return res
      .status(200)
      .json({ message: "Item created successfully.", createdItem });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Error in creating the item." });
  }
};

exports.getAllItem = async (req, res) => {
  try {
    const result = await Item.find(); // Fetches all items
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch all items." });
  }
};
