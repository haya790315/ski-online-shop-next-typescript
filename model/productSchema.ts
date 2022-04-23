import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  brand: {type:String,required:[true,"brand is required"]},
  category: {type:String,required:[true,"category is required"]},
  name: {type:String,required:[true,"name is required"]},
  model: {type:String,required:[true,"model is required"]},
  price: {type:Number,required:[true,"price is required"]},
  option: {type:Array,required:[true,"option is required"]},
  gender: {type:String,enum:["男性","女性","両用"],required:[true,"gender is required"]},
  imageURL: String,
  picture: [String],
  saleDate:{type:Date,required:[true,"saleDate is required"]}
});

export default mongoose.models.productsSchema ||
  mongoose.model("Products", productsSchema);