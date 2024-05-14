import { Schema, model } from "mongoose";
import { addUpdateSetting, handleSaveError } from "./hooks.js";
import Joi from "joi";

const waterSchema = new Schema(
  {
    mililiters: {
      type: Number,
      max: 5000,
      required: true,
    },
    usedTime: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

waterSchema.post("save", handleSaveError);
waterSchema.pre("findOneAndUpdate", addUpdateSetting);
waterSchema.post("findOneAndUpdate", handleSaveError);

export const waterAddSchema = Joi.object({
  mililiters: Joi.number().required().messages({
    "any.required": `"mililiters" is a required field`,
  }),
  usedTime: Joi.number().required(),
});
export const waterUpdateSchema = Joi.object({
  mililiters: Joi.number(),
  usedTime: Joi.number(),
});
const Water = model("water", waterSchema);
export default Water;
