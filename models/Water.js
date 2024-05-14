import { Schema, model } from "mongoose";
import { addUpdateSetting, handleSaveError } from "./hooks.js";
import Joi from "joi";

const waterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Water = model("water", waterSchema);
// category => categories
// mouse => mice
waterSchema.post("save", handleSaveError);

waterSchema.pre("findOneAndUpdate", addUpdateSetting);

waterSchema.post("findOneAndUpdate", handleSaveError);

export const waterAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"title" is a required field`,
  }),
  // director: Joi.string().required(),
});

export const waterUpdateSchema = Joi.object({
  name: Joi.string(),
});

export default Water;
