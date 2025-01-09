import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  images: [String],
  slug: String,
  price: Number,
  quantity: Number,
  description: String,
  material: String,
  washCare: String,
  rating: Number,
  date_added: Date,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  collectionType: String, // references sub-collection (e.g., "cotton", "silk")
  // collectionType: { type: mongoose.Schema.Types.ObjectId, ref: "Collection" },
});

export default mongoose.model("Product", productSchema);
