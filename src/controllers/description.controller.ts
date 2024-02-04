import { Request, Response } from "express";
import DescriptionModel from "../models/description.model";
import languageTranslation from "../tools/languageTranslation";

export async function createDescription(req: Request, res: Response) {
  try {
    const { id, fr_description } = req.body;
    let descriptionObject = await languageTranslation(fr_description);
    const { fr, en, es, de } = descriptionObject;
    const v_description = await DescriptionModel.findOne({});
    console.log(v_description);
    if (v_description) {
      const sendDescription = await DescriptionModel.findOneAndUpdate(
        {},
        {
          $set: {
            fr,
            en,
            es,
            de,
          },
        }
      );
      if (sendDescription) {
        console.log("Trouvé et modifié.");
        res.status(200).json(descriptionObject);
      } else {
        res.status(400).json(sendDescription);
      }
    } else {
      console.log(v_description);
      const description = await DescriptionModel.create({ fr, en, es, de });
      if (description) {
        res.status(200).json(descriptionObject);
      } else {
        res.status(400).json(descriptionObject);
      }
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function getAllDescriptions(req: Request, res: Response) {
  try {
    const descriptions = await DescriptionModel.find({});
    if (descriptions) {
      res.status(200).json(descriptions);
    } else {
      res.status(404).send("Rien n'a été trouvé.");
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function get(req: Request, res: Response) {
  try {
    const descriptions = await DescriptionModel.find({});
    if (descriptions) {
      res.status(200).json(descriptions);
    } else {
      res.status(404).send("Rien n'a été trouvé.");
    }
  } catch (err) {
    res.status(400).json(err);
  }
}
