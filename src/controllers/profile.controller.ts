import { Request, Response } from "express";
import ProfileModel from "../models/profile.model";

export async function createProfile(
  req: Request,
  res: Response,
  newFileName: string
) {
  try {
    const v_profile = await ProfileModel.find({});
    if (v_profile[0]) {
      const profile = await ProfileModel.findOneAndUpdate(
        {},
        { url: newFileName }
      );
      console.log(newFileName);
      console.log(profile);
      res.status(200).json(profile);
    } else {
      console.log("La photo de profile est entrain d'etre crée");
      const profile = await ProfileModel.create({ url: newFileName });
      res.status(200).json(profile);
    }
  } catch (err) {
    console.log("La photo de profile n'a pa pu etre crée");
    res.status(400).json(err);
  }
}

export async function getProfile(req: Request, res: Response) {
  try {
    const profile = await ProfileModel.findOne({});
    if (!profile) {
      throw new Error("Image indispanible");
    } else {
      res.status(200).json(profile);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}
