const mongoose = require("mongoose");
const products = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    quantity: {
      type: String
    },
    description: {
      type: String
    },
   pimage:{
    type:String
   },
   sid: {
    type: mongoose.Schema.Types.ObjectId, ref: 'users' 
  }
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", products);
