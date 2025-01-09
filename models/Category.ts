import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String, // e.g., "sarees", "suits", "jewellery", "shawls"
  collections: [
    {
      slug: String,
      heading: String,
      collectionType: String,
      type: String,
      images: [String],
    },
  ],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export default mongoose.model("Category", categorySchema);
