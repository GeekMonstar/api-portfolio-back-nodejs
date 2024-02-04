import { Router } from "express";
import {
  createSkill,
  getSkillById,
  getSkillByName,
  getSkills,
} from "../controllers/skill.controller";
import versionRouter from "./version.routes";

const skillRouter = Router();

skillRouter
  .post("/", createSkill)
  .get("/", getSkills)
  .use("/v", versionRouter)
  .get("/id/:id", getSkillById)
  .get("/name/:name", getSkillByName);

export default skillRouter;
