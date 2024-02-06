import { Router, Request, Response } from "express";
import multer, { diskStorage } from "multer";
import {
  getAllProjects,
  getProjectById,
} from "../controllers/project.controller";
import { uploadImage } from "../middlewares/upload.middleware";
import {
  createSubproject,
  getAllSubprojects,
  getSubprojectById,
} from "../controllers/subproject.controller";

const subprojectRouter = Router();

subprojectRouter
  .post("/", createSubproject)
  .get("/", getAllSubprojects)
  .get("/:id", getSubprojectById);

export default subprojectRouter;
