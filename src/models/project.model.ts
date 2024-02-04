import { Schema, model } from "mongoose";
import { languagesSchema } from "./schema";

const projectSchema = new Schema(
  {
    title: {
      type: languagesSchema,
      require: true,
      trim: true,
    },
    description: {
      type: languagesSchema,
      trim: true,
    },
    image: {
      type: String,
      require: true,
      trim: true,
    },
    skills: {
      type: [String],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = model("project", projectSchema);

export default ProjectModel;
