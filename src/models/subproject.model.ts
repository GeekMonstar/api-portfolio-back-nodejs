import { Schema, model } from "mongoose";
import { languagesSchema } from "./schema";

const subprojectSchema = new Schema({
  project_id: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: languagesSchema,
    require: true,
  },
  stack: {
    type: String,
  },
  languages: {
    type: [String],
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  git_repo_url: {
    type: String,
    require: true,
  },
});

const SubprojectModel = model("subproject", subprojectSchema);

export default SubprojectModel;
