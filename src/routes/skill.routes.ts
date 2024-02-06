import { Router } from "express";
import {
  createSkill,
  getSkillById,
  getSkillByName,
  getSkills,
} from "../controllers/skill.controller";

const skillRouter = Router();

skillRouter
  .post("/", createSkill)
  .get("/", getSkills)
  .get("/id/:id", getSkillById)
  .get("/name/:name", getSkillByName);

export default skillRouter;
