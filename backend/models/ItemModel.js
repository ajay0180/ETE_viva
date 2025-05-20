const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    ItemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lostLocation: {
      type: String,
      required: true,
    },
    ownerContact: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
