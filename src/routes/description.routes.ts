import { Router } from "express";
import { createAuth } from "../controllers/auth.controller";
import {
  createDescription,
  getAllDescriptions,
} from "../controllers/description.controller";

const descriptionRouter = Router();

descriptionRouter.post("/", createDescription).get("/", getAllDescriptions);

export default descriptionRouter;
