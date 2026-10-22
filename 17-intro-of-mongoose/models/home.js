const mongoose = require("mongoose");
const favourite = require("./favourite");

//_id is automatically aded by mongoose
const homeSchema = mongoose.Schema({
  houseName: { type: String, require: true },
  price: { type: Number, require: true },
  location: { type: String, require: true },
  rating: { type: Number, require: true },
  photoUrl: { type: String },
  description: { type: String },
});

homeSchema.pre("findOneAndDelete", async function () {
  const homeId = this.getQuery()._id;
  await favourite.deleteMany({ houseId: homeId });
});

module.exports = mongoose.model("Home", homeSchema);
