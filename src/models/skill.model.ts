import { Schema, model } from "mongoose";

const skillSchema = new Schema(
  {
    type: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
      trim: true,
    },
    short_name: {
      type: String,
      require: true,
      trim: true,
    },
    progress: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const SkillModel = model("skill", skillSchema);

export default SkillModel;
