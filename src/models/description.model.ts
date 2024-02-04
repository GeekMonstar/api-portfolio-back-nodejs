import { Schema, model } from "mongoose";
import { languagesSchema } from "./schema";

const descriptionSchema = new Schema(
  {
    fr: {
      type: String,
      require: true,
    },
    en: {
      type: String,
      require: true,
    },
    es: {
      type: String,
      require: true,
    },
    de: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const DescriptionModel = model("description", descriptionSchema);

export default DescriptionModel;
