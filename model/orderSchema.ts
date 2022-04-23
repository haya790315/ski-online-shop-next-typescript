import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, "please enter product id"],
          ref: "Products",
        },
        options: {
          type: Array,
          required: [true, "please enter order options"],
        },
      }
    
  ],
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
  paymentAmount: {
    type: Number,
    required: [true, "payment is not defined"],
  },
  paymentCondition: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.OrderSchema ||
  mongoose.model("Orders", orderSchema);
