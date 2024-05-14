import { Schema, model } from "mongoose";

const waterSchema = new Schema({
  name: String,
});

const Water = model("water", waterSchema);
// category => categories
// mouse => mice

export default Water;
