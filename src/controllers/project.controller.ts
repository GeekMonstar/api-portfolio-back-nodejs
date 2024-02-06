import { Request, Response } from "express";
import ProjectModel from "../models/project.model";
import languageTranslation from "../tools/languageTranslation";

export async function createProject(
  req: Request,
  res: Response,
  newFileName: string
) {
  try {
    const { fr_title, fr_description, skills } = req.body;
    const title = await languageTranslation(fr_title);
    const description = await languageTranslation(fr_description);
    const skillArray = typeof skills == "string" ? skills.split(",") : skills;
    const project = await ProjectModel.create({
      title,
      image: newFileName,
      description,
      skills: skillArray,
    });
    if (project) {
      res.status(200).json(project);
    } else {
      throw new Error("Nous avons rencontré un probleme");
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function getAllProjects(req: Request, res: Response) {
  try {
    const projects = await ProjectModel.find({});
    if (projects) {
      res.status(200).json(projects);
    } else {
      res.status(400).send("Une érreur est survenue.");
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function getProjectById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findById(id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(400).send("Une érreur est survenue.");
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function deleteProject(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const project = await ProjectModel.findByIdAndDelete(id);
    if (project) {
      res.status(200).send("Succesfully");
    } else {
      res.status(400).json(project);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}
