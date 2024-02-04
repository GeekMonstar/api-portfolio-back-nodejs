import { Request, Response } from "express";
import SkillModel from "../models/skill.model";

export async function createSkill(req: Request, res: Response) {
  try {
    const { type, name, short_name, progress } = req.body;
    const skill = await SkillModel.create({ type, name, short_name, progress });
    if (skill) {
      res.status(200).json(skill);
    } else {
      res.status(400).send("Une érreur est survenue.");
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export async function getSkills(req: Request, res: Response) {
  try {
    const skills = await SkillModel.find({});
    if (skills) {
      res.status(200).json(skills);
    } else {
      res.status(400).send("Une érreur est survenue.");
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function getSkillById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const skills = await SkillModel.find({ id });
    if (skills) {
      res.status(200).json(skills);
    } else {
      res.status(400).send("Une érreur est survenue.");
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

export async function getSkillByName(req: Request, res: Response) {
  try {
    const { name } = req.params;
    const skills = await SkillModel.find({ name });
    if (skills) {
      res.status(200).json(skills);
    } else {
      res.status(400).send("Une érreur est survenue.");
    }
  } catch (err) {
    res.status(400).json(err);
  }
}
