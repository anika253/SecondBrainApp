import mongoose, { model, Schema } from "mongoose";
mongoose.connect("mongodb+srv://anika:anika253@cluster0.i2c1xwe.mongodb.net");
const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});
export const UserModel = model("User", UserSchema);
