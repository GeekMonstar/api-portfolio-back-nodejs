import { Schema, model } from "mongoose";

const profileSchema = new Schema(
  {
    url: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProfileModel = model("profile", profileSchema);

export default ProfileModel;
