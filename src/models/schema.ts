import { Schema } from "mongoose";

export const languagesSchema = new Schema({
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
});
