import { Request, Response } from "express";
import SubprojectModel from "../models/subproject.model";
import languageTranslation from "../tools/languageTranslation";

export async function createSubproject(req: Request, res: Response) {
  const {
    project_id,
    title,
    stack,
    fr_description,
    languages,
    image,
    url,
    git_repo_url,
  } = req.body;
  const description = await languageTranslation(fr_description);
  try {
    const subproject = await SubprojectModel.create({
      project_id,
      title,
      stack,
      description,
      languages,
      image,
      url,
      git_repo_url,
    });
    if (subproject) {
      res.status(200).json(subproject);
    } else {
      res.status(400).json(subproject);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function getAllSubprojects(req: Request, res: Response) {
  try {
    const subprojects = await SubprojectModel.find({});
    if (subprojects) {
      res.status(200).json(subprojects);
    } else {
      res.status(400).json(subprojects);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function getSubprojectById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const subproject = await SubprojectModel.findById(id);
    if (subproject) {
      res.status(200).json(subproject);
    } else {
      res.status(400).json(subproject);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}
